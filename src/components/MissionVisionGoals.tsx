import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MissionVisionGoals = () => {
  const cards = [
    {
      title: "Our mission",
      description: "To improve the lives of those affected by TMJ disorders through awareness, education, and advocacy.",
      link: "/mission-and-goals"
    },
    {
      title: "Our vision",
      description: "A world where TMJ disorders are widely understood, properly treated, and effectively managed.",
      link: "/about-omj"
    },
    {
      title: "Our goals",
      description: "To create a supportive community, advance research, and ensure accessible care for all TMJ patients.",
      link: "/mission-and-goals"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xl text-charcoal">
            At Oh My Jaw, we're here to change the game for everyone living with TMJ.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold text-bubblegum mb-4">{card.title}</h3>
              <p className="text-charcoal mb-6">{card.description}</p>
              <Link 
                to={card.link}
                className="text-bubblegum font-semibold flex items-center hover:text-opacity-80 transition-colors"
              >
                Learn more <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionGoals;