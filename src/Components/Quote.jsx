import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileText, Send, CheckCircle, Monitor, 
  ShieldCheck, Truck, Calculator, Clock,
  ChevronRight, Building2, HelpCircle,
  Globe2,   // Fix: Added missing import
  Activity, // Fix: Added missing import
  Zap,      // Added for technical flair
  Award     // Fix: Already in use, ensured it's here
} from 'lucide-react';

const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    institution: '',
    location: '',
    panelSize: '75',
    quantity: '1',
    specs: 'Standard'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Logic to send data to your MongoDB backend goes here
  };

  if (submitted) {
    return (
      <div className="pt-40 pb-20 text-center bg-slate-50 min-h-screen">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
          <div className="bg-green-100 text-green-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={48} />
          </div>
          <h2 className="text-4xl font-black text-slate-900 mb-4">Quotation Request Sent!</h2>
          <p className="text-slate-600 max-w-md mx-auto mb-8">
            Thank you for choosing DigitalBoardWala. Our technical team will share the formal PDF quotation on your email within 2 hours.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition shadow-lg active:scale-95"
          >
            Request Another Quote
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 pt-32 pb-20 font-sans selection:bg-blue-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* =========================================
            HEADER: Marketing Hook (Agra's Tech Hub)
            ========================================= */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
              Instant Quotation System (2026 Edition)
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 mt-6 mb-6 tracking-tighter leading-[0.9] uppercase">
              Get a Professional <br/>
              <span className="text-blue-600">Digital Quote.</span>
            </h1>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-xl font-medium">
              Join 500+ institutes in Agra and NCR using our interactive panels. Select your required specs below to receive a custom institutional roadmap.
            </p>
          </motion.div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap gap-4 lg:justify-end">
             <div className="bg-white px-5 py-3 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-2">
                <ShieldCheck size={20} className="text-green-500"/>
                <span className="text-xs font-bold text-slate-700 uppercase">3-Year On-Site Warranty</span>
             </div>
             <div className="bg-white px-5 py-3 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-2">
                <Award size={20} className="text-blue-500"/>
                <span className="text-xs font-bold text-slate-700 uppercase">GeM Compliance Ready</span>
             </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* =========================================
              LEFT: QUOTATION FORM
              ========================================= */}
          <div className="lg:col-span-8">
            <motion.form 
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl border border-slate-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[5rem] -z-0 opacity-50"></div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-10 relative z-10">
                {/* Basic Info */}
                <div className="space-y-6">
                  <h4 className="text-sm font-black uppercase text-blue-600 tracking-widest flex items-center gap-2">
                    <Building2 size={16}/> Institutional Details
                  </h4>
                  <div className="space-y-4">
                    <input 
                      type="text" required placeholder="Contact Person Name"
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 focus:border-blue-600 outline-none transition-all font-semibold"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                    <input 
                      type="text" required placeholder="School/College Name (e.g., RBS College)"
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 focus:border-blue-600 outline-none transition-all font-semibold"
                      onChange={(e) => setFormData({...formData, institution: e.target.value})}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input 
                        type="tel" required placeholder="Phone (WhatsApp)"
                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 focus:border-blue-600 outline-none transition-all font-semibold"
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                      <input 
                        type="text" required placeholder="Location (Agra/NCR)"
                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 focus:border-blue-600 outline-none transition-all font-semibold"
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                {/* Hardware Configuration */}
                <div className="space-y-6">
                  <h4 className="text-sm font-black uppercase text-blue-600 tracking-widest flex items-center gap-2">
                    <Monitor size={16}/> Hardware Configuration
                  </h4>
                  <div className="space-y-4">
                    <select 
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 focus:border-blue-600 outline-none appearance-none font-bold text-slate-700"
                      onChange={(e) => setFormData({...formData, panelSize: e.target.value})}
                    >
                      <option value="65">65-Inch 4K UHD (Classroom Std)</option>
                      <option value="75" selected>75-Inch 4K UHD (Most Popular)</option>
                      <option value="86">86-Inch 4K UHD (Large Auditoriums)</option>
                      <option value="98">98-Inch 4K UHD (Premium Series)</option>
                    </select>
                    
                    <select 
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 focus:border-blue-600 outline-none appearance-none font-bold text-slate-700"
                      onChange={(e) => setFormData({...formData, specs: e.target.value})}
                    >
                      <option value="Standard">Standard (Android 11 / 4GB RAM)</option>
                      <option value="Pro">Pro Series (Android 13 / 8GB RAM)</option>
                      <option value="Enterprise">Enterprise (Dual OS + Windows OPS)</option>
                    </select>

                    <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border-2 border-slate-100">
                       <span className="text-sm font-black text-slate-500 uppercase tracking-widest">Quantity:</span>
                       <input 
                         type="number" min="1" defaultValue="1"
                         className="bg-white border-2 border-slate-200 rounded-xl py-2 px-4 w-24 text-center font-black text-blue-600 shadow-inner"
                         onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                       />
                    </div>
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-slate-900 text-white py-6 rounded-3xl font-black text-xl hover:bg-blue-600 shadow-2xl transition-all flex items-center justify-center gap-4 group active:scale-[0.98]"
              >
                Generate Quotation <ChevronRight className="group-hover:translate-x-2 transition-transform" size={24}/>
              </button>
            </motion.form>
          </div>

          {/* =========================================
              RIGHT: QUICK SUMMARY & TECH DATA
              ========================================= */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-8 rounded-[3rem] border border-slate-200 shadow-lg">
               <h4 className="font-black text-slate-900 mb-6 flex items-center gap-2">
                  <Calculator className="text-blue-600"/> Selection Summary
               </h4>
               <div className="space-y-4 text-sm font-bold uppercase tracking-widest">
                  <div className="flex justify-between border-b border-slate-50 pb-3">
                    <span className="text-slate-400 text-xs">Size:</span>
                    <span className="text-slate-900">{formData.panelSize} Inch</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 pb-3">
                    <span className="text-slate-400 text-xs">Touch:</span>
                    <span className="text-blue-600 italic">Zero Bonding 4.0</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 pb-3">
                    <span className="text-slate-400 text-xs">Hardness:</span>
                    <span className="text-slate-900">Mohs 7 Toughened</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 pb-3">
                    <span className="text-slate-400 text-xs">Warranty:</span>
                    <span className="text-green-600">3 Years Certified</span>
                  </div>
               </div>
            </div>

            {/* Support Strip */}
            <div className="bg-blue-600 p-8 rounded-[3.5rem] text-white shadow-xl shadow-blue-200 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
               <HelpCircle className="mb-4 opacity-50" size={40}/>
               <h4 className="text-2xl font-black mb-3 leading-tight tracking-tight uppercase">Need Bulk Rates?</h4>
               <p className="text-blue-100 text-sm leading-relaxed mb-8 font-medium">
                 Ordering for a university in Agra or a government tender? We provide specialized tiered pricing for 5+ units.
               </p>
               <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-full font-black text-sm inline-flex items-center gap-2 shadow-2xl hover:bg-blue-50 transition active:scale-95">
                 Talk to Sales <Zap size={16}/>
               </Link>
            </div>

            <div className="bg-white p-8 rounded-[3rem] border border-slate-200 text-center shadow-inner">
               <Clock className="mx-auto mb-3 text-slate-300" />
               <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] leading-relaxed">
                  Quotation generation time: <br/><strong>Approx. 120 Minutes</strong>
               </p>
            </div>
          </div>
        </div>

        {/* Technical Diagram Placeholder */}
        

        {/* Pan India Delivery Stripe */}
        <div className="mt-24 flex flex-wrap justify-center gap-16 py-12 border-t border-slate-200 grayscale opacity-40 hover:opacity-100 transition-opacity duration-700">
           <div className="flex items-center gap-3 font-black text-3xl tracking-tighter">
             <Truck size={32} className="text-blue-600"/> PAN INDIA
           </div>
           <div className="flex items-center gap-3 font-black text-3xl tracking-tighter uppercase">
             <Globe2 size={32} className="text-blue-600"/> 150+ CITIES
           </div>
           <div className="flex items-center gap-3 font-black text-3xl tracking-tighter uppercase">
             <Activity size={32} className="text-blue-600"/> ISO CERTIFIED
           </div>
        </div>

      </div>
    </div>
  );
};

export default Quote;