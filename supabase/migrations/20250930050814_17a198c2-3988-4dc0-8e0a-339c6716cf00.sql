-- Create services table for spa treatments
CREATE TABLE public.services (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  description text,
  category text NOT NULL,
  base_price_cents integer NOT NULL,
  active boolean DEFAULT true,
  image_url text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Create service variants for different durations
CREATE TABLE public.service_variants (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  service_id uuid REFERENCES public.services(id) ON DELETE CASCADE,
  duration integer NOT NULL, -- in minutes
  price_cents integer NOT NULL,
  created_at timestamp with time zone DEFAULT now()
);

-- Create extras/add-ons table
CREATE TABLE public.extras (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  price_cents integer NOT NULL,
  service_id uuid REFERENCES public.services(id) ON DELETE SET NULL,
  active boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT now()
);

-- Create packages table
CREATE TABLE public.packages (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  description text,
  price_cents integer NOT NULL,
  active boolean DEFAULT true,
  image_url text,
  created_at timestamp with time zone DEFAULT now()
);

-- Create specials table
CREATE TABLE public.specials (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  description text,
  price_cents integer,
  discount_cents integer,
  valid_until timestamp with time zone,
  active boolean DEFAULT true,
  image_url text,
  created_at timestamp with time zone DEFAULT now()
);

-- Create profiles table for users
CREATE TABLE public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name text,
  phone text,
  role text DEFAULT 'customer',
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Create bookings table
CREATE TABLE public.bookings (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  service_id uuid REFERENCES public.services(id),
  package_id uuid REFERENCES public.packages(id),
  variant_id uuid REFERENCES public.service_variants(id),
  address text NOT NULL,
  booking_date date NOT NULL,
  start_time time NOT NULL,
  end_time time,
  subtotal_cents integer NOT NULL,
  total_cents integer NOT NULL,
  paystack_ref text,
  notes text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT booking_service_or_package CHECK (
    (service_id IS NOT NULL AND package_id IS NULL) OR 
    (service_id IS NULL AND package_id IS NOT NULL)
  )
);

-- Create booking extras/items table
CREATE TABLE public.booking_items (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  booking_id uuid REFERENCES public.bookings(id) ON DELETE CASCADE,
  extra_id uuid REFERENCES public.extras(id),
  quantity integer DEFAULT 1,
  line_total_cents integer NOT NULL,
  created_at timestamp with time zone DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_variants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.extras ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.specials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.booking_items ENABLE ROW LEVEL SECURITY;

-- Public read policies for catalog data
CREATE POLICY "Public can read services" ON public.services FOR SELECT USING (active = true);
CREATE POLICY "Public can read service variants" ON public.service_variants FOR SELECT USING (true);
CREATE POLICY "Public can read extras" ON public.extras FOR SELECT USING (active = true);
CREATE POLICY "Public can read packages" ON public.packages FOR SELECT USING (active = true);
CREATE POLICY "Public can read specials" ON public.specials FOR SELECT USING (active = true);

-- Profile policies
CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- Booking policies
CREATE POLICY "Users can view own bookings" ON public.bookings FOR SELECT USING (auth.uid() = customer_id);
CREATE POLICY "Users can create bookings" ON public.bookings FOR INSERT WITH CHECK (auth.uid() = customer_id);
CREATE POLICY "Users can update own bookings" ON public.bookings FOR UPDATE USING (auth.uid() = customer_id);

-- Booking items policies
CREATE POLICY "Users can view own booking items" ON public.booking_items FOR SELECT USING (
  EXISTS (SELECT 1 FROM public.bookings WHERE id = booking_id AND customer_id = auth.uid())
);
CREATE POLICY "Users can create booking items" ON public.booking_items FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM public.bookings WHERE id = booking_id AND customer_id = auth.uid())
);

-- Create function to handle profile creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, name, phone)
  VALUES (NEW.id, NEW.raw_user_meta_data ->> 'name', NEW.raw_user_meta_data ->> 'phone');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Trigger for new user profile creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Add update triggers
CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON public.services 
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles 
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON public.bookings 
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();