import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Volume2, Heart, Stethoscope, HandHeart, Handshake } from 'lucide-react';
import PageHero from '../components/PageHero';
import Initiatives from '../components/Initiatives';
import Partners from '../components/Partners';
import LivedExperience from '../components/LivedExperience';

const AboutOMJ = () => {
  const initiatives = [
    {
      icon: <Volume2 className="w-12 h-12 text-bubblegum" />,
      title: "Public Awareness Campaigns",
      description: "We're making TMJ Awareness Month (November) and beyond impossible to ignore with high-profile social media challenges, influencer collabs, and partnerships with consumer brands that help us reach way beyond the usual crowd.",
      items: [
        "#TMJBlows Social Media Fundraiser – Get involved, blow bubbles, raise money, and spread awareness (because TMJ literally blows).",
        "Educational Webinars & Q&As – Real talk from experts and lived-experience warriors.",
        "Influencer & Celebrity Collabs – Teaming up with public figures to break the stigma and get the word out."
      ]
    },
    {
      icon: <Heart className="w-12 h-12 text-bubblegum" />,
      title: "End the Stigma",
      description: "Shining a light through real stories—our video testimonials reveal the impact of stigma and gender bias on TMJ patients. Through storytelling and infotainment, we're dismantling stereotypes and showing the world the truth about living with TMJ.",
      linkText: "Watch Stories",
      linkTo: "/resources"
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-bubblegum" />,
      title: "Make Care Accessible",
      description: "We get it—TMJ treatment is complicated. Our resource guide breaks it down in plain language to help patients and caregivers understand their options and navigate the journey to better health. Because everyone deserves access to care that works.",
      linkText: "Access Resources",
      linkTo: "/resources"
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
      linkTo: "/resources"
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-bubblegum" />,
      title: "Make Care Accessible",
      description: "We get it—TMJ treatment is complicated. Our resource guide breaks it down in plain language to help patients and caregivers understand their options and navigate the journey to better health. Because everyone deserves access to care that works.",
      linkText: "Access Resources",
      linkTo: "/resources"
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
                
                {initiative.items && (
                  <ul className="space-y-4">
                    {initiative.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-bubblegum rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-charcoal">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
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