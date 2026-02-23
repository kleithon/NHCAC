
import React from 'react';
import { Calendar, Shield, Coffee, Accessibility, Users } from 'lucide-react';

const Impact: React.FC = () => {
  const benefits = [
    {
      title: "Year-round Activities",
      description: "Cultural and educational activities open to all Enfield residents, from poetry workshops to art exhibitions.",
      icon: <Calendar className="w-8 h-8 text-emerald-600" />
    },
    {
      title: "Safety & Activation",
      description: "Daytime activation of the site improves park safety through regular use and community presence.",
      icon: <Shield className="w-8 h-8 text-emerald-600" />
    },
    {
      title: "Community Café",
      description: "A welcoming, affordable café serving park users, creating a social hub for families and visitors.",
      icon: <Coffee className="w-8 h-8 text-emerald-600" />
    },
    {
      title: "Essential Facilities",
      description: "Free public access to toilet facilities, addressing the current absence of toilets within the park.",
      icon: <Accessibility className="w-8 h-8 text-emerald-600" />
    },
    {
      title: "Local Synergy",
      description: "Complementary programming alongside existing attractions such as Rainbow Soft Play and Chickenshed Theatre.",
      icon: <Users className="w-8 h-8 text-emerald-600" />
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 serif">Local Benefits</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            NHCAC is designed to be more than just a centre; it's a vital part of the Enfield community ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="p-8 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300">
              <div className="bg-emerald-100/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 serif">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
