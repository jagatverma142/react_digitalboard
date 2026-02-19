import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, Smartphone, Lock, Globe2, BarChart3, 
  Server, Cpu, Activity, ShieldCheck, Zap, 
  Layout, Monitor, Laptop, ArrowRight,
  PenTool // Fix: Ab ye import list mein shamil hai
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CloudSoftware = () => {
  // Advanced features synthesized from industry-leading LMS & hardware ecosystems
  const softwareFeatures = [
    { 
      title: "Hybrid LMS Integration", 
      desc: "Seamlessly sync with ecosystems like Teachmint to record 4K lectures and upload them to the cloud for 24/7 student access.", 
      icon: <Globe2 /> 
    },
    { 
      title: "Remote Device Management", 
      desc: "Manage 500+ panels from a single central dashboard. Push firmware updates and school-wide notices instantly.", 
      icon: <Server /> 
    },
    { 
      title: "E-Share Pro Casting", 
      desc: "Wireless screen mirroring for up to 9 devices simultaneously. Supports Android, iOS, Windows, and macOS.", 
      icon: <Monitor /> 
    },
    { 
      title: "Infinite Canvas 4.0", 
      desc: "Smart whiteboard software with built-in AI tools for handwriting recognition, 3D shapes, and instant Google search integration.", 
      icon: <PenTool /> 
    },
    { 
      title: "Google EDLA Security", 
      desc: "Enterprise-grade security ensuring Play Store access and 100% protection of institutional data.", 
      icon: <Lock /> 
    },
    { 
      title: "Attendance Analytics", 
      desc: "Automated student tracking and performance analytics generated directly from interactive class participation.", 
      icon: <BarChart3 /> 
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen font-sans selection:bg-blue-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* =========================================
            SECTION 1: HERO & IMPACT
            ========================================= */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/2"
          >
            <div className="bg-blue-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-blue-200">
              <Cloud size={32}/>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-tight uppercase">
              The Software <span className="text-blue-600">Edge.</span>
            </h1>
            <p className="text-slate-600 text-xl leading-relaxed mb-10">
              Hardware is just the beginning. Our cloud-powered software ecosystem transforms a simple 4K panel into a complete school management and student engagement engine.
            </p>
            <div className="flex flex-wrap gap-4">
               <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl border border-slate-200 shadow-sm">
                  <Cpu className="text-blue-600" size={24} />
                  <span className="text-sm font-bold text-slate-900 uppercase tracking-widest">Android 13.0 Optimized</span>
               </div>
               <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl border border-slate-200 shadow-sm">
                  <ShieldCheck className="text-green-600" size={24} />
                  <span className="text-sm font-bold text-slate-900 uppercase tracking-widest">Enterprise Security</span>
               </div>
            </div>
          </motion.div>

          <div className="lg:w-1/2 relative">
             <div className="absolute inset-0 bg-blue-100 rounded-[5rem] rotate-3 -z-10 opacity-50"></div>
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }} 
               animate={{ opacity: 1, scale: 1 }}
               className="bg-slate-900 p-4 rounded-[4rem] border-8 border-slate-800 shadow-2xl overflow-hidden"
             >
                <div className="aspect-video bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-950 rounded-[3rem] flex flex-col items-center justify-center text-white relative">
                   <Activity className="text-blue-500 absolute top-10 right-10 opacity-20" size={120} />
                   <Layout size={64} className="mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-500" />
                   <p className="font-black text-2xl tracking-[0.3em] uppercase">Unified OS</p>
                   <p className="text-blue-400 mt-2 font-bold italic tracking-widest text-xs">Cloud Integrated Hub</p>
                </div>
             </motion.div>
          </div>
        </div>

        {/* =========================================
            SECTION 2: FEATURES GRID
            ========================================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {softwareFeatures.map((f, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group"
            >
              <div className="bg-blue-50 text-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        

        {/* =========================================
            SECTION 3: TECHNICAL COMPARISON (Standard vs Cloud)
            ========================================= */}
        <div className="mb-24 bg-white p-12 md:p-20 rounded-[4rem] border border-slate-200 shadow-2xl">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-900 uppercase">Legacy Board vs. <span className="text-blue-600">DigitalBoardWala Cloud</span></h2>
              <p className="text-slate-500 mt-4">Why software integration is the deciding factor for modern schools.</p>
           </div>
           
           <div className="overflow-x-auto">
              <table className="w-full text-left text-base">
                 <thead className="bg-slate-900 text-white font-bold uppercase tracking-widest text-xs">
                    <tr>
                       <th className="p-8">Software Metric</th>
                       <th className="p-8">Standalone Panel</th>
                       <th className="p-8 bg-blue-600">Cloud Pro Suite</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-100 font-medium">
                    <tr className="hover:bg-slate-50 transition-colors">
                       <td className="p-8 font-bold text-slate-900">Lecture Storage</td>
                       <td className="p-8 text-slate-400">Local Disk (Offline Only)</td>
                       <td className="p-8 font-black text-blue-700">Unlimited Cloud Archive</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                       <td className="p-8 font-bold text-slate-900">Remote Admin Control</td>
                       <td className="p-8 text-slate-400">None (Manual Update)</td>
                       <td className="p-8 font-black text-blue-700">Centralized Dashboard</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                       <td className="p-8 font-bold text-slate-900">Student Interaction</td>
                       <td className="p-8 text-slate-400">Limited to Classroom</td>
                       <td className="p-8 font-black text-blue-700">Live Hybrid Participation</td>
                    </tr>
                 </tbody>
              </table>
           </div>
        </div>

        {/* =========================================
            SECTION 4: CALL TO ACTION
            ========================================= */}
        <div className="bg-slate-900 rounded-[5rem] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600 opacity-10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
           <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
                    Built for <br/><span className="text-blue-400">Agra's Education</span> Hub.
                 </h2>
                 <p className="text-slate-400 text-xl leading-relaxed mb-12">
                    Our team provides hands-on software training for school staff in Agra and NCR, ensuring your teachers are 100% cloud-ready within 48 hours.
                 </p>
                 <div className="flex flex-wrap gap-6">
                    <Link to="/contact" className="bg-blue-600 text-white px-12 py-5 rounded-full font-black text-xl hover:bg-blue-50 transition shadow-2xl active:scale-95 flex items-center gap-3">
                       Request Software Demo <Zap size={24} className="fill-white" />
                    </Link>
                 </div>
              </div>
              
              <div className="space-y-6">
                 {[
                   { icon: <Smartphone />, text: "Control everything from your mobile phone." },
                   { icon: <Laptop />, text: "Instant sync with Windows OPS PC modules." },
                   { icon: <ShieldCheck />, text: "Regular Over-the-Air (OTA) security updates." }
                 ].map((item, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-[2.5rem] flex items-center gap-6 group hover:bg-white/10 transition-all">
                       <div className="text-blue-400 group-hover:scale-110 transition-transform">{item.icon}</div>
                       <p className="font-bold text-lg text-slate-200">{item.text}</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default CloudSoftware;