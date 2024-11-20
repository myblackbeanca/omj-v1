import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  children?: React.ReactNode;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, backgroundImage, children }) => {
  return (
    <div className="relative min-h-[50vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-sigmar text-white mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-6">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageHero;