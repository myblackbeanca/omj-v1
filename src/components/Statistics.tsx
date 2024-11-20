import React from 'react';

const Statistics = () => {
  const stats = [
    {
      highlight: "9",
      title: "women",
      description: "For every man with the disorder, nine women suffer from TMJ."
    },
    {
      highlight: "800",
      title: "%",
      description: "The incidence of TMJ in women is a whopping 800 percent higher than men."
    },
    {
      highlight: "33",
      title: "million",
      description: "TMJ disorders afflict as many as 33 million Americans."
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-sigmar text-white mb-12 text-center">
          TMJ by the numbers
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <span className="text-7xl font-bold text-bubblegum">{stat.highlight}</span>
                <span className="text-3xl font-bold text-white ml-2">{stat.title}</span>
              </div>
              <p className="text-white text-lg">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;