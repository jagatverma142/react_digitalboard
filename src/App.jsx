import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Components Imports
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Pricing from './Components/Pricing';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Quote from './Components/Quote';
import Installation from './Components/Installation';
import AMCSupport from './Components/AMCSupport';
import Training from './Components/Training';
import CloudSoftware from './Components/CloudSoftware';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white flex flex-col min-h-screen">
      
      <ScrollToTop />
      <Navbar />

      <main className="flex-grow">
        <Routes>
          {/* 👇 YAHAN DHYAAN DEIN: '#' Hata diya gaya hai */}
          <Route path="/" element={<Home />} />          {/* Home ke liye sirf '/' */}
          <Route path="/about" element={<About />} />    {/* '#' hata kar '/' */}
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/quote' element={<Quote />} />
          <Route path='/services/installation' element={<Installation />} />
          <Route path='/services/amc-support' element={<AMCSupport />} />
          <Route path='/services/training' element={<Training />} />
          <Route path='/services/cloud-software' element={<CloudSoftware />} />
          
          {/* Agar koi page na mile toh ye dikhega */}
          <Route path="*" element={<div className="text-center py-20 text-2xl font-bold">404 - Page Not Found</div>} />
        </Routes>
      </main>
      
      <Footer />
      
    </div>
  );
}

export default App;