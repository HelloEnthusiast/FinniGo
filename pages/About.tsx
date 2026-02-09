import React from "react";
import {
  GraduationCap,
  Briefcase,
  Home,
  Globe2,
  Users,
  Award,
  Building2,
  ShieldCheck,
} from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="bg-white">

     

      {/* INTRO SECTION (image + content like your reference) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative">
            <img
              src="https://picsum.photos/seed/students1/700/500"
              className="rounded-3xl shadow-xl"
              alt=""
            />
            <div className="absolute -bottom-8 -left-8 bg-red-700 text-white px-6 py-4 rounded-2xl shadow-xl">
              <p className="text-3xl font-extrabold">10+</p>
              <p className="text-sm opacity-90">Years of Experience</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-red-700 uppercase mb-3">
              About FinniGo
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your bridge to Finnish education & life
            </h2>

            <p className="text-slate-600 leading-relaxed mb-5">
              FinniGo is the Helsinki-based extension of Unigo Educational
              Consultancy. For more than a decade, Unigo has guided students from
              Nepal towards world-class international education.
            </p>

            <p className="text-slate-600 leading-relaxed mb-8">
              We go beyond admission and visas. Our Finland team supports students
              with arrival services, accommodation, legal compliance, employment
              guidance and social integration.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-3 items-start">
                <ShieldCheck className="text-red-700 mt-1" />
                <div>
                  <h4 className="font-semibold">Ethical & transparent guidance</h4>
                  <p className="text-sm text-slate-600">
                    Honest counselling with no hidden fees or false promises.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Building2 className="text-red-700 mt-1" />
                <div>
                  <h4 className="font-semibold">Physical presence in Finland</h4>
                  <p className="text-sm text-slate-600">
                    A real team in Helsinki to help you on the ground.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES / SUPPORT AREAS (same position as your design) */}
      {/* <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center mb-14">
          <p className="text-sm font-semibold tracking-widest text-red-700 uppercase mb-3">
            Our Services
          </p>
          <h2 className="text-3xl font-bold">
            Comprehensive support for every student
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            {
              icon: GraduationCap,
              title: "Admission & University Guidance",
              text: "Program selection, application preparation and direct coordination with Finnish institutions.",
            },
            {
              icon: Home,
              title: "Accommodation & Arrival Support",
              text: "Airport pickup, housing support and local registration assistance.",
            },
            {
              icon: Briefcase,
              title: "Part-time Job & Career Support",
              text: "CV preparation, job search guidance and employer readiness.",
            },
            {
              icon: Globe2,
              title: "Residence Permit & Legal Support",
              text: "Immigration rules, extensions and compliance assistance.",
            },
            {
              icon: Users,
              title: "Student Community & Mentoring",
              text: "Local mentors and social integration programs.",
            },
            {
              icon: ShieldCheck,
              title: "Well-being & Safety Guidance",
              text: "Healthcare system orientation and personal support services.",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 text-left shadow-sm hover:shadow-xl transition"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-700 flex items-center justify-center mb-6">
                <s.icon />
              </div>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600">{s.text}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* WHY CHOOSE US – same flow as your reference */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-sm font-semibold tracking-widest text-red-700 uppercase mb-3">
              Why FinniGo
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              More than an education consultancy
            </h2>

            <p className="text-slate-600 mb-6">
              Unlike traditional agencies, FinniGo remains with you even after you
              land in Finland. Our on-ground support reduces uncertainty, cultural
              shock and early drop-out risks.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <Users className="text-red-700" />
                <span className="text-sm text-slate-600">
                  Dedicated local coordinators in Helsinki
                </span>
              </div>
              <div className="flex gap-3">
                <Briefcase className="text-red-700" />
                <span className="text-sm text-slate-600">
                  Strong focus on employability and career readiness
                </span>
              </div>
              <div className="flex gap-3">
                <ShieldCheck className="text-red-700" />
                <span className="text-sm text-slate-600">
                  Legal and ethical counselling practices
                </span>
              </div>
              <div className="flex gap-3">
                <Globe2 className="text-red-700" />
                <span className="text-sm text-slate-600">
                  Strong Nepal–Finland coordination
                </span>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://picsum.photos/seed/students2/700/500"
              className="rounded-3xl shadow-xl"
              alt=""
            />
          </div>

        </div>
      </section>

      {/* COUNTERS (same as your reference) */}
      {/* <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          {[
            { value: "12K+", label: "Students Counselled" },
            { value: "1.5K+", label: "Students in Finland" },
            { value: "14+", label: "Partner Institutions" },
            { value: "50+", label: "Team Members & Mentors" },
          ].map((c, i) => (
            <div key={i}>
              <p className="text-4xl font-extrabold text-red-500">{c.value}</p>
              <p className="text-sm mt-2 text-slate-300">{c.label}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* TEAM PREVIEW – same placement as your reference */}
      {/* <section className="py-24 bg-slate-50">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest text-red-700 uppercase mb-3">
            Our Team
          </p>
          <h2 className="text-3xl font-bold">
            Meet our student success team
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {["1", "2", "3", "4"].map((i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition text-center"
            >
              <img
                src={`https://picsum.photos/seed/team${i}/400/400`}
                alt=""
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h4 className="font-semibold">Team Member</h4>
                <p className="text-sm text-slate-500">
                  Student Advisor
                </p>
              </div>
            </div>
          ))}

        </div>
      </section> */}

    </div>
  );
};

export default About;
