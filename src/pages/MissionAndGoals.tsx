import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { ArrowRight, Volume2, Heart, Stethoscope } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabase/client';

const MissionAndGoals = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const objectives = [
    {
      title: "Raising Awareness",
      content: "TMJ affects over 33 million people in the U.S., yet it's still misunderstood and underfunded. We're here to change that by raising public awareness about the impact TMJ has on everyday life."
    },
    {
      title: "Improving Care",
      content: "We push for early intervention, self-care practices, and conservative treatments that actually make a difference. Our goal is to bridge the medical-dental divide."
    },
    {
      title: "Closing the Gender Data Gap",
      content: "The research world has ignored women's health for too long, and TMJ care is no exception. We're advocating for gender-sensitive research to address the gaps and inequalities in treatment."
    },
    {
      title: "Reducing Stigma",
      content: 'There\'s this outdated idea that TMJ is "just in your head." Spoiler: It\'s not. TMJ takes a serious physical and emotional toll, and we\'re on a mission to end the stigma around it.'
    },
    {
      title: "Building a Coalition",
      content: "We're teaming up with multidisciplinary healthcare providers, businesses, and advocates to create a support network for patients."
    }
  ];

  const actionCards = [
    {
      icon: <Volume2 className="w-12 h-12 text-bubblegum" />,
      title: "Let's Make Some Noise!",
      description: "We're not just talking about TMJ—we're making sure everyone hears about it. Through campaigns, storytelling, and partnerships, we're spreading the word, breaking the silence, and changing the conversation around TMJ disorders.",
      linkText: "Join Our Movement",
      linkTo: "/support"
    },
    {
      icon: <Heart className="w-12 h-12 text-bubblegum" />,
      title: "End the Stigma",
      description: "Shining a light through real stories—our video testimonials reveal the impact of stigma and gender bias on TMJ patients. Through storytelling and infotainment, we're dismantling stereotypes and showing the world the truth about living with TMJ.",
      linkText: "Watch Stories",
      linkTo: "/media-hub"
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-bubblegum" />,
      title: "Make Care Accessible",
      description: "We get it—TMJ treatment is complicated. Our resource guide breaks it down in plain language to help patients and caregivers understand their options and navigate the journey to better health. Because everyone deserves access to care that works.",
      linkText: "Access Resources",
      linkTo: "/media-hub"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('mission_subscribers')
        .insert([
          {
            email,
            subscribed_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;
      navigate('/support');
    } catch (error) {
      console.error('Error subscribing:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <PageHero
        title="Our Mission & Goals"
        subtitle="Together, We Can Change the Game"
        backgroundImage="https://raw.githubusercontent.com/myblackbeanca/tmjimages/refs/heads/main/omjbanner3.png"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Images Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative group">
              <img
                src="https://github.com/myblackbeanca/tmjimages/blob/main/omj5.png?raw=true"
                alt="TMJ Support"
                className="w-full h-48 md:h-64 object-cover rounded-xl shadow-lg"
              />
              <Link
                to="/about-tmj"
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 inline-flex items-center px-4 py-2 bg-bubblegum text-white rounded-full text-sm font-semibold hover:bg-opacity-90 transition-colors opacity-0 group-hover:opacity-100"
              >
                Learn More <ArrowRight className="ml-1" size={16} />
              </Link>
            </div>

            <div className="relative group">
              <img
                src="https://github.com/myblackbeanca/tmjimages/blob/main/omj4.png?raw=true"
                alt="TMJ Community"
                className="w-full h-48 md:h-64 object-cover rounded-xl shadow-lg"
              />
              <Link
                to="/support"
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 inline-flex items-center px-4 py-2 bg-sunshine text-charcoal rounded-full text-sm font-semibold hover:bg-opacity-90 transition-colors opacity-0 group-hover:opacity-100"
              >
                Join Us <ArrowRight className="ml-1" size={16} />
              </Link>
            </div>

            <div className="relative group">
              <img
                src="https://github.com/myblackbeanca/tmjimages/blob/main/omj8.png?raw=true"
                alt="TMJ Resources"
                className="w-full h-48 md:h-64 object-cover rounded-xl shadow-lg"
              />
              <Link
                to="/resources"
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 inline-flex items-center px-4 py-2 bg-bubblegum text-white rounded-full text-sm font-semibold hover:bg-opacity-90 transition-colors opacity-0 group-hover:opacity-100"
              >
                Resources <ArrowRight className="ml-1" size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-center mb-12">
              At Oh My Jaw, we're committed to creating real change for TMJ patients. Here's what we're all about:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {objectives.map((objective, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-2xl font-sigmar text-bubblegum mb-4">{objective.title}</h3>
                  <p className="text-charcoal">{objective.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {actionCards.map((card, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all text-center">
                <div className="flex justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-sigmar text-bubblegum mb-4">{card.title}</h3>
                <p className="text-charcoal mb-6">{card.description}</p>
                <Link 
                  to={card.linkTo}
                  className="inline-flex items-center text-bubblegum font-bold hover:text-opacity-80 transition-colors"
                >
                  {card.linkText} <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 rounded-xl p-8 max-w-2xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-sigmar text-bubblegum mb-4">Join Our Mission</h2>
            <p className="text-charcoal mb-6">
              Subscribe to our newsletter and be part of the change. We'll redirect you to our support page where you can make an even bigger impact.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-bubblegum"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-bubblegum text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Subscribing...
                  </>
                ) : (
                  'Subscribe & Support'
                )}
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MissionAndGoals;