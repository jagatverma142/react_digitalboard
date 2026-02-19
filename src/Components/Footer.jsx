import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Monitor, Facebook, Twitter, Linkedin, Youtube, 
  Mail, Phone, MapPin, ArrowRight, ShieldCheck 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                <Monitor size={24} />
              </div>
              <span className="text-2xl font-bold text-white">
                DigitalBoard<span className="text-blue-500">Wala</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              India's leading OEM/ODM provider of Interactive Flat Panels (IFP) for Smart Classrooms, Corporate Offices, and Government Institutions. 
              <br/><br/>
              <strong>ISO 9001:2015 Certified Company.</strong>
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="bg-slate-800 p-2.5 rounded-full hover:bg-blue-600 hover:text-white transition"><Facebook size={18} /></a>
              <a href="#" className="bg-slate-800 p-2.5 rounded-full hover:bg-blue-400 hover:text-white transition"><Twitter size={18} /></a>
              <a href="#" className="bg-slate-800 p-2.5 rounded-full hover:bg-blue-700 hover:text-white transition"><Linkedin size={18} /></a>
              <a href="#" className="bg-slate-800 p-2.5 rounded-full hover:bg-red-600 hover:text-white transition"><Youtube size={18} /></a>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              Our Products <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/pricing" className="hover:text-blue-400 transition flex items-center gap-2"><ArrowRight size={14}/> 65 Inch Interactive Panel</Link></li>
              <li><Link to="/pricing" className="hover:text-blue-400 transition flex items-center gap-2"><ArrowRight size={14}/> 75 Inch Pro Series</Link></li>
              <li><Link to="/pricing" className="hover:text-blue-400 transition flex items-center gap-2"><ArrowRight size={14}/> 86 Inch Auditorium Board</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition flex items-center gap-2"><ArrowRight size={14}/> OPS (i5/i7 Windows PC)</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition flex items-center gap-2"><ArrowRight size={14}/> 4K PTZ Conferencing Camera</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition flex items-center gap-2"><ArrowRight size={14}/> Smart Classroom Stands</Link></li>
            </ul>
          </div>

          {/* Column 3: Support & Resources */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              Support Center <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/contact" className="hover:text-blue-400 transition">Request a Quote</Link></li>
              <li><a href="#" className="hover:text-blue-400 transition">Download Drivers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">User Manuals</a></li>
              <li><Link to="/services" className="hover:text-blue-400 transition">Warranty Registration</Link></li>
              <li><Link to="/blog" className="hover:text-blue-400 transition">Blog & Case Studies</Link></li>
              <li><a href="#" className="hover:text-blue-400 transition text-yellow-500 flex items-center gap-2"><ShieldCheck size={14}/> Partner Login</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              Contact Us <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
            </h4>
            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-500 mt-1 shrink-0" />
                <span className="text-slate-400">
                  Head Office:<br/>
                  Sector 62, Noida, <br/>
                  Uttar Pradesh - 201309, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-blue-500 shrink-0" />
                <span className="text-slate-400">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-blue-500 shrink-0" />
                <span className="text-slate-400">sales@digitalboardwala.com</span>
              </div>
              
              {/* Newsletter Small */}
              <div className="pt-4">
                <p className="text-xs font-bold text-white mb-2">Subscribe to Updates</p>
                <div className="flex">
                  <input type="email" placeholder="Email" className="bg-slate-800 text-white px-3 py-2 rounded-l-lg text-xs w-full focus:outline-none focus:ring-1 focus:ring-blue-500"/>
                  <button className="bg-blue-600 px-3 py-2 rounded-r-lg hover:bg-blue-700 transition"><ArrowRight size={14} className="text-white"/></button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Digital Board Wala. All Rights Reserved. 
            <span className="hidden md:inline"> | Made with ❤️ in India.</span>
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;