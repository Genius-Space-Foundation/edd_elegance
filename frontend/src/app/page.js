import { SectionHeader, Button, ServiceCard } from "@/components/ui";
import { MapPin, Phone, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-black w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/20 via-brand-black/60 to-brand-black z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-top bg-no-repeat transform scale-105 animate-[slowZoom_20s_ease-out_forwards]"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-20">
          <p className="animate-fade-in-up text-brand-gold uppercase tracking-[0.4em] font-medium mb-6 text-sm md:text-base">
            Edd's Elegance
          </p>
          <h1 className="animate-fade-in-up animation-delay-200 font-serif text-5xl md:text-7xl lg:text-[7rem] text-white font-bold mb-8 leading-[1.1] tracking-tight">
            Where Beauty <br /> <span className="text-gradient-gold">Meets Elegance</span>
          </h1>
          <p className="animate-fade-in-up animation-delay-400 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Professional makeup, nail art, custom hair installation, and luxury pedicure services designed to help you look and feel your absolute best.
          </p>
          <div className="animate-fade-in-up animation-delay-600 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <Button href="/booking">Book an Appointment</Button>
            <Button href="/services" variant="secondary">Explore Our Services</Button>
          </div>
        </div>
      </section>

      {/* Quick Action Bar */}
      <section className="relative z-30 -mt-16 max-w-5xl mx-auto px-4 w-full animate-fade-in-up animation-delay-600">
        <div className="glass-panel-gold rounded-3xl p-8 md:p-10 flex flex-col md:flex-row justify-between items-center md:divide-x divide-white/10 gap-8 md:gap-0">
          
          <div className="flex-1 text-center px-4 w-full group">
            <h3 className="text-white font-serif font-bold text-xl mb-2 group-hover:text-brand-gold transition-colors">Location</h3>
            <p className="text-gray-400 text-sm font-light">Central Ho, Volta Region</p>
          </div>
          
          <div className="flex-1 text-center px-4 w-full group">
            <h3 className="text-white font-serif font-bold text-xl mb-2 group-hover:text-brand-gold transition-colors">Working Hours</h3>
            <p className="text-gray-400 text-sm font-light">Mon - Sat: 9:00 AM - 7:00 PM</p>
          </div>
          
          <div className="flex-1 text-center px-4 w-full group">
            <h3 className="text-white font-serif font-bold text-xl mb-2 group-hover:text-brand-gold transition-colors">Book Now</h3>
            <a href="tel:0202306311" className="text-brand-gold hover:text-white text-sm font-bold tracking-wider transition-colors">020 230 6311</a>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] w-full rounded-[2rem] overflow-hidden">
            <img src="/images/about.jpg" alt="About Edd's Elegance" className="w-full h-full object-cover" />
            <div className="absolute inset-0 border border-brand-gold/30 m-6 rounded-3xl" />
          </div>
          <div className="space-y-8">
            <SectionHeader 
              title="A Sanctuary for Beauty" 
              subtitle="At Edd's Elegance, we believe that beauty is an art form. Our studio provides a luxurious, relaxing environment where highly trained professionals craft the perfect look tailored just for you."
              align="left"
            />
            <div className="pt-4">
              <Button href="/about" variant="secondary">
                Discover Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-white/5 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Beauty Services, Perfected" 
            subtitle="Explore our signature offerings tailored to elevate your natural beauty."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              title="Bridal Makeup"
              description="Elegant bridal makeup designed to complement your wedding-day look."
              imageUrl="/images/makeup.jpg"
            />
            <ServiceCard 
              title="Acrylic Nails"
              description="Beautiful and durable acrylic nail designs tailored to your style."
              imageUrl="/images/nails.jpg"
            />
            <ServiceCard 
              title="Hair Installation"
              description="Professional hair installation customized to your desired style."
              imageUrl="/images/hair.jpg"
            />
            <ServiceCard 
              title="Pedicure"
              description="Relaxing pedicure services designed to leave your feet feeling refreshed."
              imageUrl="/images/pedicure.jpg"
            />
          </div>
          
          <div className="mt-16 text-center">
            <Button href="/services" variant="secondary">View All Services</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 w-full relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel-gold rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-olive/20 rounded-full blur-[100px]" />
            
            <div className="relative z-10">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
                Ready for a <span className="text-gradient-gold">Transformation?</span>
              </h2>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
                Book your appointment today and let our experts enhance your natural beauty in our luxury studio.
              </p>
              <Button href="/booking" variant="primary" className="px-10 py-4 text-lg">
                Book Your Experience
              </Button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
