
import React from 'react';
import { History, Target, ShieldCheck, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold text-slate-900 leading-tight">The Bridge from <br/><span className="text-red-700">Everywhere to Helsinki</span></h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              For over a decade, <span className="font-bold text-slate-900">Unigo Educational Consultancy</span> has been Nepal's premier destination for study-abroad guidance. As the demand for Finnish education grew, we realized that our responsibility shouldn't end at the Tribhuvan International Airport.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              FinniGo was established in Helsinki as the official extension of Unigo. Our mission is simple: to provide a localized, physical presence in Finland that welcomes students, solves their arrival hurdles, and mentors them until they are fully integrated Finnish citizens or successful graduates.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/seed/red/400/500" className="rounded-2xl shadow-lg mt-12" alt="Nepal" />
            <img src="https://picsum.photos/seed/helsinki2/400/500" className="rounded-2xl shadow-lg" alt="Finland" />
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          <div className="p-8 bg-slate-50 rounded-2xl space-y-4">
            <div className="w-12 h-12 rounded-lg bg-blue-100 text-red-700 flex items-center justify-center">
              <History size={24} />
            </div>
            <h3 className="text-xl font-bold">Our Heritage</h3>
            <p className="text-sm text-slate-600">Built on Unigo's 10+ years of trust and ethical consultancy practices.</p>
          </div>
          <div className="p-8 bg-slate-50 rounded-2xl space-y-4">
            <div className="w-12 h-12 rounded-lg bg-blue-100 text-red-700 flex items-center justify-center">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold">Local Vision</h3>
            <p className="text-sm text-slate-600">Operating physically in Helsinki to provide real-world, real-time help.</p>
          </div>
          <div className="p-8 bg-slate-50 rounded-2xl space-y-4">
            <div className="w-12 h-12 rounded-lg bg-blue-100 text-red-700 flex items-center justify-center">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold">Ethics First</h3>
            <p className="text-sm text-slate-600">No hidden costs. Transparent guidance on laws, permits, and work rights.</p>
          </div>
          <div className="p-8 bg-slate-50 rounded-2xl space-y-4">
            <div className="w-12 h-12 rounded-lg bg-blue-100 text-red-700 flex items-center justify-center">
              <Heart size={24} />
            </div>
            <h3 className="text-xl font-bold">Student Care</h3>
            <p className="text-sm text-slate-600">We treat every student like family, ensuring no one feels alone in the North.</p>
          </div>
        </div>

        {/* Team preview */}
        <div className="text-center space-y-12">
          <h2 className="text-3xl font-bold">Our Global Presence</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-xl">
                 <img src="https://picsum.photos/seed/office1/600/400" className="w-full h-full object-cover" alt="Office Kathmandu" />
              </div>
              <h4 className="text-xl font-bold">Headquarters: Kathmandu</h4>
              <p className="text-slate-500">The first step of your journey. Counseling, test prep, and visa processing.</p>
            </div>
            <div className="space-y-4">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-xl">
                 <img src="https://picsum.photos/seed/office2/600/400" className="w-full h-full object-cover" alt="Office Helsinki" />
              </div>
              <h4 className="text-xl font-bold">Operations: Helsinki</h4>
              <p className="text-slate-500">Your second home. Post-arrival help, job placement assistance, and legal aid.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
