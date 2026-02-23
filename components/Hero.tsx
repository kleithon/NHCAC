import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-8">
            <blockquote className="space-y-4">
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold italic serif text-slate-800 leading-tight">
                “To live like a tree,<br />
                single and free,<br />
                and like a forest,<br />
                in brotherhood.”
              </p>
              <footer className="text-emerald-700 font-medium text-xl md:text-2xl mt-4">— Nazım Hikmet</footer>
            </blockquote>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Inspiration for a vibrant community hub in Enfield, where art and culture unite us like the branches of a grand forest.
            </p>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Artistic border effect */}
              <div className="absolute -inset-4 border-2 border-emerald-100 rounded-full animate-pulse"></div>
              {/* Nazım Hikmet Portrait */}
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Nazim_Hikmet_Ran.jpg/800px-Nazim_Hikmet_Ran.jpg" 
                alt="Portrait of Nazım Hikmet"
                className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border-4 border-white bg-slate-200"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;