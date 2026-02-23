
import React from 'react';
import { Heart } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6 serif">Get Involved</h2>
            <p className="text-lg text-slate-600 mb-10">
              The NHCAC is a grassroots initiative. Whether you're an artist, a local resident, or someone who shares our vision, we need your support to make this centre a reality.
            </p>
            
            <div className="mt-12 p-8 bg-emerald-50 rounded-2xl border border-emerald-100">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="text-rose-500 fill-rose-500" />
                <h3 className="text-xl font-bold text-emerald-900 serif">Support the Vision</h3>
              </div>
              <p className="text-emerald-800/80 mb-6">
                Your donations help us secure the planning and development phases of the centre. We will be sharing more detailed ways to contribute soon.
              </p>
              <button className="w-full bg-emerald-800 text-white py-4 rounded-xl font-bold hover:bg-emerald-900 transition-colors">
                Donate to NHCAC
              </button>
            </div>
          </div>

          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 serif">Send us a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" placeholder="Tell us how you'd like to help..."></textarea>
              </div>
              <button className="w-full bg-slate-800 text-white py-4 rounded-xl font-bold hover:bg-slate-900 transition-colors">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
