import React from 'react';
import { BookOpen, Heart, Users, Shield } from 'lucide-react';

const Initiatives = () => {
  const initiatives = [
    {
      icon: <Shield className="w-8 h-8 text-bubblegum" />,
      title: "Patient Advocacy Resources",
      description: "Know your rights and get the tools to fight for the care you deserve."
    },
    {
      icon: <Heart className="w-8 h-8 text-bubblegum" />,
      title: "Free Samples & Discounts",
      description: "Access TMJ-related products and services at a discount—because self-care shouldn't break the bank."
    },
    {
      icon: <Users className="w-8 h-8 text-bubblegum" />,
      title: "Support Groups",
      description: "Find your people. We offer spaces to connect, vent, and heal with others who get it."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-bubblegum" />,
      title: "Educational Toolkits",
      description: "Learn more about TMJ, debunk the myths, and stay ahead of the latest treatment options."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-sigmar text-bubblegum mb-6">What We Offer – Our Initiatives</h2>
        <p className="text-lg text-charcoal mb-12">
          We're here to empower the TMJ community with resources, support, and a whole lot of jaw-dropping advocacy. Whether you need advice, discounts, or just a place to connect—we've got you covered.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((initiative, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="mb-4">{initiative.icon}</div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">{initiative.title}</h3>
              <p className="text-gray-600">{initiative.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;