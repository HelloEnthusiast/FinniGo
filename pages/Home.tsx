
import React from 'react';
import { ArrowRight, CheckCircle2, Globe2, GraduationCap, Users, Zap } from 'lucide-react';
import { SERVICES, getIcon, COLORS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-slate-50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-red-900/5 -skew-x-12 transform origin-top-right hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-red-700 font-bold text-sm">
              <Zap size={16} />
              <span>The Next Chapter of Unigo in Finland</span>
            </div> */}
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight">
              Study, Live & <span className="text-red-700 italic ">Thrive</span> in Finland.
            </h1>
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
              We don't just help you get admitted; we ensure you succeed after you land.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#/services" 
                className="px-8 py-4 rounded-xl bg-red-700 text-white font-bold text-lg flex items-center justify-center gap-2 hover:bg-red-800 transition-all shadow-xl shadow-blue-900/20"
              >
                Our Support Services <ArrowRight size={20} />
              </a>
              <a 
                href="#/ai-guide" 
                className="px-8 py-4 rounded-xl bg-white border-2 border-slate-200 text-slate-700 font-bold text-lg flex items-center justify-center gap-2 hover:border-blue-900 hover:text-blue-900 transition-all"
              >
                Try AI Guide
              </a>
            </div>
            <div className="flex items-center gap-6 pt-4 text-slate-400 border-t border-slate-200 w-fit">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/${i+10}/100/100`} className="w-10 h-10 rounded-full border-2 border-white" alt="Student" />
                ))}
              </div>
              <p className="text-sm font-medium"><span className="text-slate-900 font-bold">500+</span> Students Assisted</p>
            </div>
          </div>
          <div className="relative animate-fade-in-up">
            <div className="">
              <img src="/images/ppppp.png" className="" alt="Helsinki City" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white-100 text-red-600 rounded-lg">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Post-Arrival Success</p>
                  <p className="text-lg font-bold text-slate-900">98% Integration Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Comprehensive Support Network</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">From arrival concierge to career coaching, we provide the ultimate student ecosystem in Finland.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.slice(0, 4).map(service => (
              <div key={service.id} className="p-8 rounded-2xl border border-slate-100 hover:border-blue-900/20 hover:bg-slate-50 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                  {getIcon(service.icon, 28)}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href="#/services" className="inline-flex items-center gap-2 text-blue-900 font-bold hover:underline">
              View All 6+ Support Services <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Stats / Impact */}
      <section className="py-20 bg-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 text-center">
          <div className="space-y-2">
            <p className="text-5xl font-extrabold text-amber-400">12+</p>
            <p className="text-lg font-medium opacity-80">Finnish University Partners</p>
          </div>
          <div className="space-y-2">
            <p className="text-5xl font-extrabold text-amber-400">24/7</p>
            <p className="text-lg font-medium opacity-80">On-Ground Local Support</p>
          </div>
          <div className="space-y-2">
            <p className="text-5xl font-extrabold text-amber-400">100%</p>
            <p className="text-lg font-medium opacity-80">Commitment to Student Success</p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-[2rem] p-12 shadow-sm border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="w-32 h-32 shrink-0 rounded-2xl overflow-hidden ring-4 ring-slate-50 shadow-lg">
                <img src="/public/images/vijayaaaa.png" className="w-full h-full object-cover" alt="Director" />
              </div>
              <div className="space-y-4">
                <p className="text-xl italic text-slate-700 leading-relaxed">
                  FinniGo was born from our realization that Nepali students needed more than just a visa. They needed a home, a guide, and a friend in Finland. We are that bridge.
                </p>
                <div>
                  <h4 className="font-bold text-lg">Vijaya Gautam</h4>
                  <p className="text-blue-900 font-semibold text-sm">CEO, Unigo Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
