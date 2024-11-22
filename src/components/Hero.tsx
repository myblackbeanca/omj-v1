import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-[calc(100vh-4rem)] mt-16">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url(https://raw.githubusercontent.com/myblackbeanca/tmjimages/refs/heads/main/omjmainban.png)'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            It's not all in your head
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Understanding, supporting, and advocating for those affected by TMJ disorders.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/about-omj">
              <button className="bg-[#FD75B4] text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center">
                Learn More
                <ArrowRight className="ml-2" size={20} />
              </button>
            </Link>
            <Link to="/support">
              <button className="bg-transparent border-2 border-[#FDE48C] text-[#FDE48C] px-8 py-3 rounded-full font-semibold hover:bg-[#FDE48C] hover:text-[#4A555D] transition-colors">
                Donate Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;