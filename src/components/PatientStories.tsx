import React from 'react';
import { Link } from 'react-router-dom';

const PatientStories = () => {
  const stories = [
    {
      image: "https://raw.githubusercontent.com/myblackbeanca/tmjimages/refs/heads/main/omj11.png",
      alt: "TMJ Patient Story 1"
    },
    {
      image: "https://raw.githubusercontent.com/myblackbeanca/tmjimages/refs/heads/main/omj8.png",
      alt: "TMJ Patient Story 2"
    },
    {
      image: "https://raw.githubusercontent.com/myblackbeanca/tmjimages/refs/heads/main/omj12.png",
      alt: "TMJ Patient Story 3"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-sigmar text-center text-charcoal mb-12">
          patient stories
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Link 
              key={index}
              to="/about-tmj"
              className="block transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img
                  src={story.image}
                  alt={story.alt}
                  className="w-full h-64 object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientStories;