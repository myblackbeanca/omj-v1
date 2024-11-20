import React from 'react';

const Issues = () => {
  const issues = [
    {
      title: "Underfunded research",
      description: "TMJ impacts millions, but it doesn't get nearly the funding it deserves compared to other chronic conditions. The result? Limited progress and way too many unanswered questions."
    },
    {
      title: "gender disparities",
      description: "Women are hit the hardest by TMJ, yet research doesn't prioritize their needs or experiences. We're tired of healthcare ignoring gender-specific realities—this gap has to go."
    },
    {
      title: "stigma",
      description: 'How many times have patients heard, "It\'s all in your head"? Guess what…It\'s not. This outdated mindset delays care, invalidates pain, and leaves people without the treatment they need.'
    },
    {
      title: "limited resources",
      description: "Finding accurate info and specialized care shouldn't feel like solving a puzzle. But for too many TMJ sufferers, it's a struggle to access the right care, leading to confusion and frustration."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <img 
            src="https://raw.githubusercontent.com/myblackbeanca/tmjimages/refs/heads/main/morethanvogue.png"
            alt="More Issues Than Vogue"
            className="max-w-md mx-auto mb-8"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {issues.map((issue, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-[#FD75B4] mb-4">{issue.title}</h3>
              <div className="w-16 h-1 bg-[#FDE48C] rounded mb-4"></div>
              <p className="text-[#4A555D]">{issue.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Issues;