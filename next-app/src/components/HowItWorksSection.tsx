import { Calendar, MapPin, Sparkles } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Choose Service",
      description: "Select from our range of luxury treatments, from massages to facials to nail care.",
      step: "01"
    },
    {
      icon: MapPin,
      title: "Pick Date & Location",
      description: "Choose your preferred date, time, and location - we bring the spa to you.",
      step: "02"
    },
    {
      icon: Sparkles,
      title: "Relax",
      description: "Our certified therapists arrive with everything needed for your perfect spa experience.",
      step: "03"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to your perfect mobile spa experience
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="relative text-center group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-primary/20 z-0" />
                )}
                
                {/* Step Card */}
                <div className="luxury-card p-8 rounded-2xl border-luxury relative z-10 h-full">
                  {/* Step Number */}
                  <div className="text-6xl font-heading font-bold text-primary/20 mb-4">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 group-hover:animate-glow">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-heading font-semibold mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;