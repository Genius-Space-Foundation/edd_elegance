import { SectionHeader, WhatsAppButton } from "@/components/ui";
import { MapPin, Phone, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | Edd's Elegance Beauty Studio",
  description: "Get in touch with Edd's Elegance in Ho. Book an appointment, ask a question, or find our location.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-black w-full pt-20">
      
      <section className="relative py-24 bg-brand-black w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/5 to-transparent z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in-up">
          <SectionHeader 
            title="Get in Touch" 
            subtitle="We're here to answer any questions and help you schedule your next beauty experience."
          />
        </div>
      </section>

      <section className="pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div className="space-y-12 animate-fade-in-up animation-delay-200">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-6">Contact Information</h2>
              <p className="text-gray-400 font-light text-lg mb-8">
                Reach out to us directly through WhatsApp for the fastest response, or call us during our working hours.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mr-6 group-hover:bg-brand-gold group-hover:text-black transition-premium shadow-gold-glow">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Phone</h4>
                  <a href="tel:0202306311" className="text-gray-400 hover:text-brand-gold transition-colors block">020 230 6311</a>
                  <a href="tel:0549016216" className="text-gray-400 hover:text-brand-gold transition-colors block mt-1">054 901 6216</a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mr-6 group-hover:bg-brand-gold group-hover:text-black transition-premium shadow-gold-glow">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Location</h4>
                  <p className="text-gray-400">Central Ho<br />Volta Region, Ghana</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold mr-6 group-hover:bg-brand-gold group-hover:text-black transition-premium shadow-gold-glow">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Working Hours</h4>
                  <p className="text-gray-400">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-500 text-sm mt-1">Sunday: Special Appointments Only</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h4 className="text-white font-serif text-2xl mb-6">Send us a message</h4>
              <WhatsAppButton className="w-full sm:w-auto px-10 py-4 shadow-gold-glow text-lg" />
            </div>
          </div>

          <div className="relative h-[500px] lg:h-auto min-h-[500px] w-full rounded-[2.5rem] overflow-hidden glass-panel p-2 animate-fade-in-up animation-delay-400">
            <div className="absolute inset-0 bg-brand-black/50 z-10 pointer-events-none" />
            {/* Map Placeholder with gold tint */}
            <div className="w-full h-full rounded-[2rem] overflow-hidden relative border border-white/10">
              <div className="absolute inset-0 bg-brand-gold/10 mix-blend-color z-20 pointer-events-none" />
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126581.4239841855!2d0.3957!3d6.6111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102122b512a97573%3A0xc34a66e602be5061!2sHo%2C%20Ghana!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "grayscale(80%) contrast(1.2) brightness(0.8) sepia(20%)" }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="relative z-0"
              ></iframe>
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}
