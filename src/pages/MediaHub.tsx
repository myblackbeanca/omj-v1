import React from 'react';
import { Video, FileText, Image as ImageIcon } from 'lucide-react';
import PageHero from '../components/PageHero';

const MediaHub = () => {
  const resources = {
    videos: [
      {
        title: "Understanding TMJ",
        description: "A comprehensive overview of TMJ disorders and their impact.",
        thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400"
      },
      {
        title: "Patient Stories",
        description: "Real experiences from our community members.",
        thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
      }
    ],
    resources: [
      {
        title: "TMJ Care Guide",
        description: "Essential information for managing TMJ disorders.",
        type: "PDF"
      },
      {
        title: "Treatment Options",
        description: "A comprehensive guide to available treatments.",
        type: "PDF"
      }
    ],
    infographics: [
      {
        title: "TMJ Statistics",
        description: "Key numbers and facts about TMJ disorders.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400"
      },
      {
        title: "Gender Gap in TMJ",
        description: "Understanding the disparity in TMJ diagnosis and treatment.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <PageHero
        title="Media Hub"
        subtitle="Videos, resources, and infographics about TMJ"
        backgroundImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1920"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Videos Section */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <Video className="w-8 h-8 text-bubblegum mr-4" />
            <h2 className="text-3xl font-sigmar text-charcoal">Videos</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {resources.videos.map((video, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-2">{video.title}</h3>
                  <p className="text-gray-600">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <FileText className="w-8 h-8 text-bubblegum mr-4" />
            <h2 className="text-3xl font-sigmar text-charcoal">Resources</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {resources.resources.map((resource, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold text-charcoal mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">
                  {resource.type}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Infographics Section */}
        <section>
          <div className="flex items-center mb-8">
            <ImageIcon className="w-8 h-8 text-bubblegum mr-4" />
            <h2 className="text-3xl font-sigmar text-charcoal">Infographics</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {resources.infographics.map((infographic, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <img
                  src={infographic.image}
                  alt={infographic.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-2">{infographic.title}</h3>
                  <p className="text-gray-600">{infographic.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MediaHub;