import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LivedExperience = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-sigmar text-bubblegum mb-6">Lived Experience Powered by Community</h2>
            <div className="prose prose-lg">
              <p className="text-charcoal mb-6">
                Our BLOG is packed with patient stories sharing trial-and-error hacks, real-world shortcuts, and hard-earned wisdom. It's resilience in action, straight from the people who get it.
              </p>
            </div>
            <Link 
              to="/blog"
              className="bg-sunshine text-charcoal font-bold px-6 py-3 rounded-full flex items-center hover:bg-opacity-80 transition-colors w-fit"
            >
              Read Our Blog <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
          <div className="relative">
            <img 
              src="https://raw.githubusercontent.com/myblackbeanca/tmjimages/refs/heads/main/jfeldman.png"
              alt="Community Support"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 bg-bubblegum text-white p-4 rounded-lg shadow-lg">
              <p className="font-bold">Real Stories</p>
              <p className="text-sm">From Our Community</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LivedExperience;