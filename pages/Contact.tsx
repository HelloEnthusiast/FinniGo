import React from 'react';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl font-extrabold text-slate-900">Get in Touch</h1>
          <p className="text-slate-500">
            Start your Finnish journey today. Our global team is ready to assist.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-5">
              <div className="p-3 bg-white-50 text-red-900 rounded-xl shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold mb-2">Helsinki Office</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Mannerheimintie 15, 00100 Helsinki, Finland
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-5">
              <div className="p-3 bg-white-50 text-amber-600 rounded-xl shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold mb-2">Kathmandu HQ</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Thapagaun, Unigo Building, Kathmandu, Nepal
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-slate-50 text-slate-400 rounded-lg">
                  <Phone size={18} />
                </div>
                <span className="text-sm font-medium">+358 40 123 4567</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-2 bg-slate-50 text-slate-400 rounded-lg">
                  <Mail size={18} />
                </div>
                <span className="text-sm font-medium">connect@finnigo.org</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-2 bg-slate-50 text-slate-400 rounded-lg">
                  <MessageSquare size={18} />
                </div>
                <span className="text-sm font-medium">
                  Live Chat Available 9-5 EET
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
            <h2 className="text-2xl font-bold mb-8">Send us an Inquiry</h2>

            <form
              className="grid md:grid-cols-2 gap-6"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm
                             focus:outline-none focus:ring-0 focus:border-red-700 transition-all"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm
                             focus:outline-none focus:ring-0 focus:border-red-700 transition-all"
                />
              </div>

              {/* Status */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Current Status
                </label>
                <select
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm appearance-none
                             focus:outline-none focus:ring-0 focus:border-red-700 transition-all"
                >
                  <option>Planning to apply for Finland</option>
                  <option>Waiting for Residence Permit</option>
                  <option>Already in Finland (Seeking Support)</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  How can we help?
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm
                             focus:outline-none focus:ring-0 focus:border-red-700 transition-all"
                ></textarea>
              </div>

              {/* Button */}
              <div className="md:col-span-2 pt-4">
                <button
                  type="submit"
                  className="w-full py-4 bg-red-700 text-white font-bold rounded-xl
                             shadow-lg shadow-red-700/20 hover:bg-red-600 transition-all
                             transform hover:-translate-y-0.5"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
