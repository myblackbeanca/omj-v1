import React from 'react';
import PageHero from '../components/PageHero';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Volume2, Heart, Stethoscope } from 'lucide-react';

const MissionAndGoals = () => {
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

  return (
    <div className="min-h-screen">
      <PageHero
        title="Our Mission & Goals"
        subtitle="Together, We Can Change the Game"
        backgroundImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1920"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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

        <section className="mt-20">
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
      </div>
    </div>
  );
};

export default MissionAndGoals;