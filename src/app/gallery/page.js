"use client";

import { useState, useRef } from "react";
import { SectionHeader } from "@/components/ui";
import { X, Play } from "lucide-react";

// A simple Before/After Slider Component
function BeforeAfterSlider({ beforeUrl, afterUrl }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pos);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full overflow-hidden select-none cursor-ew-resize rounded-xl"
      onMouseMove={(e) => handleMove(e.clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
    >
      {/* After Image (Background) */}
      <img src={afterUrl} alt="After" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      
      {/* Before Image (Foreground, clipped) */}
      <div 
        className="absolute inset-0 h-full overflow-hidden" 
        style={{ width: `${position}%` }}
      >
        <img src={beforeUrl} alt="Before" className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none" style={{ width: containerRef.current?.getBoundingClientRect().width || '100vw' }} />
      </div>

      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ left: `calc(${position}% - 2px)` }}
      >
        <div className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center shadow-lg transform -translate-x-[14px]">
          <div className="flex space-x-1">
            <div className="w-0.5 h-3 bg-black"></div>
            <div className="w-0.5 h-3 bg-black"></div>
          </div>
        </div>
      </div>
      
      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur text-white text-xs px-2 py-1 rounded font-bold tracking-wider uppercase">Before</div>
      <div className="absolute top-4 right-4 bg-brand-gold text-black text-xs px-2 py-1 rounded font-bold tracking-wider uppercase shadow-gold-glow">After</div>
    </div>
  );
}

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const filters = ["All", "Makeup", "Nails", "Hair", "Pedicure"];

  // Gallery items supporting "image", "video", and "before-after"
  const galleryItems = [
    { id: 1, type: "before-after", category: "Makeup", beforeUrl: "/images/about.jpg", afterUrl: "/images/makeup.jpg", title: "Bridal Transformation" },
    { id: 2, type: "image", category: "Nails", url: "/images/nails.jpg", title: "Classic Acrylics" },
    { id: 3, type: "video", category: "Hair", url: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "/images/hair.jpg", title: "Installation Process" },
    { id: 4, type: "image", category: "Pedicure", url: "/images/pedicure.jpg", title: "Spa Pedicure" },
    { id: 5, type: "image", category: "Makeup", url: "/images/makeup.jpg", title: "Everyday Glow" },
    { id: 6, type: "before-after", category: "Nails", beforeUrl: "/images/pedicure.jpg", afterUrl: "/images/nails.jpg", title: "Nail Restoration" },
    { id: 7, type: "image", category: "Hair", url: "/images/hair.jpg", title: "Sleek Styling" },
    { id: 8, type: "image", category: "Nails", url: "/images/nails.jpg", title: "Intricate Nail Art" },
    { id: 9, type: "image", category: "Makeup", url: "/images/makeup.jpg", title: "Evening Look" },
  ];

  const filteredItems = activeFilter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <main className="flex min-h-screen flex-col bg-brand-black w-full pt-20">
      
      {/* Header Section */}
      <section className="relative py-24 bg-brand-black w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/5 to-transparent z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader 
            title="Our Portfolio" 
            subtitle="Browse through our finest work, stunning transformations, and behind-the-scenes videos."
          />

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-12 animate-fade-in-up animation-delay-200">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-premium tracking-wide border ${
                  activeFilter === filter
                    ? "bg-brand-gold border-brand-gold text-black shadow-gold-glow scale-105"
                    : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="break-inside-avoid relative group cursor-pointer animate-fade-in-up glass-panel rounded-2xl overflow-hidden hover:border-brand-gold/40 hover:shadow-gold-glow transition-premium"
              style={{ animationDelay: `${(index % 6) * 100}ms` }}
              onClick={() => setSelectedItem(item)}
            >
              
              {item.type === "image" && (
                <img src={item.url} alt={item.title} className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)]" />
              )}

              {item.type === "video" && (
                <div className="relative w-full aspect-square">
                  <img src={item.poster} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s]" />
                  <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:bg-brand-gold group-hover:border-brand-gold group-hover:text-black transition-colors">
                      <Play className="ml-1" size={24} />
                    </div>
                  </div>
                </div>
              )}

              {item.type === "before-after" && (
                <div className="relative w-full">
                  <img src={item.afterUrl} alt={item.title} className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)]" />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur text-white text-[10px] px-2 py-1 rounded font-bold uppercase z-10 border border-white/20 shadow-premium group-hover:bg-brand-gold group-hover:text-black group-hover:border-brand-gold transition-colors">Before & After</div>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-premium flex flex-col justify-end p-6 z-30">
                <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-2">{item.category}</span>
                <h3 className="text-white font-serif text-xl font-bold">{item.title}</h3>
                {item.type === "before-after" && <p className="text-xs text-gray-300 mt-1">Click to interact</p>}
                {item.type === "video" && <p className="text-xs text-gray-300 mt-1">Watch video</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <button 
            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors bg-white/10 rounded-full p-2 backdrop-blur-md z-50"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedItem(null);
            }}
          >
            <X size={32} />
          </button>
          
          <div 
            className="relative max-w-5xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center">
              {selectedItem.type === "image" && (
                <img src={selectedItem.url} alt={selectedItem.title} className="max-w-full max-h-full object-contain rounded-xl shadow-premium" />
              )}
              
              {selectedItem.type === "video" && (
                <video controls autoPlay className="max-w-full max-h-full rounded-xl shadow-premium outline-none">
                  <source src={selectedItem.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}

              {selectedItem.type === "before-after" && (
                <div className="w-full max-w-3xl h-full max-h-[80vh]">
                  <BeforeAfterSlider beforeUrl={selectedItem.beforeUrl} afterUrl={selectedItem.afterUrl} />
                </div>
              )}
            </div>
            
            <div className="mt-6 text-center">
              <h3 className="text-white font-serif text-3xl mb-2">{selectedItem.title}</h3>
              <span className="text-brand-gold text-sm tracking-[0.2em] uppercase font-bold">{selectedItem.category}</span>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
