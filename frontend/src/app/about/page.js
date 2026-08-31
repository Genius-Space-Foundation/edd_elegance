import { SectionHeader, Button } from "@/components/ui";

export const metadata = {
  title: "About Us | Edd's Elegance Beauty Studio",
  description: "Learn about Edd's Elegance, a premium beauty studio in Ho, Ghana specializing in professional makeup, nails, hair, and pedicures.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-black w-full pt-20">
      
      <section className="relative py-24 bg-brand-black w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/5 to-transparent z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in-up">
          <SectionHeader 
            title="Our Story" 
            subtitle="Discover the passion and expertise behind Ho's premier beauty destination."
          />
        </div>
      </section>

      <section className="pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-8 animate-fade-in-up animation-delay-200">
            <h2 className="font-serif text-3xl md:text-5xl text-white font-bold leading-tight">
              More than just beauty, <br />
              <span className="text-gradient-gold">it's an experience.</span>
            </h2>
            <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed">
              <p>
                Founded with a vision to bring world-class beauty services to the heart of Ho, Edd's Elegance has quickly become the sanctuary for those who seek perfection.
              </p>
              <p>
                Our philosophy is simple: everyone deserves to look and feel their absolute best. Whether it's the most important day of your life, or simply a day of self-care, our expert team is dedicated to providing an unparalleled luxury experience.
              </p>
              <p>
                We use only the finest premium products across all our services—from flawless bridal makeovers to durable, intricate nail artistry and seamless hair installations.
              </p>
            </div>
            
            <div className="pt-8 flex space-x-6 border-t border-white/10">
              <div>
                <h4 className="text-brand-gold font-bold text-4xl font-serif">5+</h4>
                <p className="text-gray-500 text-sm tracking-wider uppercase mt-2">Years of Excellence</p>
              </div>
              <div>
                <h4 className="text-brand-gold font-bold text-4xl font-serif">1k+</h4>
                <p className="text-gray-500 text-sm tracking-wider uppercase mt-2">Happy Clients</p>
              </div>
            </div>
          </div>
          
          <div className="relative h-[600px] lg:h-[700px] w-full rounded-[2rem] overflow-hidden glass-panel group animate-fade-in-up animation-delay-400">
            <img src="/images/about.jpg" alt="Edd's Elegance Studio" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            <div className="absolute inset-0 border border-brand-gold/30 m-6 rounded-3xl pointer-events-none" />
          </div>
        </div>
      </section>

      <section className="py-24 w-full bg-brand-black border-t border-brand-gold/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-white font-bold mb-6">
            Experience the elegance yourself.
          </h2>
          <p className="text-gray-400 text-lg mb-10 font-light max-w-2xl mx-auto">
            Our team is ready to welcome you to our luxury studio.
          </p>
          <Button href="/booking" variant="primary" className="px-12 py-4 text-lg shadow-gold-glow">
            Book Appointment
          </Button>
        </div>
      </section>

    </main>
  );
}
