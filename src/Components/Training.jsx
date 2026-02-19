import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, Video, Users, MousePointer2, 
  Smartphone, BookOpen, ShieldCheck, CheckCircle2, 
  Award, Monitor, MapPin, ArrowRight, 
  BrainCircuit, Presentation, Share2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Training = () => {
  // Specialized Training Modules synthesized from industry leaders
  const modules = [
    { 
      title: "Core Operations", 
      desc: "Mastering the 4K interface, 20-point touch calibration, and native Android 13/Windows OPS switching.", 
      icon: <Monitor /> 
    },
    { 
      title: "Infinite Canvas 4.0", 
      desc: "Using AI-powered handwriting recognition, 3D geometry tools, and instant smart-search integration.", 
      icon: <MousePointer2 /> 
    },
    { 
      title: "Lecture Recording", 
      desc: "One-click 4K recording with cloud LMS sync. Learn to share QR-coded notes instantly with students.", 
      icon: <Video /> 
    },
    { 
      title: "Hybrid Ecosystem", 
      desc: "Connecting remote students via AI-tracking cameras and E-Share Pro for 9-device simultaneous casting.", 
      icon: <Share2 /> 
    },
    { 
      title: "Content Transformation", 
      desc: "Converting static PDFs and PPTs into interactive touch-responsive lessons using built-in annotation tools.", 
      icon: <Presentation /> 
    },
    { 
      title: "Student Engagement", 
      desc: "Using gamified quiz tools and split-screen collaboration to boost classroom retention by 40%.", 
      icon: <BrainCircuit /> 
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen font-sans selection:bg-blue-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* =========================================
            SECTION 1: HERO & REGIONAL AUTHORITY
            ========================================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
              Empowering Agra's Educators
            </span>
            <h1 className="text-4xl md:text-8xl font-black text-slate-900 mt-6 mb-6 tracking-tighter leading-[0.9] uppercase">
              Master the <span className="text-blue-600">Digital Era.</span>
            </h1>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-8 font-medium">
              We don't just deliver hardware; we build technical confidence. Our certified training program ensures your teachers become **Power Users** of interactive technology within 48 hours.
            </p>
            <div className="flex flex-wrap gap-4">
               <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-2xl border border-slate-200 shadow-sm">
                  <Award className="text-blue-600" size={24} />
                  <span className="text-xs font-bold text-slate-900 uppercase">Certified Digital Educator Program</span>
               </div>
            </div>
          </motion.div>

          <div className="relative group">
             <div className="absolute inset-0 bg-blue-600/10 rounded-[4rem] rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
             <div className="bg-slate-900 p-4 rounded-[4rem] border-8 border-slate-800 shadow-2xl relative">
                <div className="aspect-video bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-950 rounded-[3rem] flex flex-col items-center justify-center text-white p-8 text-center">
                   <GraduationCap size={64} className="mb-6 text-blue-400" />
                   <h3 className="text-2xl font-black uppercase tracking-widest">On-Site Excellence</h3>
                   <p className="text-blue-300 mt-2 font-bold italic text-sm">Dedicated Training Hub in Agra</p>
                </div>
             </div>
          </div>
        </div>

        {/* =========================================
            SECTION 2: TRAINING MODULES GRID
            ========================================= */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">Comprehensive <span className="text-blue-600">Curriculum</span></h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto italic">"A board is only as smart as the person using it."</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {modules.map((m, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group"
            >
              <div className="bg-blue-50 text-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-inner">
                {m.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{m.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">{m.desc}</p>
            </motion.div>
          ))}
        </div>

        

        {/* =========================================
            SECTION 3: CERTIFICATION LEVELS
            ========================================= */}
        <div className="mb-24 bg-white p-12 md:p-20 rounded-[4rem] border border-slate-200 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-4xl font-black text-slate-900 mb-8">Professional <br/>Institutional Support</h2>
                 <p className="text-slate-600 text-lg leading-relaxed mb-10">
                   Our training follows the **Teachmint-Ready** standards, focusing on actual classroom delivery rather than just technical specs. We offer tiered onboarding for different institute sizes.
                 </p>
                 <div className="space-y-6">
                    <div className="flex items-start gap-4">
                       <CheckCircle2 className="text-green-600 mt-1" size={24} />
                       <div>
                          <h4 className="font-bold text-slate-900 uppercase text-sm">Level 1: Implementation</h4>
                          <p className="text-xs text-slate-500">Basic startup, security profiles, and hardware care.</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <CheckCircle2 className="text-green-600 mt-1" size={24} />
                       <div>
                          <h4 className="font-bold text-slate-900 uppercase text-sm">Level 2: Pedagogy Sync</h4>
                          <p className="text-xs text-slate-500">LMS integration, lecture recording, and interactive assessment tools.</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="bg-blue-900 p-10 rounded-[3.5rem] text-white text-center">
                 <Users size={60} className="mx-auto mb-6 text-blue-400" />
                 <h4 className="text-2xl font-bold mb-4 uppercase">Regional Training Hub</h4>
                 <p className="text-blue-200 text-sm mb-10 italic">"Providing direct on-site support to schools in Tajganj, Sanjay Place, and Agra Cantonment."</p>
                 <Link to="/contact" className="block w-full bg-white text-blue-900 py-4 rounded-2xl font-black text-lg hover:bg-blue-50 transition shadow-xl">Request Training Visit</Link>
              </div>
           </div>
        </div>

        {/* =========================================
            SECTION 4: FINAL CTA
            ========================================= */}
        <div className="bg-slate-900 rounded-[5rem] p-12 md:p-24 text-white flex flex-col md:flex-row justify-between items-center gap-12 relative overflow-hidden shadow-2xl border border-slate-800">
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>
           <div className="relative z-10 lg:w-2/3 text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-6">
                 <MapPin className="text-blue-400" />
                 <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">Agra's Education Tech Partner</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">Your Success is <br/><span className="text-blue-500">Our Priority.</span></h2>
              <p className="text-slate-400 text-lg md:text-xl font-medium">
                 Join 1,000+ teachers who have transformed their classrooms with DigitalBoardWala.
              </p>
           </div>
           <div className="relative z-10">
              <Link to="/contact" className="bg-blue-600 text-white px-12 py-6 rounded-full font-black text-xl hover:bg-blue-500 transition shadow-2xl active:scale-95 flex items-center gap-4 group">
                 Book Workshop <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Training;