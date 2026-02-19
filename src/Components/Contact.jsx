import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Send, 
  MessageSquare, ShieldCheck, Clock, 
  Globe2, CheckCircle, Award, Truck
} from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inquiry Received:", formState);
    alert("Thank you! Our technical expert will contact you within 24 hours.");
  };

  return (
    <div className="bg-slate-50 pt-32 pb-20 font-sans selection:bg-blue-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* =========================================
            SECTION 1: HERO HEADER
            ========================================= */}
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
              Get A Free Demo Today
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-slate-900 mt-6 mb-6 tracking-tighter leading-tight">
              Let's Digitalize Your <br/>
              <span className="text-blue-600">Institution Together.</span>
            </h1>
            <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Whether you are a K-12 school in Agra or a university in Delhi, our team is ready to provide 
              on-site demonstrations and technical site surveys.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* =========================================
              LEFT: CONTACT INFO & TRUST CARDS
              ========================================= */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-xl">
               <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                 <MessageSquare className="text-blue-600"/> Contact Details
               </h3>
               
               <div className="space-y-8">
                  <div className="flex gap-4">
                     <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 h-fit"><Phone size={24}/></div>
                     <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Sales Hotline</p>
                        <p className="text-xl font-bold text-slate-900">+91 98765 43210</p>
                        <p className="text-xs text-green-600 font-bold">Mon - Sat (9 AM - 7 PM)</p>
                     </div>
                  </div>

                  <div className="flex gap-4">
                     <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 h-fit"><Mail size={24}/></div>
                     <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Technical Inquiry</p>
                        <p className="text-xl font-bold text-slate-900">sales@digitalboardwala.com</p>
                     </div>
                  </div>

                  <div className="flex gap-4">
                     <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 h-fit"><MapPin size={24}/></div>
                     <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Experience Center (NCR)</p>
                        <p className="text-lg font-bold text-slate-900 leading-snug">
                          Sector 62, Noida, Uttar Pradesh <br/>
                          Experience centers also in Agra & Lucknow.
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            {/* TRUST INDICATORS */}
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-slate-900 p-6 rounded-[2rem] text-white">
                  <ShieldCheck className="text-blue-400 mb-4" size={32}/>
                  <h4 className="font-bold text-sm mb-1">3-Year Warranty</h4>
                  <p className="text-[10px] text-slate-400 leading-relaxed">Comprehensive on-site support across Pan-India.</p>
               </div>
               <div className="bg-blue-600 p-6 rounded-[2rem] text-white">
                  <Award className="text-blue-200 mb-4" size={32}/>
                  <h4 className="font-bold text-sm mb-1">GeM Registered</h4>
                  <p className="text-[10px] text-blue-100 leading-relaxed">Direct compliance for all Government School Tenders.</p>
               </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 flex items-center gap-4">
               <div className="bg-green-100 p-3 rounded-full text-green-600"><Truck size={24}/></div>
               <div>
                  <p className="text-sm font-bold text-slate-900">Pan-India Wood-Crated Delivery</p>
                  <p className="text-xs text-slate-500">Ensuring zero damage during transit.</p>
               </div>
            </div>
          </div>

          {/* =========================================
              RIGHT: INQUIRY FORM
              ========================================= */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100 relative overflow-hidden"
            >
              {/* Form Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[5rem] -z-10"></div>
              
              <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Send a Quotation Request</h3>
              <p className="text-slate-500 mb-10 font-medium">Please fill in the details of your institution for a customized quote.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                    <input 
                      type="text" required
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 focus:border-blue-600 focus:outline-none transition-all"
                      placeholder="e.g. Rahul Sharma"
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone Number</label>
                    <input 
                      type="tel" required
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 focus:border-blue-600 focus:outline-none transition-all"
                      placeholder="+91 XXXXX XXXXX"
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">School/Institute Name</label>
                    <input 
                      type="text" required
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 focus:border-blue-600 focus:outline-none transition-all"
                      placeholder="e.g. RBS College"
                      onChange={(e) => setFormState({...formState, institution: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                    <input 
                      type="email" required
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 focus:border-blue-600 focus:outline-none transition-all"
                      placeholder="principal@yourschool.com"
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Requirements / Project Details</label>
                  <textarea 
                    rows="4" required
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 focus:border-blue-600 focus:outline-none transition-all"
                    placeholder="Tell us about the number of classrooms and sizes (65/75/86 inch)..."
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-3 active:scale-95"
                >
                  Submit Inquiry <Send size={20}/>
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* =========================================
            SECTION 3: SERVICE COVERAGE (Marketing)
            ========================================= */}
        <div className="mt-24 bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600 opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
           <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Serving 5,000+ Classrooms <br/>From Kashmir to Kanyakumari.</h2>
              <div className="flex flex-wrap justify-center gap-6 text-sm font-bold uppercase tracking-widest text-slate-400">
                 <span className="flex items-center gap-2 border border-slate-800 px-4 py-2 rounded-xl"><CheckCircle className="text-blue-500" size={16}/> Direct Delivery</span>
                 <span className="flex items-center gap-2 border border-slate-800 px-4 py-2 rounded-xl"><CheckCircle className="text-blue-500" size={16}/> Regional Support Centers</span>
                 <span className="flex items-center gap-2 border border-slate-800 px-4 py-2 rounded-xl"><CheckCircle className="text-blue-500" size={16}/> GeM Compliance Ready</span>
              </div>
              <p className="mt-10 text-slate-400 text-lg max-w-2xl mx-auto italic">
                "Our regional engineers are based in Agra, Noida, Lucknow, and major metro cities to ensure zero downtime for your institute."
              </p>
           </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Contact;