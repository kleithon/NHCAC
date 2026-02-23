
import React from 'react';
import { Coffee, Map, BookOpen, Music, Trash2 } from 'lucide-react';

const Facilities: React.FC = () => {
  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 serif">Our Proposed Space</h2>
          <p className="text-slate-500 text-lg">A modern cultural hub designed with the community in mind.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-800 text-white rounded-full flex items-center justify-center">
                <Coffee />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 serif">Community Café</h3>
                <p className="text-slate-600">A space for conversation and reflection. Serving locally sourced coffee and affordable snacks for park visitors and center guests alike.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-800 text-white rounded-full flex items-center justify-center">
                <BookOpen />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 serif">Library & Reading Room</h3>
                <p className="text-slate-600">Dedicated to world literature and arts, with a special collection of translated works from across the globe.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-800 text-white rounded-full flex items-center justify-center">
                <Music />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 serif">Multipurpose Art Studio</h3>
                <p className="text-slate-600">Equipped for workshops, music rehearsals, and intimate gallery exhibitions.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-800 text-white rounded-full flex items-center justify-center">
                <Trash2 />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 serif">Hygiene & Accessibility</h3>
                <p className="text-slate-600">Modern, clean, and free public toilets accessible to all park users, resolving a long-standing need in the area.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200" 
              alt="Cultural Space" 
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-emerald-800 text-white p-8 rounded-2xl shadow-xl max-w-xs">
              <p className="text-sm font-medium italic">"The project will breathe new life into underutilized areas, creating a safer, more vibrant environment for everyone."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
