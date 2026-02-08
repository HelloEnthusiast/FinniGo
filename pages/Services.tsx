
import React, { useState } from 'react';
import { SERVICES, getIcon } from '../constants';

const Services: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'arrival' | 'academic' | 'lifestyle' | 'legal'>('all');

  const filteredServices = filter === 'all' ? SERVICES : SERVICES.filter(s => s.category === filter);

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">How We Support You</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Our specialized services are designed to make your transition to Finland seamless and your stay successful.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['all', 'arrival', 'academic', 'lifestyle', 'legal'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all capitalize ${
                filter === cat 
                ? 'bg-red-700 text-white shadow-lg' 
                : 'bg-white text-slate-600 border border-slate-200 hover:border-red-700/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 text-red
              -700 flex items-center justify-center mb-6">
                {getIcon(service.icon, 32)}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
              <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{service.category} Support</span>
                <button className="text-red-700 font-bold text-sm hover:underline">Learn More</button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Service Callout */}
        <div className="mt-20 bg-red-700 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl font-bold">Need something specific?</h2>
            <p className="text-red-100 max-w-xl mx-auto">From emergency medical guidance to finding specific cultural groceries, our Helsinki team is on standby for any custom assistance you might need.</p>
            <a href="#/contact" className="inline-block px-10 py-4 bg-white text-red-700 font-bold rounded-xl hover:bg-amber-300 transition-colors">
              Talk to our Helsinki Team
            </a>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
             <div className="absolute bottom-10 right-10 w-64 h-64 bg-amber-400 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
