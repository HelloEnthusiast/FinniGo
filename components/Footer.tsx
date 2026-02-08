import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { COLORS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-700 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-extrabold tracking-tight">
              <span style={{ color: 'white' }}>Finni</span>
              <span style={{ color: 'white' }}>Go</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed text-white/80">
            A premium educational consultancy bridge between Nepal and Finland. Empowering international students with post-arrival support, career guidance, and academic excellence.
          </p>
          {/* <div className="flex gap-4">
            <a href="#" className="hover:text-blue-400 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-pink-400 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
          </div> */}
        </div>

        <div>
          <h4 className="font-bold mb-6">Explore</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#/services" className="hover:text-white transition-colors">Our Services</a></li>
            <li><a href="#/about" className="hover:text-white transition-colors">Who We Are</a></li>
            <li><a href="#/ai-guide" className="hover:text-white transition-colors">AI Student Guide</a></li>
            <li><a href="#/contact" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Finland Office</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3 items-center">
              <MapPin className="text-white/70 shrink-0" size={18} />
              <span>Mannerheimintie 15, 00100 Helsinki, Finland</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone className="text-white/70 shrink-0" size={18} />
              <span>+358 40 123 4567</span>
            </li>
            <li className="flex gap-3 items-center">
              <Mail className="text-white/70 shrink-0" size={18} />
              <span>helsinki@finnigo.org</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Kathmandu (Unigo)</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3 items-center">
              <MapPin className="text-white/70 shrink-0" size={18} />
              <span>Thapagaun, Kathmandu, Nepal</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone className="text-white/70 shrink-0" size={18} />
              <span>+977-9705434900</span>
            </li>
            <li className="flex gap-3 items-center">
              <Mail className="text-white/70 shrink-0" size={18} />
              <span>info@finnigo.org</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/20 text-center text-xs text-white/60">
        <p>© {new Date().getFullYear()} FinniGo Educational Consultancy. All rights reserved. Registered in Finland & Nepal.</p>
      </div>
    </footer>
  );
};

export default Footer;
