import React from 'react';
import { Book, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GuidesList = () => {
  const guides = [
    {
      title: "TMJ Guide to Eating Out",
      description: "Navigate restaurants and social dining with TMJ-friendly tips. Learn what to order, how to modify dishes, and enjoy dining out without jaw pain.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600",
      path: "/resources/guides/eating-out"
    },
    {
      title: "TMJ Guide to Dating",
      description: "Navigate dating and relationships with TMJ: from communication tips to planning jaw-friendly dates.",
      image: "https://images.unsplash.com/photo-1511306404404-ad607bd7c601?auto=format&fit=crop&q=80&w=600",
      path: "/resources/guides/dating"
    },
    {
      title: "TMJ Guide to Parenting",
      description: "Essential strategies for managing TMJ while raising children, from pregnancy to daily parenting challenges.",
      image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&q=80&w=600",
      path: "/resources/guides/parenting"
    },
    {
      title: "TMJ Guide to Flying",
      description: "Essential tips for air travel with TMJ: managing pressure changes, packing comfort items, and making your journey easier.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600",
      path: "/resources/guides/flying"
    }
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <Book className="w-12 h-12 text-bubblegum mx-auto mb-4" />
        <h2 className="text-3xl font-sigmar text-bubblegum mb-4">TMJ Life Guides</h2>
        <p className="text-lg text-charcoal">
          Practical guides to help you navigate daily life with TMJ
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {guides.map((guide, index) => (
          <Link
            key={index}
            to={guide.path}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group"
          >
            <img
              src={guide.image}
              alt={guide.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-charcoal mb-3">{guide.title}</h3>
              <p className="text-gray-600 mb-4">{guide.description}</p>
              <span className="text-bubblegum font-semibold group-hover:translate-x-2 inline-flex items-center transition-transform">
                Read Guide <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default GuidesList;