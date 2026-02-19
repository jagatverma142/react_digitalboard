import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Clock, 
  Activity, 
  HardDrive, 
  RefreshCw, 
  Zap, 
  Headphones, 
  Settings, 
  CheckCircle, 
  MapPin, 
  ArrowRight,
  ShieldAlert, 
  Database, 
  Laptop, 
  ThermometerSnowflake,
  Handshake, // Pehle ye missing tha
  PenTool     // Pehle ye missing tha
} from 'lucide-react';

const AMCSupport = () => {
  // Expanded Service Features
  const features = [
    { 
      title: "Quarterly Preventative Visits", 
      desc: "Automatic health checkups every 90 days. We perform physical internal cleaning to prevent sensor dust accumulation and hardware fatigue.", 
      icon: <Activity /> 
    },
    { 
      title: "Full Motherboard Coverage", 
      desc: "Comprehensive replacement for internal motherboards, power boards, and OPS PC modules with 100% genuine industrial parts.", 
      icon: <HardDrive /> 
    },
    { 
      title: "Thermal Management", 
      desc: "Cleaning of cooling fans and heat sinks to prevent processor throttling, ensuring the panel runs 24/7 without lag.", 
      icon: <ThermometerSnowflake /> 
    },
    { 
      title: "Priority OTA Support", 
      desc: "Guaranteed Over-The-Air updates for Android 13/14 and native Whiteboard software patches before public release.", 
      icon: <RefreshCw /> 
    },
    { 
      title: "Touch Frame Alignment", 
      desc: "Professional IR sensor re-calibration to maintain <5ms touch latency and zero-parallax writing precision.", 
      icon: <Zap /> 
    },
    { 
      title: "Unlimited Remote Sync", 
      desc: "On-call technical assistance for software troubleshooting, E-Share casting, and seamless LMS integration for teachers.", 
      icon: <Headphones /> 
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen font-sans selection:bg-blue-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* =========================================
            SECTION 1: HERO & IMPACT DATA
            ========================================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
              Uptime Excellence
            </span>
            <h1 className="text-4xl md:text-8xl font-black text-slate-900 mt-6 mb-6 tracking-tighter leading-[0.9] uppercase">
              Protect Your <span className="text-blue-600">Investment.</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Interactive Flat Panels are long-term assets. While a standard warranty covers defects, our **DigitalBoardWala AMC** extends hardware life by **60%**, ensuring your 4K panel remains as responsive as day one even after 50,000 hours of usage.
            </p>
            <div className="flex flex-wrap gap-4">
               <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-2xl border border-slate-200 shadow-sm">
                  <ShieldCheck className="text-green-600" size={24} />
                  <span className="text-xs font-bold text-slate-900">ISO 9001:2015 Service</span>
               </div>
               <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-2xl border border-slate-200 shadow-sm">
                  <Database className="text-blue-600" size={24} />
                  <span className="text-xs font-bold text-slate-900">Genuine Spares Inventory</span>
               </div>
            </div>
          </motion.div>

          <div className="relative">
             <div className="absolute inset-0 bg-blue-400 blur-[120px] opacity-20 rounded-full"></div>
             <div className="bg-slate-900 p-8 rounded-[4rem] border-8 border-slate-800 shadow-2xl relative z-10">
                <div className="flex justify-between items-center mb-10 text-white">
                   <h4 className="font-bold uppercase tracking-widest text-xs">Internal Hardware Diagnostics</h4>
                   <Activity className="text-blue-500 animate-pulse" />
                </div>
                <div className="space-y-6">
                   {['CPU Thermal Load: 42°C', 'Touch Sensor Integrity: 100%', 'Storage Health: Optimal'].map((stat, i) => (
                      <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/10 flex justify-between items-center text-xs font-bold text-blue-400">
                         {stat} <CheckCircle size={14} className="text-green-500" />
                      </div>
                   ))}
                </div>
             </div>
          </div>
        </div>

        {/* =========================================
            SECTION 2: FEATURES GRID
            ========================================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group"
            >
              <div className="bg-blue-50 text-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* =========================================
            SECTION 3: TECHNICAL SUPPORT MATRIX
            ========================================= */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900">Institutional Service Comparison</h2>
            <p className="text-slate-500 mt-2 italic">Why standard warranty is never enough for 24/7 educational institutes.</p>
          </div>
          
          <div className="overflow-hidden rounded-[3rem] border border-slate-200 bg-white shadow-2xl">
             <table className="w-full text-left">
                <thead className="bg-slate-900 text-white text-xs font-bold uppercase tracking-widest">
                   <tr>
                      <th className="p-8">Service Feature</th>
                      <th className="p-8">Standard Warranty</th>
                      <th className="p-8 bg-blue-600">DigitalBoardWala AMC</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                   <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-8 font-bold text-slate-900">Hardware Life Expectancy</td>
                      <td className="p-8 text-slate-500">~5 Years</td>
                      <td className="p-8 font-black text-blue-700">8 - 10 Years (Optimized)</td>
                   </tr>
                   <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-8 font-bold text-slate-900">On-Site Break-Fix</td>
                      <td className="p-8 text-slate-500">Subject to part arrival</td>
                      <td className="p-8 font-black text-blue-700">24H Immediate Service</td>
                   </tr>
                   <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-8 font-bold text-slate-900">Loaner Unit Facility</td>
                      <td className="p-8 text-slate-500">Not Available</td>
                      <td className="p-8 font-black text-blue-700">Provided (For critical faults)</td>
                   </tr>
                   <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-8 font-bold text-slate-900">Teacher Re-training</td>
                      <td className="p-8 text-slate-500">Only on Installation</td>
                      <td className="p-8 font-black text-blue-700">Bi-Annual Refresher</td>
                   </tr>
                </tbody>
             </table>
          </div>
        </div>

        {/* =========================================
            SECTION 4: REGIONAL DOMINANCE
            ========================================= */}
        <div className="bg-slate-900 rounded-[5rem] p-12 md:p-24 text-white flex flex-col lg:flex-row justify-between items-center gap-16 relative overflow-hidden shadow-2xl border border-slate-800">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
           <div className="relative z-10 lg:w-3/5">
              <div className="flex items-center gap-3 mb-6">
                 <MapPin className="text-blue-400" />
                 <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">North India Service Hub</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black mb-10 leading-none tracking-tighter">
                Agra's Dedicated <br/><span className="text-blue-500">Support Engine.</span>
              </h2>
              <p className="text-slate-400 text-xl leading-relaxed mb-12">
                Our central service warehouse in **Agra** allows us to provide lightning-fast support to schools in **Tajganj, Sanjay Place, and Dayalbagh**. We have expanded our direct on-site reach to **Mathura, Firozabad, and Noida** with a fleet of certified service vans.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                 <div className="border-l-4 border-blue-600 pl-6">
                    <h4 className="font-black text-4xl">4h</h4>
                    <p className="text-xs text-slate-500 uppercase font-bold mt-2">Agra City Response</p>
                 </div>
                 <div className="border-l-4 border-blue-600 pl-6">
                    <h4 className="font-black text-4xl">100+</h4>
                    <p className="text-xs text-slate-500 uppercase font-bold mt-2">AMC Contracts</p>
                 </div>
              </div>
           </div>
           
           <div className="relative z-10 lg:w-2/5 flex flex-col gap-6 w-full">
              <div className="bg-white/5 backdrop-blur-3xl p-10 rounded-[3.5rem] border border-white/10 text-center">
                 <Settings size={60} className="mx-auto mb-6 text-blue-400" />
                 <h4 className="text-3xl font-black mb-4 uppercase tracking-tighter">Secure Your Uptime</h4>
                 <p className="text-slate-400 text-lg mb-10 italic">"Don't wait for a breakdown. Join the pro-active era of smart teaching."</p>
                 <Link to="/contact" className="block w-full bg-blue-600 text-white py-6 rounded-3xl font-black text-xl hover:bg-blue-500 transition shadow-2xl flex items-center justify-center gap-4 group">
                    Book Service Survey <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform"/>
                 </Link>
                 {/* Fixed: Handshake icon added to imports above */}
                 <div className="mt-6 flex justify-center gap-2 text-blue-400">
                    <Handshake size={24} /> <span className="text-xs font-bold uppercase">Authorized Partner</span>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default AMCSupport;