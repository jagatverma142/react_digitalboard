import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle, Play, ArrowRight, 
  Monitor, Cpu, ShieldCheck, Wifi, 
  PenTool, Layers, Cast, Mic, Users,
  Maximize, Volume2, Eye, Cable,
  Video, Cloud, Lock, HelpCircle, ChevronDown, ChevronUp
} from 'lucide-react';

const Home = () => {
  
  // --- Animation Variants ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  // --- FAQ State ---
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  return (
    <div className="overflow-hidden bg-white">
      
      {/* =========================================
          SECTION 1: HERO (Main Banner)
          ========================================= */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 bg-slate-50 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Text Content */}
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 bg-white border border-blue-200 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8 shadow-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Now with Android 13 & EDLA
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.1]">
              Smart Classrooms <br />
              Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Here.</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
              Transform your teaching with the <strong>DigitalBoardWala Pro Series</strong>. 
              Featuring <strong>Zero Bonding</strong>, 4K Eye-Care Display, and built-in LMS tools for seamless hybrid learning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/pricing" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition flex items-center justify-center gap-2 shadow-xl shadow-blue-200 hover:-translate-y-1">
                View Pricing <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition flex items-center justify-center gap-2 hover:-translate-y-1">
                <Play size={20} fill="currentColor" /> Book Demo
              </Link>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-200 flex flex-wrap gap-12 text-slate-500">
               <div>
                 <p className="text-3xl font-bold text-slate-900">450</p>
                 <p className="text-xs uppercase font-bold tracking-wide">Nits Brightness</p>
               </div>
               <div>
                 <p className="text-3xl font-bold text-slate-900">4mm</p>
                 <p className="text-xs uppercase font-bold tracking-wide">Toughened Glass</p>
               </div>
               <div>
                 <p className="text-3xl font-bold text-slate-900">&lt;5ms</p>
                 <p className="text-xs uppercase font-bold tracking-wide">Response Time</p>
               </div>
            </div>
          </motion.div>

          {/* Hero Image / Simulation */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-slate-900 rounded-3xl p-3 shadow-2xl border-[6px] border-slate-800 relative z-20">
               {/* Screen Content */}
               <div className="aspect-video bg-gradient-to-br from-gray-900 to-slate-800 rounded-xl overflow-hidden relative flex flex-col items-center justify-center text-white border border-white/10">
                  
                  {/* Fake UI: Recording Status */}
                  <div className="absolute top-6 right-6 flex gap-3">
                    <div className="bg-red-500/90 text-white text-[10px] px-3 py-1 rounded-full flex items-center gap-1.5 animate-pulse font-bold tracking-wider shadow-lg shadow-red-500/20">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div> REC
                    </div>
                  </div>

                  {/* Fake UI: Content */}
                  <h2 className="text-5xl font-bold mb-2 tracking-tight">Biology: Anatomy</h2>
                  <p className="text-blue-300 font-medium tracking-wide uppercase text-sm">Live Annotation Mode</p>
                  
                  {/* Floating Tools Dock */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-2xl flex gap-8 border border-white/20 shadow-2xl">
                     <PenTool size={24} className="hover:text-blue-400 transition cursor-pointer" /> 
                     <Layers size={24} className="hover:text-blue-400 transition cursor-pointer" /> 
                     <Monitor size={24} className="hover:text-blue-400 transition cursor-pointer" /> 
                     <Cloud size={24} className="hover:text-blue-400 transition cursor-pointer" />
                     <Users size={24} className="hover:text-blue-400 transition cursor-pointer" />
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: HYBRID LEARNING (Zoom/Teams)
          ========================================= */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="order-2 lg:order-1 relative">
                  <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-3 opacity-10"></div>
                  <div className="relative bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-lg">
                     {/* UI Mockup of Zoom Call */}
                     <div className="bg-slate-900 rounded-xl aspect-video relative overflow-hidden flex flex-wrap">
                        <div className="w-1/2 h-1/2 border border-slate-800 bg-slate-800 p-4 flex items-center justify-center"><Users className="text-slate-600"/></div>
                        <div className="w-1/2 h-1/2 border border-slate-800 bg-slate-800 p-4 flex items-center justify-center"><Users className="text-slate-600"/></div>
                        <div className="w-1/2 h-1/2 border border-slate-800 bg-slate-800 p-4 flex items-center justify-center"><Users className="text-slate-600"/></div>
                        <div className="w-1/2 h-1/2 border border-slate-800 bg-blue-900/20 p-4 flex items-center justify-center text-white font-bold">You (Teacher)</div>
                     </div>
                     <div className="flex gap-4 mt-6 justify-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600"><Video size={24}/></div>
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600"><Mic size={24}/></div>
                     </div>
                  </div>
               </div>
               
               <div className="order-1 lg:order-2">
                  <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Hybrid Ready</span>
                  <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-6">Connect Remote Students Instantly.</h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                     Don't let distance stop education. Our panels are <strong>Zoom & Teams Certified</strong>. 
                     Simply plug in a 4K Camera and start your hybrid class.
                  </p>
                  <ul className="space-y-4">
                     <li className="flex items-center gap-3">
                        <CheckCircle className="text-green-500" size={20} />
                        <span className="text-slate-700 font-medium">4-Array Microphone for Crystal Clear Voice</span>
                     </li>
                     <li className="flex items-center gap-3">
                        <CheckCircle className="text-green-500" size={20} />
                        <span className="text-slate-700 font-medium">Noise Cancellation Technology</span>
                     </li>
                     <li className="flex items-center gap-3">
                        <CheckCircle className="text-green-500" size={20} />
                        <span className="text-slate-700 font-medium">One-Tap Cloud Recording (Google Drive)</span>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* =========================================
          SECTION 3: CORE FEATURES (3 Pillars)
          ========================================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Hardware Excellence</h2>
            <h3 className="text-4xl font-bold text-slate-900">Why Top Institutes Choose Us?</h3>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Feature 1 */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-300 transition group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition">
                <Layers size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Zero Bonding Tech</h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                0mm air gap between glass and display. Eliminates parallax error for a natural <strong>"Pen-on-Paper"</strong> writing experience.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-indigo-300 transition group">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition">
                <ShieldCheck size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Mohs 7 Hardness</h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                Protected by <strong>4mm Anti-Glare Toughened Glass</strong>. Scratch-resistant, waterproof, and designed for rough classroom use.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-purple-300 transition group">
              <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition">
                <Cpu size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Dual OS Engine</h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                Built-in Android 13 + OPS Slot for Windows 11. Run heavy apps like <strong>VS Code, AutoCAD, & Photoshop</strong> natively.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: DETAILED TECH SPECS TABLE
          ========================================= */}
      <section className="py-24 bg-white">
         <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Technical Specifications</h2>
            
            <div className="overflow-hidden border border-slate-200 rounded-2xl shadow-lg">
               <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-900 text-white">
                     <tr>
                        <th className="p-4 pl-6 w-1/3">Feature</th>
                        <th className="p-4">Specification</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700 text-sm md:text-base">
                     <tr className="hover:bg-slate-50">
                        <td className="p-4 pl-6 font-bold bg-slate-50/50">Display Type</td>
                        <td className="p-4">D-LED Backlight (IPS Panel)</td>
                     </tr>
                     <tr className="hover:bg-slate-50">
                        <td className="p-4 pl-6 font-bold bg-slate-50/50">Resolution</td>
                        <td className="p-4">4K UHD (3840 x 2160) @ 60Hz</td>
                     </tr>
                     <tr className="hover:bg-slate-50">
                        <td className="p-4 pl-6 font-bold bg-slate-50/50">Brightness</td>
                        <td className="p-4">450 cd/m² (Nits)</td>
                     </tr>
                     <tr className="hover:bg-slate-50">
                        <td className="p-4 pl-6 font-bold bg-slate-50/50">Contrast Ratio</td>
                        <td className="p-4">5000:1 (Dynamic)</td>
                     </tr>
                     <tr className="hover:bg-slate-50">
                        <td className="p-4 pl-6 font-bold bg-slate-50/50">Touch Points</td>
                        <td className="p-4">20-Point Multi-Touch (IR Technology)</td>
                     </tr>
                     <tr className="hover:bg-slate-50">
                        <td className="p-4 pl-6 font-bold bg-slate-50/50">RAM / ROM</td>
                        <td className="p-4">4GB / 8GB RAM + 32GB / 64GB Storage</td>
                     </tr>
                     <tr className="hover:bg-slate-50">
                        <td className="p-4 pl-6 font-bold bg-slate-50/50">Ports (Front)</td>
                        <td className="p-4">1x HDMI, 1x USB Touch, 2x USB 3.0, 1x Type-C</td>
                     </tr>
                     <tr className="hover:bg-slate-50">
                        <td className="p-4 pl-6 font-bold bg-slate-50/50">Operating System</td>
                        <td className="p-4">Android 13.0 (Windows 11 Optional via OPS)</td>
                     </tr>
                     <tr className="hover:bg-slate-50">
                        <td className="p-4 pl-6 font-bold bg-slate-50/50">Connectivity</td>
                        <td className="p-4">Wi-Fi 6 (Dual Band), Bluetooth 5.0, LAN (RJ45)</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* =========================================
          SECTION 5: FAQ ACCORDION (SEO Content)
          ========================================= */}
      <section className="py-24 bg-slate-50">
         <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
               {[
                  { q: "Do I need a separate PC to run this board?", a: "No. The board comes with a built-in Android OS, so you can browse the web, open PDFs, and use the whiteboard without a PC. However, for Windows apps like PowerPoint, you can connect your laptop or buy an OPS." },
                  { q: "Can I install apps like Zoom, YouTube, or Teachmint?", a: "Yes! Since it runs on Android, you can install trusted APKs or use the built-in app store to download Zoom, Teams, and educational apps." },
                  { q: "What is the warranty period?", a: "We offer a standard 3-Year On-Site Warranty. This covers the panel, touch sensors, and motherboard. If there's an issue, our engineer visits your location." },
                  { q: "Does it support wireless screen sharing?", a: "Yes. With the built-in E-Share Pro app, you can cast your mobile (Android/iOS) or Laptop screen wirelessly to the board without any cables." },
               ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                     <button 
                        onClick={() => toggleFaq(idx)} 
                        className="w-full flex justify-between items-center p-5 text-left font-bold text-slate-800 hover:bg-slate-50 transition"
                     >
                        {item.q}
                        {openFaq === idx ? <ChevronUp size={20} className="text-blue-600"/> : <ChevronDown size={20} className="text-slate-400"/>}
                     </button>
                     {openFaq === idx && (
                        <div className="p-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 mt-2">
                           {item.a}
                        </div>
                     )}
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* =========================================
          SECTION 6: CTA STRIP
          ========================================= */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-indigo-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Digitalize Your Classroom?</h2>
          <p className="text-blue-100 text-lg mb-10">
            Join 5,000+ schools and colleges using our Interactive Panels. Get a free demo and consultation today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition shadow-2xl inline-flex items-center justify-center gap-2">
               Get Pricing Quote <ArrowRight size={20}/>
            </Link>
            <Link to="/contact" className="bg-transparent border border-blue-400 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition inline-flex items-center justify-center gap-2">
               Download Brochure <Cloud size={20}/>
            </Link>
          </div>
          <p className="text-xs text-blue-300 mt-8 uppercase tracking-widest font-bold">
            Pan India Delivery & Installation
          </p>
        </div>
      </section>

    </div>
  );
};

export default Home;