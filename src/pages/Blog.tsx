import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import Newsletter from '../components/Newsletter';

const Blog = () => {
  const articles = [
    {
      title: "Understanding TMJ: More Than Just Jaw Pain",
      excerpt: "Discover the complex nature of TMJ disorders and how they affect multiple aspects of daily life...",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
      category: "Education"
    },
    {
      title: "The Gender Bias in TMJ Treatment",
      excerpt: "Exploring why women are disproportionately affected by TMJ and the implications for healthcare...",
      author: "Jenny Feldman",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
      category: "Research"
    },
    {
      title: "Living with TMJ: A Patient's Perspective",
      excerpt: "Personal stories and coping strategies from members of the TMJ community...",
      author: "Maria Rodriguez",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600",
      category: "Patient Stories"
    },
    {
      title: "Latest Advances in TMJ Treatment",
      excerpt: "New research and treatment options bringing hope to TMJ patients...",
      author: "Dr. Michael Chen",
      date: "February 28, 2024",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600",
      category: "Treatment"
    },
    {
      title: "Nutrition and TMJ: What to Eat",
      excerpt: "Dietary recommendations and meal planning strategies for TMJ patients...",
      author: "Lisa Thompson, RD",
      date: "February 20, 2024",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600",
      category: "Lifestyle"
    },
    {
      title: "Advocating for Better TMJ Care",
      excerpt: "How to navigate the healthcare system and advocate for appropriate treatment...",
      author: "Jenny Feldman",
      date: "February 15, 2024",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
      category: "Advocacy"
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        title="OMJ Blog"
        subtitle="Insights, stories, and updates from the TMJ community"
        backgroundImage="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=1920"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-bubblegum font-semibold">
                    {article.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {article.date}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-1" />
                    {article.author}
                  </div>
                  <button className="text-bubblegum font-semibold hover:text-opacity-80 transition-colors flex items-center">
                    Read More <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Newsletter />
    </div>
  );
};

export default Blog;