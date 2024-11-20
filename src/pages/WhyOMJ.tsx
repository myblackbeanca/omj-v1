import React from 'react';
import { DollarSign, Users, Megaphone, HandHeart, Share2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const WhyOMJ = () => {
  const reasons = [
    {
      title: "Unmet Market Demand",
      description: "TMJ is on the rise, but it's still flying under the radar in the healthcare world. This is a huge opportunity to step up and lead the way in an untapped space—through awareness, education, and better treatment solutions for millions of people who need it.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Innovative Collaborations",
      description: "We're teaming up with brands, influencers, and public figures to create strategic campaigns that bring TMJ into the public conversation. This isn't just about awareness—it's about impact. Our partners get to align with a cause that resonates emotionally and stands out from the crowd.",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=600"
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
      description: "Fuel the movement with donations, sponsorships, or grants. Every dollar helps us expand our programs and keep fighting for better care.",
      action: "👉 Donate now at www.ohmyjaw.org/donate and be part of the change!"
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

  return (
    <div className="min-h-screen">
      <PageHero
        title="Why Oh My Jaw?"
        subtitle="Join us in making a difference"
        backgroundImage="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=1920"
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
                {method.action && (
                  <p className="text-bubblegum font-semibold">{method.action}</p>
                )}
              </div>
            ))}
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