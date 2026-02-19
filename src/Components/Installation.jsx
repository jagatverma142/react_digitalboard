import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, Ruler, Settings, CheckCircle, Shield, 
  PenTool, Monitor, Award, Zap, MapPin, 
  HardHat, ClipboardCheck, Activity, Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Installation = () => {
  // Industrial-grade installation steps synthesized from industry standards
  const steps = [
    { 
      title: "Structural Site Survey", 
      desc: "Detailed assessment of wall load-bearing capacity and professional power-point placement for industrial safety.", 
      icon: <Ruler /> 
    },
    { 
      title: "Wood-Crated Logistics", 
      desc: "Secured Pan-India delivery within 5-7 days using industrial wood-crating to ensure zero-damage transit.", 
      icon: <Truck /> 
    },
    { 
      title: "Precision VESA Mounting", 
      desc: "Hardware-level mounting using VESA standard brackets or heavy-duty mobile stands for maximum stability.", 
      icon: <Settings /> 
    },
    { 
      title: "Zero-Parallax Calibration", 
      desc: "Fine-tuning IR touch sensors and 4K display alignment to ensure a natural pen-on-paper writing feel.", 
      icon: <PenTool /> 
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen font-sans selection:bg-blue-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* =======================
            HEADER SECTION
            ======================= */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center mb-20"
        >
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            Certified Tech Hub Service
          </span>
          <h1 className="text-4xl md:text-8xl font-black text-slate-900 mt-6 mb-6 uppercase tracking-tighter">
            Industrial <span className="text-blue-600">Implementation</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            We don't just deliver boards; we build future-ready ecosystems. Our professional installation ensures 24/7 hardware readiness for schools and corporate boardrooms across Bharat.
          </p>
        </motion.div>

        {/* =======================
            PROCESS GRID
            ======================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group"
            >
              <div className="bg-blue-50 text-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* =======================
            TECHNICAL COMPLIANCE CHECKLIST (New Content)
            ======================= */}
        <div className="mb-24 overflow-hidden rounded-[3.5rem] border border-slate-200 bg-white shadow-sm">
          <div className="p-10 bg-slate-900 text-white flex flex-col md:flex-row justify-between items-center gap-6">
             <div>
                <h3 className="text-3xl font-black">Pre-Installation Checklist</h3>
                <p className="text-slate-400 mt-2">Essential requirements for a seamless setup experience.</p>
             </div>
             <div className="bg-blue-600 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest animate-pulse">
                Safety Standards
             </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 divide-x divide-y divide-slate-100">
             {[
               { title: "Wall Strength", detail: "Minimum 9-inch brick wall or reinforced support for 86\" units.", icon: <Shield /> },
               { title: "Power Supply", detail: "Dedicated 15A socket with earthing to prevent static interference.", icon: <Zap /> },
               { title: "Network Prep", detail: "High-speed LAN or 5G Wi-Fi for cloud LMS integration.", icon: <Activity /> },
               { title: "Ambient Light", detail: "Professional evaluation to ensure 450 Nits visibility in sunlight.", icon: <Monitor /> },
               { title: "Safety Gear", detail: "OSHA-compliant mounting tools and safety-certified hardware.", icon: <HardHat /> },
               { title: "OS Config", detail: "Provisioning Android 13/Windows OPS for custom school software.", icon: <Cpu /> }
             ].map((item, i) => (
               <div key={i} className="p-10 hover:bg-slate-50 transition-colors">
                  <div className="text-blue-600 mb-4">{item.icon}</div>
                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.detail}</p>
               </div>
             ))}
          </div>
        </div>

        

        {/* =======================
            REGIONAL AUTHORITY (Case Study Style)
            ======================= */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
           <div className="bg-gradient-to-br from-blue-600 to-indigo-800 p-12 md:p-20 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <h2 className="text-4xl font-black mb-8 leading-tight">
                 Regional <br/>Support Network
              </h2>
              <p className="text-blue-100 text-lg mb-12 leading-relaxed font-medium">
                 With dedicated hubs in **Agra, Noida, and Lucknow**, we offer the fastest response time in North India. Our engineers provide on-site technical site surveys within 24 hours of your inquiry.
              </p>
              <div className="grid grid-cols-2 gap-6">
                 <div className="bg-white/10 p-4 rounded-2xl border border-white/20">
                    <h4 className="font-bold text-2xl">24h</h4>
                    <p className="text-xs text-blue-200 uppercase font-black">Response Time</p>
                 </div>
                 <div className="bg-white/10 p-4 rounded-2xl border border-white/20">
                    <h4 className="font-bold text-2xl">5K+</h4>
                    <p className="text-xs text-blue-200 uppercase font-black">Installs in UP</p>
                 </div>
              </div>
           </div>

           <div className="space-y-8">
              <div className="bg-white p-8 rounded-[3rem] border border-slate-200 shadow-sm flex items-start gap-6 group hover:border-blue-500 transition-colors">
                 <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors"><ClipboardCheck size={32}/></div>
                 <div>
                    <h4 className="font-black text-slate-900 text-xl">Technical Audit</h4>
                    <p className="text-sm text-slate-500 leading-relaxed mt-2">Every installation is followed by a 15-point quality audit covering color accuracy, touch latency, and hardware stability.</p>
                 </div>
              </div>
              <div className="bg-white p-8 rounded-[3rem] border border-slate-200 shadow-sm flex items-start gap-6 group hover:border-blue-500 transition-colors">
                 <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors"><Award size={32}/></div>
                 <div>
                    <h4 className="font-black text-slate-900 text-xl">GeM Compliance Support</h4>
                    <p className="text-sm text-slate-500 leading-relaxed mt-2">We provide full documentation and installation certificates required for Government School Tenders and GeM portal audits.</p>
                 </div>
              </div>
           </div>
        </div>

        {/* =======================
            CTA SECTION
            ======================= */}
        <div className="bg-slate-900 rounded-[5rem] p-12 md:p-24 text-white flex flex-col lg:flex-row justify-between items-center gap-16 relative overflow-hidden shadow-2xl">
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>
           <div className="relative z-10 text-center lg:text-left">
              <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
                 <MapPin className="text-blue-400" />
                 <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">Agra's Trusted Tech Partner</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">Empower Your <br/><span className="text-blue-500">Teachers Today.</span></h2>
              <p className="text-slate-400 text-lg md:text-xl max-w-xl font-medium">
                 Schedule a professional site survey and get a custom implementation roadmap for your institution.
              </p>
           </div>
           <div className="relative z-10 flex flex-col items-center gap-6">
              <Link to="/contact" className="bg-blue-600 text-white px-16 py-6 rounded-full font-black text-2xl hover:bg-blue-500 transition shadow-2xl active:scale-95 flex items-center gap-4">
                 Book Now <Zap size={28} className="fill-white" />
              </Link>
              <div className="flex items-center gap-3 text-slate-500 font-bold uppercase tracking-widest text-xs">
                 <Shield size={16} /> ISO 9001:2015 Service Standards
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Installation;