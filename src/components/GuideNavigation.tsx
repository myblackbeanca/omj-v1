import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Guide {
  title: string;
  path: string;
  image: string;
  description: string;
}

interface GuideNavigationProps {
  currentPath: string;
}

const GuideNavigation: React.FC<GuideNavigationProps> = ({ currentPath }) => {
  const guides: Guide[] = [
    {
      title: "TMJ Guide to Eating Out",
      path: "/resources/guides/eating-out",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600",
      description: "Navigate restaurants and social dining with TMJ-friendly tips."
    },
    {
      title: "TMJ Guide to Flying",
      path: "/resources/guides/flying",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600",
      description: "Essential tips for air travel with TMJ."
    },
    {
      title: "TMJ Guide to Dating",
      path: "/resources/guides/dating",
      image: "https://images.unsplash.com/photo-1511306404404-ad607bd7c601?auto=format&fit=crop&q=80&w=600",
      description: "Navigate dating and relationships with TMJ."
    },
    {
      title: "TMJ Guide to Parenting",
      path: "/resources/guides/parenting",
      image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&q=80&w=600",
      description: "Managing parenting responsibilities while dealing with TMJ."
    }
  ];

  const otherGuides = guides.filter(guide => guide.path !== currentPath);

  return (
    <section className="mt-20 bg-gray-50 rounded-xl p-8">
      <h2 className="text-2xl font-sigmar text-bubblegum mb-8 text-center">
        Explore More TMJ Guides
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {otherGuides.map((guide, index) => (
          <Link
            key={index}
            to={guide.path}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 flex flex-col"
          >
            <img
              src={guide.image}
              alt={guide.title}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-charcoal mb-2">{guide.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
            <span className="text-bubblegum font-semibold mt-auto inline-flex items-center">
              Read Guide <ArrowRight className="ml-2 w-4 h-4" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default GuideNavigation;