
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-8">
          <span className="text-2xl font-bold tracking-tighter text-white serif">NHCAC</span>
          <p className="mt-2 text-sm">Nazım Hikmet Culture and Arts Centre</p>
        </div>
        <div className="flex justify-center space-x-6 mb-8 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          <a href="#" className="hover:text-white transition-colors">Charity Commission</a>
        </div>
        <div className="border-t border-slate-800 pt-8">
          <p className="text-xs">
            © {new Date().getFullYear()} Nazım Hikmet Culture and Arts Centre. Registered Charity (Proposed).
            <br />
            "To live like a tree, single and free, and like a forest, in brotherhood."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
