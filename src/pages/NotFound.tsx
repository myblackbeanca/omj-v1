import React from 'react';
import { Link } from 'react-router-dom';
import { Info, Heart, Gift } from 'lucide-react';

const NotFound = () => {
  const cards = [
    {
      icon: <Info className="w-12 h-12 text-bubblegum" />,
      title: "About Us",
      description: "Learn about our mission and the people behind Oh My Jaw.",
      link: "/about-us"
    },
    {
      icon: <Heart className="w-12 h-12 text-bubblegum" />,
      title: "About TMJ",
      description: "Understand TMJ disorders and their impact on daily life.",
      link: "/about-tmj"
    },
    {
      icon: <Gift className="w-12 h-12 text-bubblegum" />,
      title: "Sponsor Us",
      description: "Support our mission and make a difference in TMJ care.",
      link: "/sponsor-us"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-12 text-center">
        <div>
          <img
            src="https://github.com/myblackbeanca/tmjimages/blob/main/logone.png?raw=true"
            alt="OH MY JAW"
            className="h-24 w-auto mx-auto mb-8"
          />
          <h1 className="text-4xl font-sigmar text-bubblegum mb-4">Oops! Page Not Found</h1>
          <p className="text-xl text-charcoal">
            The page you're looking for seems to have wandered off. While you're here, check out these helpful resources:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Link
              key={index}
              to={card.link}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all text-center group"
            >
              <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h2 className="text-2xl font-sigmar text-bubblegum mb-4">{card.title}</h2>
              <p className="text-charcoal">{card.description}</p>
            </Link>
          ))}
        </div>

        <div>
          <Link
            to="/"
            className="inline-block bg-bubblegum text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;