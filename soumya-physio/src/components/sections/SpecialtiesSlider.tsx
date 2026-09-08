import React from 'react';

interface SpecialtyItem {
  title: string;
  image: string;
}

const specialties: SpecialtyItem[] = [
  { title: "Chiropractor", image: "https://images.unsplash.com/photo-1614853316476-de00d14cb1fc?auto=format&fit=crop&w=400&q=80" },
  { title: "Ergonomics Specialist", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&q=80" },
  { title: "Geriatric Physiotherapist", image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=400&q=80" },
  { title: "Home Physiotherapist", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&q=80" },
  { title: "Functional Strength Expert", image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=400&q=80" }
];

export const SpecialtiesSlider: React.FC = () => {
  // Triple the array elements to ensure a flawless, infinite looping track
  const duplicatedList = [...specialties, ...specialties, ...specialties];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="text-center mb-6">
        <span className="text-xs font-bold tracking-widest text-[#0F766E] uppercase bg-teal-50 px-3 py-1 rounded-full">
          Featured Specialties
        </span>
      </div>

      {/* Infinite Scroll Track Container */}
      <div className="flex overflow-x-hidden relative w-full select-none">
        {/* Pauses the slider movement dynamically on mouse hover */}
        <div className="flex space-x-6 animate-marquee whitespace-nowrap py-4 hover:[animation-play-state:paused] cursor-pointer">
          {duplicatedList.map((item, index) => (
            <div 
              key={index} 
              className="inline-block w-64 bg-[#F8FAFC] rounded-3xl shadow-card border border-teal-50/40 overflow-hidden flex-shrink-0 transition-all duration-300 hover:scale-105 hover:shadow-card-hover"
            >
              <div className="h-48 overflow-hidden bg-slate-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-all duration-500" 
                />
              </div>
              <div className="p-4 bg-white text-center border-t border-teal-50/30">
                <h3 className="font-semibold text-heading font-display text-base tracking-tight">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};