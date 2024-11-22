import React, { useState } from 'react';
import { Video, Image as ImageIcon, Download } from 'lucide-react';
import PageHero from '../components/PageHero';
import SubscriptionForm from '../components/SubscriptionForm';
import GuidesList from '../components/GuidesList';

const Resources = () => {
  const [showSubscriptionForm, setShowSubscriptionForm] = useState(false);
  const [selectedInfographic, setSelectedInfographic] = useState<string | null>(null);

  const infographics = [
    {
      title: "Valuable Lessons for TMJ Surgery",
      description: "Essential insights and tips for those considering or recovering from TMJ surgery.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
      url: "https://drive.google.com/file/d/1bUfrzezkI1G_E5XEtZLFbuX73wuElDtR/view?usp=drive_link"
    },
    {
      title: "Avoiding the Dentist because of TMJ/TMD pain",
      description: "Understanding and managing dental anxiety related to TMJ/TMD pain.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600",
      url: "https://drive.google.com/file/d/1jEb15OXtyZbk5XJeqFxaXCuNKWmXAbR3/view?usp=drive_link"
    }
  ];

  const handleInfographicClick = (url: string) => {
    setSelectedInfographic(url);
    setShowSubscriptionForm(true);
  };

  const handleSubscriptionSubmit = (data: { email: string; phone: string }) => {
    console.log('Subscription data:', data);
    if (selectedInfographic) {
      window.open(selectedInfographic, '_blank');
    }
    setShowSubscriptionForm(false);
  };

  return (
    <div className="min-h-screen">
      <PageHero
        title="Media & Infographics"
        subtitle="Educational resources about TMJ"
        backgroundImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1920"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <GuidesList />

        {/* Educational Infographics Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <ImageIcon className="w-12 h-12 text-bubblegum mx-auto mb-4" />
            <h2 className="text-3xl font-sigmar text-bubblegum mb-4">Educational Infographics</h2>
            <p className="text-lg text-charcoal">
              Download and share these informative visual guides
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {infographics.map((infographic, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <img
                  src={infographic.image}
                  alt={infographic.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-3">{infographic.title}</h3>
                  <p className="text-gray-600 mb-4">{infographic.description}</p>
                  <button 
                    onClick={() => handleInfographicClick(infographic.url)}
                    className="flex items-center text-bubblegum font-semibold hover:text-opacity-80 transition-colors"
                  >
                    <Download className="w-5 h-5 mr-2" /> Access Infographic
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <SubscriptionForm
          isOpen={showSubscriptionForm}
          onClose={() => setShowSubscriptionForm(false)}
          onSubmit={handleSubscriptionSubmit}
          guidePath={selectedInfographic || ''}
        />
      </div>
    </div>
  );
};

export default Resources;