import React from 'react';
import PageHero from '../../components/PageHero';
import { Video } from 'lucide-react';

const Videos = () => {
  return (
    <div className="min-h-screen">
      <PageHero
        title="TMJ Videos"
        subtitle="Educational videos and patient stories"
        backgroundImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1920"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Video className="w-12 h-12 text-bubblegum mx-auto mb-4" />
          <h2 className="text-3xl font-sigmar text-bubblegum mb-4">Featured Videos</h2>
          <p className="text-lg text-charcoal">
            Watch our collection of informative TMJ-related videos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="aspect-video">
            <iframe
              className="w-full h-full rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/VIDEO_ID_1"
              title="TMJ Video 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="aspect-video">
            <iframe
              className="w-full h-full rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/VIDEO_ID_2"
              title="TMJ Video 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="aspect-video">
            <iframe
              className="w-full h-full rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/VIDEO_ID_3"
              title="TMJ Video 3"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;