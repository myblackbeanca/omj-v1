import React, { useState, useEffect } from 'react';

const stories = [
  {
    name: "Sarah Mitchell",
    age: 34,
    location: "New York",
    quote: "Finding OMJ changed everything. Finally, someone understood what I was going through.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "David Chen",
    age: 28,
    location: "California",
    quote: "The community here helped me realize I wasn't alone. Now I have hope for better treatment.",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Emma Rodriguez",
    age: 42,
    location: "Texas",
    quote: "After years of being dismissed, OMJ gave me the resources to advocate for myself.",
    image: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&q=80&w=400"
  }
];

const PatientStories = () => {
  const [currentStory, setCurrentStory] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % stories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-sigmar text-center text-charcoal mb-12">
          patient stories
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 ${
                currentStory === index ? 'ring-2 ring-bubblegum' : ''
              }`}
            >
              <img
                src={story.image}
                alt={story.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-bubblegum font-semibold mb-2">
                  {story.name}, {story.age} • {story.location}
                </div>
                <p className="text-charcoal text-lg italic">"{story.quote}"</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          {stories.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full mx-1 transition-colors ${
                currentStory === index ? 'bg-bubblegum' : 'bg-chalk'
              }`}
              onClick={() => setCurrentStory(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientStories;