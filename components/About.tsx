
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <section className="py-20 bg-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-8 serif italic">Who was Nazım Hikmet?</h1>
          <p className="text-xl text-emerald-100 leading-relaxed font-light">
            "The most beautiful sea is the one that hasn't been sailed yet."
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg prose-slate max-w-none space-y-8">
            <p className="text-lg leading-relaxed text-slate-700">
              Nazım Hikmet Ran (1902–1963) was a Turkish poet, playwright, and novelist. 
              Known globally as a "romantic communist" and a "romantic revolutionary", his poetry has been translated 
              into more than fifty languages. He spent much of his life in prison or exile due to his political beliefs, 
              yet his work remained steadfastly focused on the beauty of life, the struggle for freedom, 
              and the brotherhood of man.
            </p>
            
            <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-emerald-800 italic text-slate-600 my-10">
              "His verse is free, flowing, and deeply humanistic. He broke the rigid structures of Ottoman poetry to 
              bring the language of the people into the realm of high art."
            </div>

            <h3 className="text-2xl font-bold text-slate-900 serif">Why a Centre in his Name?</h3>
            <p className="text-lg text-slate-700">
              The NHCAC carries forward his legacy by creating a space where diversity is celebrated and 
              where art serves as a bridge between different cultures. By establishing this centre in Enfield, 
              we aim to provide a local platform for global values: peace, artistic excellence, and 
              educational accessibility for all.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
