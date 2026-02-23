
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Impact from './components/Impact';
import Facilities from './components/Facilities';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <Hero />
            <div className="max-w-4xl mx-auto px-6 py-20 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 italic">Our Mission</h2>
              <p className="text-xl text-slate-600 leading-relaxed serif">
                Nazım Hikmet Culture and Arts Centre (NHCAC) is a not-for-profit cultural organisation 
                established to promote arts, literature, education and community cohesion for the public benefit.
              </p>
            </div>
            <Impact />
          </>
        );
      case 'about':
        return <About />;
      case 'impact':
        return <Impact />;
      case 'facilities':
        return <Facilities />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
