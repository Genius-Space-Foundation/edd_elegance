import { SectionHeader, ServiceCard, Button } from "@/components/ui";

export const metadata = {
  title: "Our Services | Edd's Elegance Beauty Studio",
  description: "Explore our premium beauty services including bridal makeup, acrylic nails, hair installation, and professional pedicures in Ho.",
};

export default function ServicesPage() {
  const categories = [
    {
      title: "Makeup",
      description: "From natural everyday looks to full bridal glamour, our makeup artists enhance your features using premium products.",
      services: [
        { title: "Everyday Makeup", description: "A flawless, natural look perfect for work, meetings, or casual outings.", price: "From GHS 150" },
        { title: "Bridal Makeup", description: "Long-lasting, camera-ready glamorous makeup for your special day.", price: "From GHS 800" },
        { title: "Photoshoot Glam", description: "Bold and striking makeup designed specifically for studio lighting.", price: "From GHS 300" },
      ]
    },
    {
      title: "Nails",
      description: "Express your style with our durable and beautiful nail art, extensions, and care services.",
      services: [
        { title: "Acrylic Nails", description: "Classic, durable extensions with your choice of shape, color, and design.", price: "From GHS 120" },
        { title: "Builder Gel", description: "A stronger, thicker gel applied over natural nails to promote growth and strength.", price: "From GHS 150" },
        { title: "Stick-on Nails", description: "Quick, beautiful, and reusable press-on nails for instant glamour.", price: "From GHS 80" },
        { title: "Polygel Nails", description: "The perfect hybrid between acrylic and hard gel—lightweight and flexible.", price: "From GHS 180" },
      ]
    },
    {
      title: "Hair",
      description: "Professional installations and styling to give you a flawless, natural-looking finish.",
      services: [
        { title: "Frontal Installation", description: "Expertly melted lace frontals for a seamless, undetectable hairline.", price: "From GHS 250" },
        { title: "Closure Installation", description: "Protective styling with perfectly laid closures.", price: "From GHS 180" },
        { title: "Ponytails", description: "Sleek, elegant ponytail styling for any occasion.", price: "From GHS 100" },
      ]
    },
    {
      title: "Spa & Care",
      description: "Relaxing treatments to rejuvenate your hands and feet.",
      services: [
        { title: "Professional Pedicure", description: "A relaxing foot soak, scrub, mask, and massage followed by polish.", price: "From GHS 150" },
        { title: "Manicure", description: "Complete nail and cuticle care with a relaxing hand massage.", price: "From GHS 80" },
      ]
    }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-brand-black w-full pt-20">
      
      {/* Header Section */}
      <section className="relative py-24 bg-brand-black w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/5 to-transparent z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader 
            title="Our Signature Services" 
            subtitle="Explore our curated selection of luxury beauty treatments. Every service is performed by our expert stylists using premium products to ensure you leave looking and feeling your absolute best."
          />
        </div>
      </section>

      {/* Services Categories */}
      <section className="pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-32">
          {categories.map((category, idx) => (
            <div key={idx} className="relative animate-fade-in-up" style={{ animationDelay: `${idx * 200}ms` }}>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-6">
                <div className="max-w-2xl">
                  <h2 className="font-serif text-4xl text-white font-bold mb-4 tracking-wide">{category.title}</h2>
                  <p className="text-gray-400 font-light text-lg">{category.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {category.services.map((service, sIdx) => (
                  <ServiceCard 
                    key={sIdx}
                    title={service.title}
                    description={service.description}
                    price={service.price}
                    imageUrl={
                      category.title === "Makeup" ? "/images/makeup.jpg" :
                      category.title === "Nails" ? "/images/nails.jpg" :
                      category.title === "Hair" ? "/images/hair.jpg" :
                      "/images/pedicure.jpg"
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 w-full bg-brand-black border-t border-brand-gold/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-white font-bold mb-6">
            Ready to book your session?
          </h2>
          <p className="text-gray-400 text-lg mb-10 font-light max-w-2xl mx-auto">
            Secure your spot today. We recommend booking at least 48 hours in advance for bridal and large group services.
          </p>
          <Button href="/booking" variant="primary" className="px-12 py-4 text-lg shadow-gold-glow">
            Book Appointment
          </Button>
        </div>
      </section>

    </main>
  );
}
