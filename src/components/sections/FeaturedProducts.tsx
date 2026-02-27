import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Cloud, Shield, Terminal, ArrowRight } from 'lucide-react';

const products = [
  {
    title: "InnovaCloud AI",
    description: "Build, deploy, and manage high-quality AI models more safely and quickly with the most comprehensive AI platform.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/430c9181-c5ec-4d76-8f4c-c28b7701b88d/ai-feature-0837d935-1772206747708.webp",
    icon: <Cpu className="text-blue-600" />,
    tag: "Most Popular"
  },
  {
    title: "Intelligent Cloud",
    description: "Modernize your infrastructure and scale your business with the most trusted cloud platform in the industry.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/430c9181-c5ec-4d76-8f4c-c28b7701b88d/cloud-feature-02ba1f74-1772206749450.webp",
    icon: <Cloud className="text-blue-600" />,
    tag: "Enterprise"
  },
  {
    title: "InnovaOS 11",
    description: "A new operating system experience, bringing you closer to the people and things you love.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/430c9181-c5ec-4d76-8f4c-c28b7701b88d/enterprise-solutions-291d9d8c-1772206749476.webp",
    icon: <Terminal className="text-blue-600" />,
    tag: "Updated"
  },
  {
    title: "InnovaGuard AI",
    description: "Defend at the speed and scale of AI with Innovatech's unified security operations platform.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/430c9181-c5ec-4d76-8f4c-c28b7701b88d/innovation-team-16ce1f9b-1772206748778.webp",
    icon: <Shield className="text-blue-600" />,
    tag: "New"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Innovation for Your Future</h2>
            <p className="mt-4 text-gray-600 max-w-2xl text-lg">
              Explore how we're shaping the future of technology with industry-leading products designed to empower you.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-[#0067b8] font-semibold hover:underline">
            View all products <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col h-full bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-blue-700 uppercase">
                  {product.tag}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0067b8] transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {product.description}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-[#0067b8] font-semibold text-sm group-hover:underline">
                  Learn more <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;