import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedSections = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Featured Section */}
        <div className="mb-20">
          <img
            src="https://github.com/myblackbeanca/tmjimages/blob/main/omj5.png?raw=true"
            alt="TMJ Support"
            className="w-full rounded-xl shadow-lg mb-8"
          />
          <div className="text-center">
            <Link
              to="/about-tmj"
              className="inline-flex items-center px-6 py-3 bg-bubblegum text-white rounded-full font-semibold hover:bg-opacity-90 transition-colors"
            >
              Learn More About TMJ <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>

        {/* Second Featured Section */}
        <div className="mb-20">
          <img
            src="https://github.com/myblackbeanca/tmjimages/blob/main/omj4.png?raw=true"
            alt="TMJ Community"
            className="w-full rounded-xl shadow-lg mb-8"
          />
          <div className="text-center">
            <Link
              to="/support"
              className="inline-flex items-center px-6 py-3 bg-sunshine text-charcoal rounded-full font-semibold hover:bg-opacity-90 transition-colors"
            >
              Join Our Community <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>

        {/* Third Featured Section */}
        <div>
          <img
            src="https://github.com/myblackbeanca/tmjimages/blob/main/omj8.png?raw=true"
            alt="TMJ Resources"
            className="w-full rounded-xl shadow-lg mb-8"
          />
          <div className="text-center">
            <Link
              to="/resources"
              className="inline-flex items-center px-6 py-3 bg-bubblegum text-white rounded-full font-semibold hover:bg-opacity-90 transition-colors"
            >
              Access Resources <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSections;