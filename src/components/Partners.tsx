import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Partners = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-sigmar text-bubblegum mb-6">Jawfully Grateful: Our Partners</h2>
            <div className="prose prose-lg">
              <p className="text-charcoal mb-6">
                We're stronger together. Our partners include businesses, influencers, providers, policymakers, and fellow patients—all committed to advancing women's health and TMJ care. These alliances are the key to creating a future where no one has to fight alone.
              </p>
              <p className="text-charcoal mb-6">
                Join us, get involved, and help us shape the future of TMJ awareness and care. Together, we can make a difference—one conversation at a time.
              </p>
            </div>
            <Link 
              to="/sponsor-us"
              className="bg-sunshine text-charcoal font-bold px-6 py-3 rounded-full flex items-center hover:bg-opacity-80 transition-colors w-fit"
            >
              Become a Partner <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=400" 
              alt="Medical Professionals"
              className="rounded-lg shadow-md"
            />
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400" 
              alt="Healthcare Innovation"
              className="rounded-lg shadow-md"
            />
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400" 
              alt="Patient Care"
              className="rounded-lg shadow-md"
            />
            <img 
              src="https://images.unsplash.com/photo-1576091160101-2a8b7a875d6a?auto=format&fit=crop&q=80&w=400" 
              alt="Research"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;