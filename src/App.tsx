import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import FeaturedProducts from './components/sections/FeaturedProducts';
import Footer from './components/layout/Footer';
import { Toaster } from 'sonner';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Zap, Globe, ShieldCheck } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100">
      <Toaster position="top-right" />
      <Navbar />
      
      <main>
        {/* Main Hero Section */}
        <Hero />
        
        {/* Quick Icon Links Section */}
        <section className="py-12 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-10 md:gap-20">
              {[
                { icon: "https://img.icons8.com/color/48/microsoft-365.png", label: "Innovatech 360" },
                { icon: "https://img.icons8.com/color/48/surface-pro.png", label: "InnovaTab devices" },
                { icon: "https://img.icons8.com/color/48/xbox.png", label: "PlaySphere games" },
                { icon: "https://img.icons8.com/color/48/windows-11.png", label: "InnovaOS 11" }
              ].map((item, i) => (
                <a key={i} href="#" className="flex flex-col items-center gap-3 group transition-transform hover:-translate-y-1">
                  <img src={item.icon} alt={item.label} className="w-10 h-10 object-contain" />
                  <span className="text-sm font-semibold text-[#0067b8] group-hover:underline text-center">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Content / Consumer Section */}
        <FeaturedProducts />

        {/* Enterprise/Business Showcase Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl flex items-center group">
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/430c9181-c5ec-4d76-8f4c-c28b7701b88d/enterprise-solutions-291d9d8c-1772206749476.webp" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Business Innovation"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
                <div className="relative z-10 px-8 md:px-20 max-w-2xl text-white">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/30">
                      Enterprise Solutions
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Empowering your business with the Innovatech Cloud</h2>
                    <p className="text-xl opacity-90 mb-8 leading-relaxed">
                      Deliver results today and prepare for the future with the most trusted, secure, and versatile cloud platform.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <button className="px-8 py-3 bg-[#0067b8] hover:bg-[#005da6] transition-all transform hover:scale-105 font-semibold rounded-sm">
                        Get Started
                      </button>
                      <button className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all transform hover:scale-105 font-semibold rounded-sm border border-white/30">
                        Contact Sales
                      </button>
                    </div>
                  </motion.div>
                </div>
             </div>
          </div>
        </section>

        {/* Developer & Innovation Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Innovation for Developers</h2>
                  <p className="text-lg text-gray-600">
                    We're building the most comprehensive platform for developers to build, test, and deploy applications at scale.
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { icon: <Code className="text-blue-500" />, title: "InnovaCode", desc: "The most popular code editor, reimagined." },
                    { icon: <Zap className="text-yellow-500" />, title: "InnovaPilot", desc: "Your AI pair programmer." },
                    { icon: <Globe className="text-green-500" />, title: "InnovaCloud Web Apps", desc: "Global scale for modern web apps." },
                    { icon: <ShieldCheck className="text-purple-500" />, title: "Security First", desc: "Built-in security at every layer." }
                  ].map((feat, idx) => (
                    <div key={idx} className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                      <div className="mb-4">{feat.icon}</div>
                      <h4 className="font-bold text-gray-900 mb-1">{feat.title}</h4>
                      <p className="text-sm text-gray-600">{feat.desc}</p>
                    </div>
                  ))}
                </div>

                <a href="#" className="inline-flex items-center gap-2 text-[#0067b8] font-bold hover:underline">
                  Explore Developer Tools <ArrowRight size={20} />
                </a>
              </div>
              
              <div className="relative">
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/430c9181-c5ec-4d76-8f4c-c28b7701b88d/innovation-team-16ce1f9b-1772206748778.webp" 
                  alt="Developer Team"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 p-8 bg-blue-600 rounded-2xl shadow-2xl text-white max-w-xs hidden md:block">
                  <p className="text-lg font-medium italic">"The future of development is AI-powered, and we're leading the way."</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-400"></div>
                    <div>
                      <p className="text-sm font-bold">Alex Rivera</p>
                      <p className="text-xs opacity-80">CEO, Innovatech Solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Impact CTA */}
        <section className="py-20 bg-[#0067b8] text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to transform your world?</h2>
            <p className="text-xl opacity-90 mb-10">
              Join millions of people and organizations using Innovatech technology to achieve more.
            </p>
            <div className="flex justify-center gap-6">
              <button className="px-10 py-4 bg-white text-[#0067b8] font-bold rounded-sm hover:bg-gray-100 transition-colors">
                Find a Plan
              </button>
              <button className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-sm hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Back to top float */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 bg-white/80 backdrop-blur-md hover:bg-white rounded-full shadow-lg transition-all z-40 border border-gray-200"
      >
        <svg className="w-6 h-6 text-[#0067b8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* Social Sticky (Desktop Only) */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 z-40">
        {['Twitter', 'Facebook', 'LinkedIn'].map((social) => (
          <a key={social} href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-xl transition-all border border-gray-100 text-gray-400 hover:text-[#0067b8]">
            <span className="sr-only">{social}</span>
            <div className="w-5 h-5 bg-current mask-icon" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;