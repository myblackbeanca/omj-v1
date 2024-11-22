import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import Newsletter from '../components/Newsletter';

const Blog = () => {
  const articles = [
    {
      title: "Navigating Antibiotics & TMJ: What You Need to Know",
      excerpt: "Understanding the complex relationship between antibiotic usage, surgeries, and TMJ disorders...",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      image: "https://raw.githubusercontent.com/myblackbeanca/tmjimages/refs/heads/main/omj5.png",
      category: "Education",
      link: "https://www.pharmacytimes.com/view/navigating-c-diff-during-the-covid-19-pandemic-the-impact-of-antibiotic-usage-and-surgeries"
    },
    {
      title: "Living with TMJ: A Patient's Perspective",
      excerpt: "Personal stories and coping strategies from members of the TMJ community...",
      author: "Jenny Feldman",
      date: "March 10, 2024",
      image: "https://raw.githubusercontent.com/myblackbeanca/tmjimages/refs/heads/main/omj4.png",
      category: "Patient Stories",
      link: "https://www.linkedin.com/posts/medscape_meet-jenny-ginsburg-feldman-who-discovered-activity-7135251382067961856-32Oe/?utm_medium=ios_app&utm_source=social_share_video_v2&utm_campaign=share_via"
    },
    {
      title: "TMJ & Psoriatic Arthritis: Understanding the Connection",
      excerpt: "Exploring the relationship between TMJ and autoimmune conditions...",
      author: "Maria Rodriguez",
      date: "March 5, 2024",
      image: "https://raw.githubusercontent.com/myblackbeanca/tmjimages/refs/heads/main/omj8.png",
      category: "Research",
      link: "https://resources.healthgrades.com/video/psoriatic-arthritis-video-center/a-day-in-my-life-psoriatic-arthritis?vid=a-day-in-my-life-psoriatic-arthritis"
    },
    {
      title: "Investigation: TMJ, Chronic Pain & Metal Jaws",
      excerpt: "An in-depth look at TMJ treatments and their long-term impacts...",
      author: "Dr. Michael Chen",
      date: "February 28, 2024",
      image: "https://raw.githubusercontent.com/myblackbeanca/tmjimages/refs/heads/main/omj11.png",
      category: "Investigation",
      link: "https://kffhealthnews.org/news/article/investigation-tmj-chronic-pain-metal-jaws-futile-treatments/amp/"
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        title="OMJ Blog"
        subtitle="Insights, stories, and updates from the TMJ community"
        backgroundImage="https://raw.githubusercontent.com/myblackbeanca/tmjimages/refs/heads/main/omjbanner.png"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <a 
              key={index} 
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
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
                    <Heart className="w-4 h-4 mr-1" />
                    {article.author}
                  </div>
                  <span className="text-bubblegum font-semibold hover:text-opacity-80 transition-colors flex items-center">
                    Read More <ArrowRight className="ml-1 w-4 h-4" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <Newsletter />
    </div>
  );
};

export default Blog;