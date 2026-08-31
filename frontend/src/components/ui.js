import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function Button({ href, children, variant = "primary", className = "", ...props }) {
  const baseStyle = "inline-flex items-center justify-center font-medium transition-premium tracking-wide relative overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-gold to-brand-olive text-black rounded-full px-8 py-3.5 hover:shadow-gold-glow-strong hover:scale-[1.02]",
    secondary: "bg-transparent border border-brand-gold text-brand-gold rounded-full px-8 py-3.5 hover:bg-brand-gold/10 hover:shadow-gold-glow",
    whatsapp: "bg-[#25D366] text-white rounded-full px-8 py-3.5 hover:bg-[#128C7E] shadow-premium hover:shadow-[#25D366]/30 hover:scale-[1.02]",
  };

  const buttonContent = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" />
      )}
    </>
  );

  if (href) {
    if (href.startsWith("http") || href.startsWith("tel:")) {
      return (
        <a href={href} className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
          {buttonContent}
        </a>
      );
    }
    return (
      <Link href={href} className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {buttonContent}
    </button>
  );
}

export function WhatsAppButton({ className = "" }) {
  return (
    <Button href="https://wa.me/233202306311" variant="whatsapp" className={className}>
      <MessageCircle size={18} className="mr-2" />
      Chat on WhatsApp
    </Button>
  );
}

export function SectionHeader({ title, subtitle, align = "center" }) {
  return (
    <div className={`flex flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"} mb-16`}>
      <div className="w-12 h-[2px] bg-brand-gold mb-6" />
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 max-w-2xl text-lg font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function ServiceCard({ title, description, price, imageUrl, href = "/booking" }) {
  return (
    <div className="group glass-panel rounded-2xl overflow-hidden hover:border-brand-gold/40 hover:shadow-gold-glow transition-premium flex flex-col h-full cursor-pointer">
      <div className="relative h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-premium z-10" />
        <img 
          src={imageUrl || "/images/placeholder.jpg"} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)]"
        />
        <div className="absolute bottom-6 left-6 z-20">
          <h3 className="font-serif text-2xl font-bold text-white group-hover:text-brand-gold transition-premium">{title}</h3>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow bg-brand-black/50">
        <p className="text-gray-400 mb-6 flex-grow text-sm leading-relaxed font-light">{description}</p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
          <span className="text-brand-ivory font-medium text-sm">
            {price ? price : "Price on request"}
          </span>
          <Link href={href} className="text-brand-gold hover:text-white text-xs font-bold uppercase tracking-[0.2em] transition-colors flex items-center group/link">
            Book <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
