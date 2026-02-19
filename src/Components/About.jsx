import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Target, Users, Award, Globe, 
  CheckCircle, Briefcase, TrendingUp, Heart,
  Building, Truck, Shield, Clock,
  MapPin, Phone, Mail, Zap, PenTool, 
  Factory, BarChart3, Handshake, Microscope
} from 'lucide-react';

const About = () => {

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-white overflow-hidden font-sans text-slate-900">

      {/* =========================================
          SECTION 1: GRAND HERO (Brand Authority)
          ========================================= */}
      <section className="relative pt-32 pb-28 bg-slate-900 text-white text-center overflow-hidden">
        {/* Abstract Background Tech Map */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute -top-[50%] -left-[20%] w-[800px] h-[800px] bg-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 border border-slate-600 bg-slate-800/80 backdrop-blur-md px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8 text-blue-400 shadow-xl">
               Since 2015 • ISO 9001:2015 Certified
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
              India's Largest <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Smart Classroom Ecosystem.</span>
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed max-w-3xl mx-auto mb-10">
              We don't just sell screens; we engineer <strong>Educational Experiences</strong>. 
              From K-12 schools in rural India to corporate boardrooms in Mumbai, 
              <strong>DigitalBoardWala</strong> is the engine behind 5,000+ smart transformations.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-slate-400">
               <span className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg border border-slate-700"><Factory size={16} className="text-blue-500"/> OEM Manufacturing</span>
               <span className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg border border-slate-700"><Globe size={16} className="text-blue-500"/> Pan-India Service</span>
               <span className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg border border-slate-700"><Shield size={16} className="text-blue-500"/> 3-Year On-Site Warranty</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: THE "WHY NOW?" (Market Need)
          ========================================= */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="order-2 lg:order-1 relative">
             <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-indigo-50 rounded-3xl -z-10 skew-y-3"></div>
             <img 
               src="https://images.unsplash.com/photo-1577896337318-2869d389e2fb?auto=format&fit=crop&q=80&w=1000" 
               alt="Classroom Transformation" 
               className="rounded-2xl shadow-2xl border border-white"
             />
             <div className="absolute top-6 left-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-slate-100">
               <p className="text-slate-500 text-xs uppercase font-bold mb-1">Retention Rate</p>
               <div className="flex items-end gap-2">
                 <p className="text-3xl font-bold text-green-600">60%</p>
                 <TrendingUp size={24} className="text-green-600 mb-1" />
               </div>
               <p className="text-[10px] text-slate-400">Increase in Student Focus</p>
             </div>
          </div>

          <div className="order-1 lg:order-2">
             <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">The Evolution</h2>
             <h3 className="text-4xl font-bold text-slate-900 mb-6">Chalkboards Are History. <br/>The Future is Pixel Perfect.</h3>
             <p className="text-slate-600 text-lg mb-6 leading-relaxed">
               The traditional education model is broken. Students engaged with smartphones at home find blackboards boring. 
               <strong>DigitalBoardWala</strong> bridges this gap.
             </p>
             <p className="text-slate-600 text-lg mb-8 leading-relaxed">
               We replace static teaching with <strong>Interactive Learning</strong>. Our panels allow teachers to pull up 3D models of the human heart, solve complex math equations on an infinite canvas, and record lectures for revision—all with a single touch.
             </p>
             
             <div className="flex gap-4">
               <div className="border-l-4 border-blue-600 pl-4">
                 <h4 className="font-bold text-xl">Visual Learning</h4>
                 <p className="text-slate-500 text-sm">Boosts memory retention by 40%.</p>
               </div>
               <div className="border-l-4 border-purple-600 pl-4">
                 <h4 className="font-bold text-xl">Hybrid Ready</h4>
                 <p className="text-slate-500 text-sm">Teach in-class & online simultaneously.</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: INFRASTRUCTURE & SCALE
          ========================================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900">Built for Scale</h2>
              <p className="text-slate-600 mt-2 text-lg">We are not a trading company. We are a full-stack infrastructure brand.</p>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition group">
                 <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition">
                   <Building size={32} />
                 </div>
                 <h4 className="text-xl font-bold mb-3">5,000 sq.ft. HQ</h4>
                 <p className="text-slate-600 leading-relaxed">
                   Our corporate hub in <strong>Noida Sector 62</strong> houses our R&D, Software, and Sales teams. Come visit our Experience Center to touch and feel the product.
                 </p>
              </div>
              
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition group">
                 <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition">
                   <Truck size={32} />
                 </div>
                 <h4 className="text-xl font-bold mb-3">National Logistics</h4>
                 <p className="text-slate-600 leading-relaxed">
                   With warehouses in <strong>Delhi, Mumbai, and Bangalore</strong>, we ensure 48-hour dispatch. We use specialized crating to ensure zero-damage delivery.
                 </p>
              </div>

              <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition group">
                 <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition">
                   <Users size={32} />
                 </div>
                 <h4 className="text-xl font-bold mb-3">150+ Team Strength</h4>
                 <p className="text-slate-600 leading-relaxed">
                   From certified installation engineers to software trainers, our team is our biggest asset. We don't outsource support; we own it.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: QUALITY ASSURANCE (Marketing Trust)
          ========================================= */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(45deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div>
               <div className="inline-block bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-6">ISO 9001:2015</div>
               <h2 className="text-4xl font-bold mb-6">The 7-Step Quality Check</h2>
               <p className="text-slate-400 text-lg mb-8">
                 Hardware failure in a classroom is not an option. That's why every single panel undergoes a rigorous <strong>48-Hour Burn-In Test</strong> before leaving our facility.
               </p>

               <div className="space-y-6">
                 {[
                   "Zero-Pixel Defect Screening",
                   "48-Hour Continuous Video Playback Loop",
                   "Touch Response & Latency Calibration",
                   "Port Connectivity Stress Test (HDMI/USB)",
                   "Audio Frequency Response Check",
                   "Wi-Fi & Bluetooth Signal Strength Test",
                   "Drop & Vibration Simulation Packaging"
                 ].map((step, i) => (
                   <div key={i} className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                     <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">{i + 1}</div>
                     <span className="font-medium text-slate-200">{step}</span>
                   </div>
                 ))}
               </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 text-center">
               <Microscope size={80} className="text-blue-500 mx-auto mb-6" />
               <h3 className="text-2xl font-bold text-white mb-2">Less Than 0.5% Return Rate</h3>
               <p className="text-slate-400 mb-8">Industry standard is 3%. We set the benchmark.</p>
               <div className="grid grid-cols-2 gap-4">
                 <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
                    <p className="text-3xl font-bold text-blue-400">A+</p>
                    <p className="text-xs text-slate-500 uppercase">Panel Grade</p>
                 </div>
                 <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
                    <p className="text-3xl font-bold text-blue-400">4mm</p>
                    <p className="text-xs text-slate-500 uppercase">Glass Thickness</p>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 5: B2B PARTNER PROGRAM (Marketing to Resellers)
          ========================================= */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
              <span className="text-purple-600 font-bold tracking-widest uppercase text-sm">For Business</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-2">Grow With Us: Partner Program</h2>
              <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                Are you an IT vendor, System Integrator, or Education Consultant? 
                Join our network and earn high margins with zero inventory risk.
              </p>
           </div>

           <div className="grid md:grid-cols-2 gap-8">
              {/* Reseller Card */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-blue-600">
                 <div className="flex justify-between items-start mb-6">
                    <Handshake size={48} className="text-blue-600" />
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">Most Popular</span>
                 </div>
                 <h3 className="text-2xl font-bold mb-4">Become a Reseller</h3>
                 <ul className="space-y-3 mb-8">
                    <li className="flex gap-2 text-slate-600"><CheckCircle size={18} className="text-green-500"/> Attractive Margins (Up to 20%)</li>
                    <li className="flex gap-2 text-slate-600"><CheckCircle size={18} className="text-green-500"/> Marketing Collaterals Support</li>
                    <li className="flex gap-2 text-slate-600"><CheckCircle size={18} className="text-green-500"/> Lead Sharing in Your Region</li>
                 </ul>
                 <Link to="/contact" className="block text-center bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition">Apply Now</Link>
              </div>

              {/* OEM Card */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-purple-600">
                 <div className="flex justify-between items-start mb-6">
                    <Factory size={48} className="text-purple-600" />
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-bold">White Label</span>
                 </div>
                 <h3 className="text-2xl font-bold mb-4">OEM / White Label</h3>
                 <ul className="space-y-3 mb-8">
                    <li className="flex gap-2 text-slate-600"><CheckCircle size={18} className="text-green-500"/> Launch Your Own Brand</li>
                    <li className="flex gap-2 text-slate-600"><CheckCircle size={18} className="text-green-500"/> Custom Boot Logo & Packaging</li>
                    <li className="flex gap-2 text-slate-600"><CheckCircle size={18} className="text-green-500"/> Tech Support Backed by Us</li>
                 </ul>
                 <Link to="/contact" className="block text-center bg-purple-600 text-white py-3 rounded-xl font-bold hover:bg-purple-700 transition">Contact for OEM</Link>
              </div>
           </div>
        </div>
      </section>

      {/* =========================================
          SECTION 6: OUR JOURNEY (Timeline)
          ========================================= */}
      <section className="py-24 bg-white">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Journey of Innovation</h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
               
               {/* 2015 */}
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                     <Clock size={16}/>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
                     <div className="flex items-center justify-between space-x-2 mb-1">
                        <div className="font-bold text-slate-900">Inception</div>
                        <time className="font-caveat font-medium text-blue-600">2015</time>
                     </div>
                     <div className="text-slate-500 text-sm">Started as a small AV equipment supplier for local coaching centers in Delhi.</div>
                  </div>
               </div>

               {/* 2018 */}
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                     <BarChart3 size={16}/>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
                     <div className="flex items-center justify-between space-x-2 mb-1">
                        <div className="font-bold text-slate-900">Direct Manufacturing</div>
                        <time className="font-caveat font-medium text-blue-600">2018</time>
                     </div>
                     <div className="text-slate-500 text-sm">Partnered with global OEMs to control quality. Launched our first "Pro Series" panel.</div>
                  </div>
               </div>

               {/* 2021 */}
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                     <Globe size={16}/>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm">
                     <div className="flex items-center justify-between space-x-2 mb-1">
                        <div className="font-bold text-slate-900">The Hybrid Boom</div>
                        <time className="font-caveat font-medium text-blue-600">2021</time>
                     </div>
                     <div className="text-slate-500 text-sm">Expanded to 50+ cities. Launched "Hybrid Classroom" kits with Cameras & Mic.</div>
                  </div>
               </div>

               {/* 2025 */}
               <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                     <Zap size={16}/>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-blue-600 p-6 rounded-xl shadow-lg">
                     <div className="flex items-center justify-between space-x-2 mb-1">
                        <div className="font-bold text-white">Market Leader</div>
                        <time className="font-caveat font-medium text-blue-200">2025</time>
                     </div>
                     <div className="text-blue-100 text-sm">Achieved 5,000+ Classroom installations. Launched AI-powered Teacher Tracking Cameras.</div>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* =========================================
          SECTION 7: CTA STRIP
          ========================================= */}
      <section className="py-20 bg-slate-900 text-white text-center">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">Experience It Before You Buy</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
               Don't just take our word for it. Visit our Experience Center or schedule a live video demo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm font-bold">
               <div className="flex items-center justify-center gap-2 bg-slate-800 px-6 py-3 rounded-full">
                  <Phone size={18} className="text-blue-400" /> +91 98765 43210
               </div>
               <div className="flex items-center justify-center gap-2 bg-slate-800 px-6 py-3 rounded-full">
                  <Mail size={18} className="text-blue-400" /> sales@digitalboardwala.com
               </div>
            </div>
            <Link to="/contact" className="inline-block mt-8 bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-bold text-lg transition shadow-2xl">
              Book a Free Demo
            </Link>
         </div>
      </section>

    </div>
  );
};

export default About;