import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';

const ThankYou = () => {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Thank You!"
        subtitle="Your support means the world to us"
        backgroundImage="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=1920"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <Heart className="w-16 h-16 text-bubblegum mx-auto mb-6" />
          <h2 className="text-3xl font-sigmar text-bubblegum mb-6">
            Thank You for Your Generous Support!
          </h2>
          
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
              alt="Jenny Feldman"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-charcoal mb-2">
              A Message from Jenny Feldman
            </h3>
            <p className="text-gray-600 italic">
              CEO & Founder at OHMYJAW
            </p>
          </div>

          <div className="prose prose-lg max-w-2xl mx-auto mb-8">
            <p>
              Your donation will help us continue our mission to support TMJ patients, fund research, and raise awareness about TMJ disorders. Together, we're making a real difference in the lives of millions affected by TMJ.
            </p>
            <p>
              Every contribution brings us one step closer to better understanding, treatment, and support for the TMJ community. Thank you for being part of this important journey.
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <Link
              to="/"
              className="bg-bubblegum text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center"
            >
              Return Home <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/about-tmj"
              className="bg-gray-100 text-charcoal px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Learn More About TMJ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;