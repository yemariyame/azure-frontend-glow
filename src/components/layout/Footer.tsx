import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Globe, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    {
      title: "What's new",
      links: ["InnovaBook Studio", "InnovaBook Go", "InnovaTab Pro", "Innovatech 360", "InnovaOS apps"]
    },
    {
      title: "Innovatech Store",
      links: ["Account profile", "Download Center", "Store Support", "Returns", "Order tracking"]
    },
    {
      title: "Education",
      links: ["Innovatech in education", "Devices for education", "Innovatech Meet for Education", "Innovatech 360 Education", "Office Education"]
    },
    {
      title: "Business",
      links: ["Innovatech Cloud", "Innovatech Security", "InnovaCloud Platform", "Dynamics 360", "Innovatech 360"]
    },
    {
      title: "Developer & IT",
      links: ["Developer Center", "Documentation", "Innovatech Learn", "Innovatech Tech Community", "Cloud Marketplace"]
    },
    {
      title: "Company",
      links: ["Careers", "About Innovatech", "Company news", "Privacy at Innovatech", "Investors"]
    }
  ];

  return (
    <footer className="bg-[#f2f2f2] pt-12 pb-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wider">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-gray-500 hover:text-black hover:underline transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-300 gap-6">
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-2 text-xs text-gray-500 hover:text-black">
              <Globe size={14} /> English (United States)
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-black">Your Privacy Choices</a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
            <a href="#" className="hover:underline">Sitemap</a>
            <a href="#" className="hover:underline">Contact Innovatech</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms of use</a>
            <a href="#" className="hover:underline">Trademarks</a>
            <a href="#" className="hover:underline">Safety & eco</a>
            <a href="#" className="hover:underline">Recycling</a>
            <a href="#" className="hover:underline">About our ads</a>
            <span>© Innovatech Solutions 2025</span>
          </div>

          <div className="flex items-center gap-4">
            <Twitter size={18} className="text-gray-500 hover:text-black cursor-pointer" />
            <Facebook size={18} className="text-gray-500 hover:text-black cursor-pointer" />
            <Linkedin size={18} className="text-gray-500 hover:text-black cursor-pointer" />
            <Youtube size={18} className="text-gray-500 hover:text-black cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;