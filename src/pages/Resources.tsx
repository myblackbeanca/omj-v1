import React, { useState } from 'react';
import { Video, Image as ImageIcon, Download } from 'lucide-react';
import { supabase } from '../supabase/client'; // Adjust path as needed
import PageHero from '../components/PageHero';
import SubscriptionForm from '../components/SubscriptionForm';
import GuidesList from '../components/GuidesList';

const Resources = () => {
  const [showSubscriptionForm, setShowSubscriptionForm] = useState(false);
  const [selectedInfographic, setSelectedInfographic] = useState<string | null>(null);

  const videos = [
    {
      title: "TMJ Journey",
      description: "Understanding TMJ disorders and their impact on daily life.",
      embedId: "tzKA8HmEKno",
      platform: "youtube"
    },
    {
      title: "TMJ Patient Story",
      description: "Real experiences and insights from TMJ warriors.",
      embedId: "QLTvPfsmq_M",
      platform: "youtube"
    },
    {
      title: "Living with TMJ",
      description: "A personal journey through TMJ treatment and recovery.",
      embedId: "pxkgSoIopQY",
      platform: "youtube"
    },
    {
      title: "TMJ Awareness",
      description: "Raising awareness about TMJ disorders and their impact.",
      embedId: "1031615792",
      platform: "vimeo"
    }
  ];

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

  const handleSubscriptionSubmit = async (data: { email: string; phone: string }) => {
    try {
      // Insert subscription data into Supabase
      const { data: insertedData, error } = await supabase
        .from('guides_subscriptions')
        .insert({
          email: data.email,
          phone: data.phone || null,
          infographic_url: selectedInfographic
        });

      if (error) {
        console.error('Error inserting guides_subscriptions:', error);
        alert('Failed to submit subscription. Please try again.');
        return;
      }

      // Open the infographic in a new tab
      if (selectedInfographic) {
        window.open(selectedInfographic, '_blank');
      }

      // Reset form and show success message
      setShowSubscriptionForm(false);
    } catch (error) {
      console.error('Unexpected error:', error);
      alert('An unexpected error occurred. Please try again.');
    }
  };

  const getEmbedUrl = (video: { platform: string; embedId: string }) => {
    if (video.platform === 'youtube') {
      return `https://www.youtube.com/embed/${video.embedId}`;
    }
    return `https://player.vimeo.com/video/${video.embedId}?badge=0&autopause=0&player_id=0&app_id=58479`;
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

        {/* TMJ Videos Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <Video className="w-12 h-12 text-bubblegum mx-auto mb-4" />
            <h2 className="text-3xl font-sigmar text-bubblegum mb-4">TMJ Videos</h2>
            <p className="text-lg text-charcoal">
              Watch our collection of informative TMJ-related videos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <div className="aspect-video">
                  <iframe
                    src={getEmbedUrl(video)}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-3">{video.title}</h3>
                  <p className="text-gray-600">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

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