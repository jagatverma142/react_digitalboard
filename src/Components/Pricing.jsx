import React from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Truck, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Award, 
  CreditCard,
  Table as TableIcon,
  Monitor,
  Info,
  Settings,
  Cpu,
  Layers,
  Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  // 1. Official Price Matrix (Based on digitalboard.org.in)
  const tableData = [
    { size: "65 Inch", resolution: "4K UHD", os: "Android 11/13", ram: "4GB", rom: "32GB", price: "₹85,000*" },
    { size: "75 Inch", resolution: "4K UHD", os: "Android 11/13", ram: "8GB", rom: "64GB", price: "₹1,25,000*" },
    { size: "86 Inch", resolution: "4K UHD", os: "Android 13.0", ram: "8GB", rom: "128GB", price: "₹2,10,000*" },
    { size: "98 Inch", resolution: "4K UHD", os: "Android 13.0", ram: "16GB", rom: "256GB", price: "On Request" },
  ];

  // 2. High-Conversion Pricing Cards
  const plans = [
    {
      name: "65\" Classroom Essential",
      price: "₹85,000",
      description: "Ideal for small coaching centers and primary school classrooms.",
      features: [
        "4K UHD (3840 x 2160) Resolution",
        "4GB RAM | 32GB Storage",
        "Android 13.0 Operating System",
        "4mm Toughened Anti-Glare Glass",
        "Dual 15W Front Speakers",
        "Wall Mount & 2 Stylus Included"
      ],
      recommended: false,
    },
    {
      name: "75\" Teaching Pro (75-PRO)",
      price: "₹1,25,000",
      description: "The most popular choice for modern school classrooms.",
      features: [
        "Zero Bonding Technology",
        "8GB RAM | 64GB Storage",
        "Built-in 4K AI Auto-Tracking Camera",
        "6-Array Beamforming Microphone",
        "Teachmint & LMS Integration Ready",
        "3-Year On-Site Warranty"
      ],
      recommended: true,
    },
    {
      name: "86\" Auditorium Grand",
      price: "₹2,10,000",
      description: "Designed for large lecture halls and corporate boardrooms.",
      features: [
        "Massive 86-inch 4K IPS Panel",
        "High Brightness (450 Nits)",
        "OPS Slot (i5/i7 Windows PC Ready)",
        "9-Device Wireless Split Screen",
        "Dolby Digital Audio Support",
        "NFC Security Card Access"
      ],
      recommended: false,
    }
  ];

  return (
    <div className="bg-slate-50 pt-32 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* =========================================
            HEADER & MARKETING HOOK
            ========================================= */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
              Pricing & Technical Specifications 2026
            </span>
            <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 mt-6 mb-4 tracking-tight">
              Invest in <span className="text-blue-600">Future-Ready</span> Classrooms
            </h1>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Industrial-grade interactive panels built for 24/7 educational usage. From budget-friendly 65" units to high-end 98" auditorium solutions.
            </p>
          </motion.div>
        </div>

        {/* =========================================
            DYNAMIC PRICE LIST TABLE
            ========================================= */}
        <div className="mb-24 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-2xl">
          <div className="p-8 bg-slate-900 text-white flex items-center justify-between">
             <div className="flex items-center gap-3">
                <TableIcon className="text-blue-400" />
                <h3 className="text-2xl font-bold">Official Price Matrix</h3>
             </div>
             <div className="hidden md:block bg-blue-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                GeM (Govt) Registered Rates
             </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                 <tr className="bg-slate-50 text-slate-500 uppercase text-xs font-bold tracking-widest">
                    <th className="p-6 border-b">Size</th>
                    <th className="p-6 border-b">Resolution</th>
                    <th className="p-6 border-b">OS Support</th>
                    <th className="p-6 border-b">RAM/ROM Specs</th>
                    <th className="p-6 border-b text-blue-600">Starting Rate</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                 {tableData.map((row, index) => (
                   <tr key={index} className="hover:bg-blue-50/50 transition-colors group">
                      <td className="p-6 font-bold text-slate-900 flex items-center gap-3">
                        <Monitor size={18} className="text-blue-500" /> {row.size}
                      </td>
                      <td className="p-6 text-slate-600">{row.resolution}</td>
                      <td className="p-6 text-slate-600">{row.os}</td>
                      <td className="p-6 text-slate-600 font-medium">{row.ram} / {row.rom}</td>
                      <td className="p-6 font-black text-blue-700 text-xl">{row.price}</td>
                   </tr>
                 ))}
               </tbody>
            </table>
          </div>
          <div className="bg-slate-50 p-5 text-center text-xs text-slate-500 italic border-t">
            *Indicative pricing. GST @ 18% extra. Bulk discounts available for 5+ units.
          </div>
        </div>

        {/* =========================================
            DETAILED SPECIFICATION CARDS
            ========================================= */}
        <div className="grid md:grid-cols-3 gap-8 mb-24 relative">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -12 }}
              className={`relative bg-white rounded-[3rem] p-10 border-2 transition-all duration-300 ${
                plan.recommended 
                  ? 'border-blue-600 shadow-2xl scale-105 z-10' 
                  : 'border-slate-100 shadow-xl'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-2 rounded-full text-xs font-bold uppercase shadow-xl">
                  Best Seller for Schools
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">{plan.description}</p>
              
              <div className="mb-8 border-y border-slate-50 py-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-6xl font-black text-slate-900 tracking-tighter">{plan.price}</span>
                  <span className="text-blue-600 font-bold text-xl">+</span>
                </div>
                <p className="text-xs text-slate-400 mt-3 font-bold uppercase tracking-widest">3-Year On-Site Service Warranty</p>
              </div>

              <ul className="space-y-5 mb-12">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 group">
                    <Check size={16} strokeWidth={3} className="text-green-500 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                to="/contact"
                className={`w-full py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-2 transition-all ${
                  plan.recommended 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-2xl' 
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                Get Custom Quote <ArrowRight size={20} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* =========================================
            HARDWARE BENCHMARK & TECH SPECS
            ========================================= */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
           {/* Technical Comparison Table */}
           <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg">
              <div className="p-6 bg-slate-900 text-white font-bold flex items-center gap-2">
                 <Activity size={20} className="text-blue-400"/> Technical Comparison
              </div>
              <table className="w-full text-left text-sm">
                 <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50">
                       <td className="p-5 font-bold text-slate-700">Display Lifespan</td>
                       <td className="p-5 text-slate-500">~2,000h (Projector Lamp)</td>
                       <td className="p-5 font-bold text-blue-600">50,000h+ (D-LED Panel)</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                       <td className="p-5 font-bold text-slate-700">Glass Hardness</td>
                       <td className="p-5 text-slate-500">Normal Glass</td>
                       <td className="p-5 font-bold text-blue-600">Mohs 7 (Toughened)</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                       <td className="p-5 font-bold text-slate-700">Touch Points</td>
                       <td className="p-5 text-slate-500">Passive (No Touch)</td>
                       <td className="p-5 font-bold text-blue-600">20-Points Multi-Touch</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                       <td className="p-5 font-bold text-slate-700">Operating System</td>
                       <td className="p-5 text-slate-500">External PC Required</td>
                       <td className="p-5 font-bold text-blue-600">Android 13 + Windows OPS</td>
                    </tr>
                 </tbody>
              </table>
           </div>

           {/* Core Technologies Spotlight */}
           <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center group hover:border-blue-500 transition">
                 <Layers size={40} className="mx-auto text-blue-600 mb-4 group-hover:scale-110 transition"/>
                 <h4 className="font-bold text-slate-900 mb-2">Zero Bonding</h4>
                 <p className="text-xs text-slate-500 leading-relaxed">No air gap between glass and display for a pen-on-paper feel.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center group hover:border-blue-500 transition">
                 <Cpu size={40} className="mx-auto text-blue-600 mb-4 group-hover:scale-110 transition"/>
                 <h4 className="font-bold text-slate-900 mb-2">Dual OS System</h4>
                 <p className="text-xs text-slate-500 leading-relaxed">Android for speed, Windows OPS for power-intensive software.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center group hover:border-blue-500 transition">
                 <Monitor size={40} className="mx-auto text-blue-600 mb-4 group-hover:scale-110 transition"/>
                 <h4 className="font-bold text-slate-900 mb-2">4K Eye-Care</h4>
                 <p className="text-xs text-slate-500 leading-relaxed">Hardware-level low blue light filter to protect students' vision.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center group hover:border-blue-500 transition">
                 <Zap size={40} className="mx-auto text-blue-600 mb-4 group-hover:scale-110 transition"/>
                 <h4 className="font-bold text-slate-900 mb-2">Infinite Canvas</h4>
                 <p className="text-xs text-slate-500 leading-relaxed">Smart whiteboard software with shapes, recording, and AI tools.</p>
              </div>
           </div>
        </div>
        
        

        {/* =========================================
            VALUE ADDED SERVICES
            ========================================= */}
        <div className="grid md:grid-cols-4 gap-6 mb-24 text-center">
           {[
             { icon: <Truck />, title: "National Delivery", desc: "Safe wood-crating for 150+ cities" },
             { icon: <Award />, title: "Quality Certified", desc: "ISO 9001:2015 & BIS Certified" },
             { icon: <ShieldCheck />, title: "AMC Support", desc: "Lifetime maintenance contracts" },
             { icon: <CreditCard />, title: "Smart Financing", desc: "0% EMI & Lease Options" }
           ].map((item, i) => (
             <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl transition">
                <div className="text-blue-600 bg-blue-50 p-4 rounded-2xl mb-4 inline-block">{item.icon}</div>
                <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
             </div>
           ))}
        </div>

        {/* =========================================
            BULK BUYING & GeM TENDERS
            ========================================= */}
        <div className="rounded-[4rem] bg-gradient-to-br from-blue-700 to-indigo-950 p-12 md:p-24 text-white text-center shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
           <motion.h2 
             initial={{ scale: 0.9 }} 
             whileInView={{ scale: 1 }}
             className="text-3xl md:text-5xl font-black mb-8 relative z-10 leading-tight"
           >
             Buying for a Large Institution? <br/>
             Get Tenders & Bulk GeM Support.
           </motion.h2>
           <p className="text-blue-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto relative z-10 font-medium leading-relaxed">
             We specialize in handling bulk procurement for Schools, Universities, and Corporate Boardrooms. 
             Special tiered pricing available for 10+ units.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
              <Link to="/contact" className="bg-white text-blue-900 px-12 py-5 rounded-full font-black text-xl hover:bg-blue-50 transition shadow-2xl active:scale-95">
                 Request Partner Pricing <ArrowRight size={24} className="inline ml-2" />
              </Link>
           </div>
           <p className="text-xs text-blue-300 mt-10 uppercase tracking-[0.2em] font-bold opacity-80">
              Trusted by 5,000+ Smart Classrooms Across India
           </p>
        </div>

      </div>
    </div>
  );
};

export default Pricing;