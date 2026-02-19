import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Calendar, User, ArrowRight, Search, TrendingUp, Clock, 
  ShieldCheck, Zap, Monitor, Award, ShoppingCart, 
  Activity, Handshake, Filter, X, Download, FileText, 
  Globe2, BarChart3, Microscope, Leaf, HelpCircle, Settings,
  BrainCircuit, Rocket, Scale
} from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Massive Data Synthesis: Educational, Technical, and Marketing Articles
  const blogPosts = [
    {
      id: 1,
      category: "ROI Analysis",
      title: "The 5-Year Ownership Cost: Digital Board vs. Projector",
      excerpt: "Traditional projectors lose 20% brightness every year. A 4K IFP with 50,000-hour lifespan saves up to ₹1.5 Lakh in maintenance over 5 years.",
      author: "Finance Lead",
      date: "Feb 10, 2026",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1551288049-bbbda546697c?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 2,
      category: "Engineering",
      title: "Why Zero Bonding is the Gold Standard for Interactive Displays",
      excerpt: "Zero Bonding removes the 0.5mm air gap between the glass and LCD, ensuring the pen tip aligns perfectly with digital ink for a natural feel.",
      author: "Hardware Head",
      date: "Feb 12, 2026",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 3,
      category: "AI & Future",
      title: "The AI-Powered Classroom: Voice Tracking & Auto-Annotation",
      excerpt: "Future-proof your institute with AI-tracking cameras that follow the teacher and smart voice-to-text software for instant class notes.",
      author: "AI Specialist",
      date: "Feb 14, 2026",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 4,
      category: "Procurement",
      title: "GeM Portal Guidelines for Government School Tenders",
      excerpt: "A step-by-step guide for administrative heads to navigate the GeM portal and ensure technical compliance for Digital Board procurement.",
      author: "Policy Expert",
      date: "Feb 18, 2026",
      readTime: "12 min",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 5,
      category: "Sustainability",
      title: "Go Green: How Digital Boards Save Energy and Paper",
      excerpt: "One digital board can save up to 5,000 pages per year. Discover the energy-efficient backlit technology that reduces your school's carbon footprint.",
      author: "Sustainability Lead",
      date: "Feb 19, 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 6,
      category: "Case Study",
      title: "Digitizing Agra: Transformation of Regional Coaching Hubs",
      excerpt: "How coaching centers in Agra improved student results by 40% after implementing 75-inch interactive panels and LMS integration.",
      author: "Regional Manager",
      date: "Feb 20, 2026",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  const categories = ["All", ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="bg-slate-50 pt-32 pb-20 font-sans selection:bg-blue-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* =========================================
            DYNAMIC HERO & SEARCH
            ========================================= */}
        <div className="grid lg:grid-cols-4 gap-12 mb-20 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-3">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">Knowledge Authority Portal</span>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.05]">
              Digitizing <span className="text-blue-600">Bharat's</span> Future.
            </h1>
            <p className="text-slate-600 text-xl leading-relaxed max-w-3xl mb-10">
              The complete resource for smart classroom transformation—from 4K hardware whitepapers to NEP 2020 compliance guides.
            </p>
            
            <div className="relative max-w-2xl group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={24} />
              <input 
                type="text" 
                placeholder="Search technical guides, pricing models, or GeM tips..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border-2 border-slate-100 rounded-3xl py-6 pl-14 pr-4 focus:border-blue-500 focus:outline-none shadow-xl transition-all text-lg"
              />
              {searchTerm && <X className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer" onClick={() => setSearchTerm("")} size={24} />}
            </div>
          </motion.div>

          {/* Quick Tools Sidebar */}
          <div className="bg-white p-8 rounded-[3rem] border border-slate-200 shadow-xl hidden lg:block">
             <div className="flex items-center gap-2 mb-8 text-blue-600 font-bold uppercase tracking-widest text-xs">
                <Rocket size={16}/> Essential Tools
             </div>
             <div className="space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer">
                   <div className="bg-red-50 p-3 rounded-xl text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors"><FileText size={20}/></div>
                   <div><p className="text-xs font-bold text-slate-900 leading-tight">Price List 2026</p><p className="text-[10px] text-slate-400">PDF • 2MB</p></div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                   <div className="bg-blue-50 p-3 rounded-xl text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors"><Scale size={20}/></div>
                   <div><p className="text-xs font-bold text-slate-900 leading-tight">GeM Tenders Guide</p><p className="text-[10px] text-slate-400">PDF • 4MB</p></div>
                </div>
             </div>
          </div>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex flex-wrap items-center gap-3 mb-16">
          <Filter size={18} className="text-slate-400 mr-2" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                selectedCategory === cat ? 'bg-blue-600 text-white shadow-2xl shadow-blue-200' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* DYNAMIC BLOG GRID */}
        <motion.div layout className="grid md:grid-cols-2 gap-12 mb-24">
          <AnimatePresence mode='popLayout'>
            {filteredPosts.map((post) => (
              <motion.div layout key={post.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} whileHover={{ y: -10 }} className="bg-white rounded-[4rem] overflow-hidden shadow-lg border border-slate-100 flex flex-col group">
                <div className="h-80 relative overflow-hidden">
                   <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-1000" />
                   <div className="absolute top-8 left-8 bg-blue-600 text-white px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl">{post.category}</div>
                </div>
                <div className="p-12 flex-grow">
                  <div className="flex items-center gap-8 text-[10px] text-slate-400 mb-6 font-bold uppercase tracking-widest">
                     <div className="flex items-center gap-2"><Calendar size={14} className="text-blue-500"/> {post.date}</div>
                     <div className="flex items-center gap-2"><Clock size={14} className="text-blue-500"/> {post.readTime}</div>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">{post.title}</h3>
                  <p className="text-slate-500 text-lg leading-relaxed mb-10 line-clamp-3">{post.excerpt}</p>
                  <div className="pt-8 border-t border-slate-50 flex justify-between items-center">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center border border-blue-100"><User size={20} className="text-blue-600"/></div>
                        <span className="text-sm font-bold text-slate-700">{post.author}</span>
                     </div>
                     <Link to="#" className="bg-slate-900 text-white px-8 py-3 rounded-2xl text-sm font-bold hover:bg-blue-600 transition shadow-lg">Read Article</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* =========================================
            TECHNICAL SPECS TABLE
            ========================================= */}
        <div className="mb-24 bg-white p-10 md:p-20 rounded-[4rem] border border-slate-200 shadow-2xl overflow-hidden relative">
           <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
              <div>
                 <h2 className="text-4xl font-black text-slate-900">DigitalBoardWala Hardware Benchmark</h2>
                 <p className="text-slate-500 mt-2 italic">Benchmarked against industry standards (Macnica/Nevon standards).</p>
              </div>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg shadow-blue-200">
                 <Download size={18}/> Export Datasheet
              </button>
           </div>
           
           <div className="overflow-x-auto">
              <table className="w-full text-left text-sm lg:text-base">
                 <thead className="bg-slate-900 text-white font-bold uppercase tracking-widest text-xs">
                    <tr>
                       <th className="p-6">Component</th>
                       <th className="p-6">Industry Standard</th>
                       <th className="p-6 bg-blue-600">Pro Series Series-X</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-100 font-medium text-slate-600">
                    <tr className="hover:bg-slate-50 transition-colors">
                       <td className="p-6 font-bold text-slate-900">Panel Brightness</td>
                       <td className="p-6">300 Nits (Dim)</td>
                       <td className="p-6 font-black text-blue-700">450 Nits (High Visibility)</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                       <td className="p-6 font-bold text-slate-900">Glass Hardness</td>
                       <td className="p-6">Normal Glass</td>
                       <td className="p-6 font-black text-blue-700">Mohs 7 (Toughened)</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                       <td className="p-6 font-bold text-slate-900">Response Time</td>
                       <td className="p-6">8ms - 10ms</td>
                       <td className="p-6 font-black text-blue-700">&lt;5ms (Instant Writing)</td>
                    </tr>
                 </tbody>
              </table>
           </div>
        </div>

        {/* =========================================
            MARKETING FOCUS: THE "FUTURE" EDGE
            ========================================= */}
        <div className="mb-24 grid md:grid-cols-2 gap-12">
           <div className="bg-blue-900 p-12 md:p-16 rounded-[4rem] text-white flex flex-col justify-between overflow-hidden relative shadow-2xl group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 opacity-20 blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition duration-700"></div>
              <div>
                 <BrainCircuit className="text-blue-400 mb-8" size={60} />
                 <h2 className="text-4xl font-black mb-6">AI & Automation in Teaching.</h2>
                 <p className="text-blue-100 text-lg leading-relaxed mb-10">Integrate 4K AI cameras that track teachers automatically during live streams. Sync with LMS tools for automated attendance and homework marking.</p>
              </div>
              <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-black w-fit shadow-xl">Explore AI Integration</button>
           </div>

           <div className="bg-indigo-950 p-12 md:p-16 rounded-[4rem] text-white flex flex-col justify-between overflow-hidden relative shadow-2xl group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-400 opacity-20 blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition duration-700"></div>
              <div>
                 <Globe2 className="text-indigo-400 mb-8" size={60} />
                 <h2 className="text-4xl font-black mb-6">Hybrid Classroom Framework.</h2>
                 <p className="text-indigo-100 text-lg leading-relaxed mb-10">Learn how to connect remote students with in-person learning seamlessly using our <strong>E-Share Pro</strong> technology and multi-split screen casting.</p>
              </div>
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-full font-black w-fit shadow-xl">Download Framework</button>
           </div>
        </div>

        {/* B2B PARTNER MARKETING */}
        <div className="rounded-[4rem] bg-slate-900 p-12 md:p-24 text-white relative overflow-hidden shadow-2xl border border-slate-800">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 opacity-10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
           <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight">Join the <br/>Partner Network.</h2>
                 <p className="text-slate-300 text-xl mb-12 leading-relaxed font-medium">Providing white-label OEM manufacturing and GeM compliance support for system integrators across India.</p>
                 <div className="flex flex-wrap gap-4 mb-12">
                    {['Custom Logo', 'BIS Certified', 'Regional Support'].map(tag => (
                       <span key={tag} className="bg-white/10 border border-white/20 px-6 py-2 rounded-full text-xs font-bold text-blue-200 tracking-wider">{tag}</span>
                    ))}
                 </div>
                 <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-blue-900 px-12 py-5 rounded-full font-black text-xl hover:bg-blue-50 transition shadow-2xl">Partner Program <Handshake size={24}/></Link>
              </div>
              <div className="bg-white/5 backdrop-blur-3xl p-12 rounded-[3.5rem] border border-white/10 text-center">
                 <ShoppingCart size={60} className="mx-auto mb-8 text-blue-400" />
                 <h4 className="text-3xl font-black mb-6">Bulk Procurement</h4>
                 <p className="text-slate-400 text-lg mb-10 italic">"Direct from factory pricing for ordering 5+ units. Free site survey included for institutes in Agra & NCR."</p>
                 <Link to="/pricing" className="block w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-500 transition shadow-xl">Get Volume Quote</Link>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;