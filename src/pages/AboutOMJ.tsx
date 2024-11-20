import React from 'react';
import { Link } from 'react-router-dom';
import { Megaphone, Users, BookOpen, HeartHandshake, Handshake, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import Initiatives from '../components/Initiatives';
import Partners from '../components/Partners';
import LivedExperience from '../components/LivedExperience';

const AboutOMJ = () => {
  const initiatives = [
    {
      icon: <Megaphone className="w-12 h-12 text-bubblegum" />,
      title: "Public Awareness Campaigns",
      description: "We're making TMJ Awareness Month (November) and beyond impossible to ignore with high-profile social media challenges, influencer collabs, and partnerships with consumer brands that help us reach way beyond the usual crowd.",
      items: [
        "#TMJBlows Social Media Fundraiser – Get involved, blow bubbles, raise money, and spread awareness (because TMJ literally blows).",
        "Educational Webinars & Q&As – Real talk from experts and lived-experience warriors.",
        "Influencer & Celebrity Collabs – Teaming up with public figures to break the stigma and get the word out."
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-bubblegum" />,
      title: "Patient Support & Resource Hub",
      description: "We're building a one-stop online platform for TMJ patients and their families—offering the guidance, resources, and community connections you need to take control of your care.",
      items: [
        "Insights from Lived Experience Experts – Real stories, real advice, real solutions from people who've been through it.",
        "Support Groups & Digital Medical Binders – Track your progress and connect with others who get it.",
        "Advocacy Services – Help navigating insurance claims and accessing care.",
        "Local Support Groups – Meet-ups IRL or online to connect with your TMJ crew."
      ]
    },
    {
      icon: <BookOpen className="w-12 h-12 text-bubblegum" />,
      title: "Research Advocacy",
      description: "We're working with researchers, healthcare pros, and policymakers to fight for more funding and better care. Our focus? Closing the gender gap in TMJ research and improving outcomes for every patient.",
      items: [
        "Workshops & Conferences for Providers – Educating the experts and promoting better TMJ care practices.",
        "Educational Materials Development – Making sure providers and patients are equipped with the latest research and knowledge."
      ]
    },
    {
      icon: <HeartHandshake className="w-12 h-12 text-bubblegum" />,
      title: "Community Engagement",
      description: "We're building a supportive network where TMJ patients, healthcare providers, and advocates come together to share best practices and grow stronger—because no one should have to do this alone.",
      items: [
        "Fundraisers & Health Festivals – Events that connect, uplift, and educate.",
        'Annual Gala: "Giving TMJ a Makeover" – Where advocacy meets glam for a night of inspiration and impact.',
        "Women's Music & Health Festival – Celebrate, learn, and vibe with others while raising awareness for TMJ."
      ]
    },
    {
      icon: <Handshake className="w-12 h-12 text-bubblegum" />,
      title: "Strategic Partnerships",
      description: "We're teaming up with companies, influencers, and healthcare professionals to increase TMJ visibility and support innovative solutions for patient care. Our partners help us make noise, fundraise, and find creative ways to improve the lives of TMJ sufferers.",
      items: [
        "#TMJBlows Fundraising Campaign – Blowing bubbles and breaking barriers for TMJ awareness.",
        "Creative Collabs – From musicians to wellness brands, we're joining forces to give TMJ the attention it deserves."
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        title="About OMJ"
        subtitle="Understanding our mission and impact"
        backgroundImage="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=1920"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Initiatives />
        <Partners />
        <LivedExperience />

        <div className="mt-20">
          {initiatives.map((initiative, index) => (
            <section key={index} className="mb-20">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all">
                <div className="flex items-center mb-6">
                  {initiative.icon}
                  <h2 className="text-3xl font-sigmar text-bubblegum ml-4">{initiative.title}</h2>
                </div>
                
                <p className="text-lg text-charcoal mb-6">
                  {initiative.description}
                </p>
                
                <ul className="space-y-4">
                  {initiative.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-bubblegum rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-charcoal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-charcoal mb-8">
            At Oh My Jaw, we're not just here to raise awareness—we're here to spark real change. Join us in making sure TMJ patients everywhere get the care and support they deserve.
          </p>
          <Link
            to="/support"
            className="inline-flex items-center px-8 py-3 bg-bubblegum text-white rounded-full font-semibold hover:bg-opacity-90 transition-colors"
          >
            Support Our Mission <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutOMJ;