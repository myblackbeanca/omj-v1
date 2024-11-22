import React, { useState } from 'react';
import { DollarSign, Users, Megaphone, HandHeart, Share2, ArrowRight, Mail } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { supabase } from '../supabase/client';

const WhyOMJ = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const reasons = [
    {
      title: "Unmet Market Demand",
      description: "TMJ is on the rise, but it's still flying under the radar in the healthcare world. This is a huge opportunity to step up and lead the way in an untapped space—through awareness, education, and better treatment solutions for millions of people who need it.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Innovative Collaborations",
      description: "We're teaming up with brands, influencers, and public figures to create strategic campaigns that bring TMJ into the public conversation. This isn't just about awareness—it's about impact. Our partners get to align with a cause that resonates emotionally and stands out from the crowd.",
      image: "https://github.com/myblackbeanca/tmjimages/blob/main/omj9.png?raw=true"
    },
    {
      title: "Impact-Driven Change",
      description: "At Oh My Jaw, we're not here to play small. We're reshaping how TMJ is understood and treated, driving research, securing funding, and giving patients a platform to be heard. When you invest in us, you're joining a movement that's setting new standards in healthcare for millions of people. This is where real change happens—and you can be part of it.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600"
    }
  ];

  const helpMethods = [
    {
      icon: <DollarSign className="w-8 h-8 text-bubblegum" />,
      title: "Financial Investment",
      description: "Fuel the movement with donations, sponsorships, or grants. Every dollar helps us expand our programs and keep fighting for better care."
    },
    {
      icon: <Users className="w-8 h-8 text-bubblegum" />,
      title: "Strategic Partnerships",
      description: "Let's collaborate and bring TMJ to the forefront of public health conversations. Together, we'll reach new audiences and create meaningful change."
    },
    {
      icon: <Megaphone className="w-8 h-8 text-bubblegum" />,
      title: "Advocacy & Support",
      description: "Join us in pushing for research funding, better healthcare policies, and improved patient access. Every voice matters—let's make sure patients are heard loud and clear."
    },
    {
      icon: <HandHeart className="w-8 h-8 text-bubblegum" />,
      title: "Volunteer",
      description: "Ready to make a difference? Join our volunteer team and help us improve the lives of TMJ patients. Email us at volunteer@ohmyjaw.org to get involved!"
    },
    {
      icon: <Share2 className="w-8 h-8 text-bubblegum" />,
      title: "Spread the Word",
      description: "Follow us on social media and share our message with your network. Use the hashtag #TMJBlows to join the conversation and raise awareness. Together, we can make TMJ impossible to ignore."
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
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
        title="Why Oh My Jaw?"
        subtitle="Join us in making a difference"
        backgroundImage="https://raw.githubusercontent.com/myblackbeanca/tmjimages/refs/heads/main/OMJabout.jpg"
      >
        <Link
          to="/support"
          className="inline-block mt-6 bg-bubblegum text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
        >
          Donate Now <ArrowRight className="inline-block ml-2" size={20} />
        </Link>
      </PageHero>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-sigmar text-bubblegum mb-4">🚀 {reason.title}</h3>
                  <p className="text-charcoal">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-sigmar text-bubblegum mb-12 text-center">How You Can Help</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpMethods.map((method, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="mb-4">{method.icon}</div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 bg-gray-50 rounded-xl p-8">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="w-12 h-12 text-bubblegum mx-auto mb-4" />
            <h2 className="text-2xl font-sigmar text-bubblegum mb-4">
              Join Our Mission
            </h2>
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

        <section className="mt-16 text-center">
          <p className="text-xl text-charcoal">
            Every action counts—whether it's donating, volunteering, or simply sharing our story. Let's do this!
          </p>
        </section>
      </div>
    </div>
  );
};

export default WhyOMJ;