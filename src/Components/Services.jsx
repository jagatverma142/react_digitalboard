import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Truck, ShieldCheck, GraduationCap, Cloud, 
  ArrowRight, CheckCircle2, Zap, Settings, 
  MapPin, Monitor, Server, Users 
} from 'lucide-react';

const Services = () => {
  // Service Hub Data Synthesis
  const services = [
    {
      id: "installation",
      title: "Industrial Installation",
      desc: "Precision VESA mounting and zero-parallax calibration for industrial-grade hardware readiness.",
      icon: <Truck size={32} />,
      link: "/services/installation",
      color: "blue",
      features: ["Structural Site Survey", "Wood-Crated Delivery", "20-Point Calibration"]
    },
    {
      id: "amc",
      title: "AMC & Support",
      desc: "24/7 uptime guarantee with quarterly preventative maintenance and full motherboard coverage.",
      icon: <ShieldCheck size={32} />,
      link: "/services/amc",
      color: "green",
      features: ["24H Local Response", "Genuine Spares", "Thermal Management"]
    },
    {
      id: "training",
      title: "Teacher Training",
      desc: "Empowering educators through our 'Certified Digital Educator' program and LMS pedagogy sync.",
      icon: <GraduationCap size={32} />,
      link: "/services/training",
      color: "purple",
      features: ["On-Site Workshops", "LMS Integration", "Infinite Canvas 4.0"]
    },
    {
      id: "software",
      title: "Cloud Ecosystem",
      desc: "Remote Device Management (RDM) and hybrid learning tools powered by Google EDLA security.",
      icon: <Cloud size={32} />,
      link: "/services/cloud-software",
      color: "orange",
      features: ["Centralized Dashboard", "OTA Updates", "Hybrid Lab Setup"]
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen font-sans selection:bg-blue-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* =========================================
            SECTION 1: HERO HEADER
            ========================================= */}
        <div className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
              End-to-End Smart Solutions
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 mt-6 mb-8 tracking-tighter leading-[0.95] uppercase">
              Beyond the <span className="text-blue-600">Hardware.</span>
            </h1>
            <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
              We provide Agra's institutions with more than just a screen. Our service ecosystem ensures your digital transformation is seamless, secure, and future-proof.
            </p>
          </motion.div>
        </div>

        {/* =========================================
            SECTION 2: MAIN SERVICES GRID
            ========================================= */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          {services.map((service, i) => (
            <motion.div 
              key={service.id}
              whileHover={{ y: -12 }}
              className="bg-white rounded-[4rem] p-10 lg:p-14 border border-slate-100 shadow-xl hover:shadow-2xl transition-all group relative overflow-hidden"
            >
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[5rem] group-hover:bg-blue-50 transition-colors duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-blue-600 mb-8 bg-blue-50 w-20 h-20 rounded-[2rem] flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                
                <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">{service.title}</h3>
                <p className="text-slate-500 text-lg mb-8 leading-relaxed font-medium">
                  {service.desc}
                </p>

                <div className="space-y-4 mb-12">
                   {service.features.map(feature => (
                     <div key={feature} className="flex items-center gap-3 font-bold text-slate-700 text-sm">
                        <CheckCircle2 size={18} className="text-green-500"/> {feature}
                     </div>
                   ))}
                </div>

                <Link 
                  to={service.link}
                  className="inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-4 rounded-full font-black text-lg hover:bg-blue-600 transition-all shadow-xl active:scale-95"
                >
                  Explore Service <ArrowRight size={20}/>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        

        {/* =========================================
            SECTION 3: REGIONAL SERVICE HUB (Agra/NCR)
            ========================================= */}
        <div className="bg-slate-900 rounded-[5rem] p-12 md:p-24 text-white flex flex-col lg:flex-row justify-between items-center gap-16 relative overflow-hidden shadow-2xl border border-slate-800">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
           
           <div className="relative z-10 lg:w-3/5">
              <div className="flex items-center gap-3 mb-6">
                 <MapPin className="text-blue-400" />
                 <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">Direct Support Coverage</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black mb-10 leading-none tracking-tighter">
                Localized in <br/><span className="text-blue-500">Agra & NCR.</span>
              </h2>
              <p className="text-slate-400 text-xl leading-relaxed mb-12 font-medium">
                Our central service hub in **Sanjay Place, Agra** serves as the heart of our operations, providing lightning-fast hardware repair and software training to schools across Tajganj and Dayalbagh.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                 <div className="border-l-4 border-blue-600 pl-6">
                    <h4 className="font-black text-4xl">24h</h4>
                    <p className="text-xs text-slate-500 uppercase font-bold mt-2">Agra Response</p>
                 </div>
                 <div className="border-l-4 border-blue-600 pl-6">
                    <h4 className="font-black text-4xl">100%</h4>
                    <p className="text-xs text-slate-500 uppercase font-bold mt-2">Genuine Spares</p>
                 </div>
              </div>
           </div>

           <div className="relative z-10 lg:w-2/5 w-full flex flex-col gap-6">
              <div className="bg-white/5 backdrop-blur-3xl p-10 rounded-[3.5rem] border border-white/10 text-center group hover:bg-white/10 transition-all duration-500">
                 <Zap size={60} className="mx-auto mb-6 text-blue-400 group-hover:scale-110 transition-transform" />
                 <h4 className="text-3xl font-black mb-4 uppercase tracking-tighter">Instant Quotation</h4>
                 <p className="text-slate-400 text-lg mb-10 italic">"Get industrial-grade support for your school's digital assets today."</p>
                 <Link to="/quote" className="block w-full bg-blue-600 text-white py-6 rounded-3xl font-black text-xl hover:bg-blue-500 transition shadow-xl active:scale-95">
                    Generate Quote
                 </Link>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Services;