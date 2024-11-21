import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Book } from 'lucide-react';
import PageHero from '../../../components/PageHero';
import SubscriptionForm from '../../../components/SubscriptionForm';

const Guides = () => {
  const [showSubscriptionForm, setShowSubscriptionForm] = useState(false);
  const [selectedGuidePath, setSelectedGuidePath] = useState('');

  const guides = [
    {
      title: "TMJ Guide to Eating Out",
      description: "Navigate restaurants and social dining with TMJ-friendly tips.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600",
      path: "/resources/guides/eating-out"
    },
    {
      title: "TMJ Guide to Flying",
      description: "Air travel tips for TMJ patients: Before, during, and after flights.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600",
      path: "/resources/guides/flying"
    },
    {
      title: "TMJ Guide to Dating",
      description: "Dating with TMJ: Communication tips and social strategies.",
      image: "https://images.unsplash.com/photo-1511306404404-ad607bd7c601?auto=format&fit=crop&q=80&w=600",
      path: "/resources/guides/dating"
    },
    {
      title: "TMJ Guide to Parenting",
      description: "Managing parenting responsibilities while dealing with TMJ.",
      image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&q=80&w=600",
      path: "/resources/guides/parenting"
    }
  ];

  const handleGuideClick = (path: string) => {
    setSelectedGuidePath(path);
    setShowSubscriptionForm(true);
  };

  const handleSubscriptionSubmit = (data: { email: string; phone: string }) => {
    console.log('Subscription data:', data);
    setShowSubscriptionForm(false);
  };

  return (
    <div className="min-h-screen">
      <PageHero
        title="TMJ Life Guides"
        subtitle="Comprehensive guides for living with TMJ"
        backgroundImage="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=1920"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Book className="w-12 h-12 text-bubblegum mx-auto mb-4" />
          <p className="text-lg text-charcoal mb-8">
            Our comprehensive guides help you navigate daily life with TMJ. Each guide provides
            practical tips, strategies, and real-world solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {guides.map((guide, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <img
                src={guide.image}
                alt={guide.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-charcoal mb-3">{guide.title}</h3>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <button
                  onClick={() => handleGuideClick(guide.path)}
                  className="inline-flex items-center px-4 py-2 bg-bubblegum text-white rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Access Guide
                </button>
              </div>
            </div>
          ))}
        </div>

        <SubscriptionForm
          isOpen={showSubscriptionForm}
          onClose={() => setShowSubscriptionForm(false)}
          onSubmit={handleSubscriptionSubmit}
          guidePath={selectedGuidePath}
        />
      </div>
    </div>
  );
};

export default Guides;