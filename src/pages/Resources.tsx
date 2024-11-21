import React from 'react';
import { Link } from 'react-router-dom';
import { Video, FileText, Image as ImageIcon, ArrowRight, Book } from 'lucide-react';
import PageHero from '../components/PageHero';

const Resources = () => {
  const guides = [
    {
      title: "TMJ Guide to Eating Out",
      description: "Navigate restaurants and social dining with TMJ-friendly tips. Learn what to order, how to modify dishes, and enjoy dining out without jaw pain.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600",
      path: "/resources/guides/eating-out"
    },
    {
      title: "TMJ Guide to Dating",
      description: "Navigate dating and relationships with TMJ: from communication tips to planning jaw-friendly dates.",
      image: "https://images.unsplash.com/photo-1511306404404-ad607bd7c601?auto=format&fit=crop&q=80&w=600",
      path: "/resources/guides/dating"
    },
    {
      title: "TMJ Guide to Parenting",
      description: "Essential strategies for managing TMJ while raising children, from pregnancy to daily parenting challenges.",
      image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&q=80&w=600",
      path: "/resources/guides/parenting"
    },
    {
      title: "TMJ Guide to Flying",
      description: "Essential tips for air travel with TMJ: managing pressure changes, packing comfort items, and making your journey easier.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600",
      path: "/resources/guides/flying"
    }
  ];

  const infographics = [
    {
      title: "Understanding TMJ Disorders",
      description: "A comprehensive guide to TMJ symptoms, causes, and treatments.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "TMJ Treatment Options",
      description: "Explore various treatment approaches for TMJ disorders.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        title="Media & Resources"
        subtitle="Videos, guides, and infographics about TMJ"
        backgroundImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1920"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* TMJ Videos Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Video className="w-12 h-12 text-bubblegum mx-auto mb-4" />
            <h2 className="text-3xl font-sigmar text-bubblegum mb-4">TMJ Videos</h2>
            <p className="text-lg text-charcoal">
              Watch our collection of informative TMJ-related videos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="aspect-video">
                <iframe
                  className="w-full h-full rounded-xl shadow-lg"
                  src={index % 2 === 0 ? 
                    "https://www.youtube.com/embed/QLTvPfsmq_M" : 
                    "https://www.youtube.com/embed/pxkgSoIopQY"
                  }
                  title={`TMJ Video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </section>

        {/* TMJ Guides Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Book className="w-12 h-12 text-bubblegum mx-auto mb-4" />
            <h2 className="text-3xl font-sigmar text-bubblegum mb-4">TMJ Life Guides</h2>
            <p className="text-lg text-charcoal mb-8">
              Practical guides to help you navigate daily life with TMJ. Our comprehensive guides 
              cover everything from dining out to traveling, making your TMJ journey a little easier.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {guides.map((guide, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-charcoal mb-3">{guide.title}</h3>
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  <Link 
                    to={guide.path}
                    className="inline-flex items-center text-bubblegum font-semibold hover:text-opacity-80 transition-colors"
                  >
                    Read Guide <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Infographics Section */}
        <section>
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
                  <button className="flex items-center text-bubblegum font-semibold hover:text-opacity-80 transition-colors">
                    <FileText className="w-5 h-5 mr-2" /> Download Infographic
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resources;