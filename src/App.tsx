import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Treatments from "./pages/Treatments";
import Massages from "./pages/treatments/Massages";
import Facials from "./pages/treatments/Facials";
import ManicuresPedicures from "./pages/treatments/ManicuresPedicures";
import Waxing from "./pages/treatments/Waxing";
import Lashes from "./pages/treatments/Lashes";
import Packages from "./pages/Packages";
import Specials from "./pages/Specials";
import Events from "./pages/Events";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/treatments/massages" element={<Massages />} />
          <Route path="/treatments/facials" element={<Facials />} />
          <Route path="/treatments/manicures-pedicures" element={<ManicuresPedicures />} />
          <Route path="/treatments/waxing" element={<Waxing />} />
          <Route path="/treatments/lashes" element={<Lashes />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
