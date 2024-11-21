import React from 'react';
import PageHero from '../../../components/PageHero';
import { Heart } from 'lucide-react';
import GuideNavigation from '../../../components/GuideNavigation';

const Dating = () => {
  const sections = [
    {
      title: "When to Bring It Up",
      content: [
        "Keep It Chill, But Honest – No one wants a first date \"pain-splaining\" session, but if the time comes when you're struggling to chew or feeling sore, just keep it real: \"So, fun fact, I've got TMJ, which means my jaw is a little… extra. It can be painful, but I promise I'm still fun!\"",
        "Let It Flow Naturally – If it comes up over a meal, while laughing, or during those random get-to-know-you convos, feel free to mention it without making it a thing. Your TMJ doesn't define you, but it's okay to own it."
      ]
    },
    {
      title: "Dating with Braces",
      content: [
        "Confidence is Key – Dating with braces (for TMJ or otherwise) can be awkward, but think of it as character development. Just remember: you're still you—braces are a temporary accessory.",
        "Talk About It Casually – If your date asks about your braces, let them know it's part of your jaw journey, and it's not just about getting a perfect smile. It's all about making sure you can function better long-term.",
        "Be Playful – \"Kissing with braces? A bit of a learning curve, but no one's gotten stuck yet!\" Make it lighthearted, and don't let insecurity take the lead."
      ]
    },
    {
      title: "Affection Without Hurting Yourself",
      content: [
        "Soft Touches – Hand-holding, shoulder snuggles, or just leaning in for a laugh without risking your jaw—there are so many ways to stay connected that don't involve your face taking a beating.",
        "Kisses with Care – If kissing causes pain, it's okay to say, \"I'd love to kiss you, but today my jaw is throwing a tantrum.\" Most people will appreciate the honesty and creativity in finding alternatives.",
        "Listen to Your Limits – Affection is about connection, not pain. If a hug or touch makes things worse, communicate that. \"I love this, but my jaw needs a timeout\" works wonders."
      ]
    },
    {
      title: "How to Explain Your Limits",
      content: [
        "Be Straightforward – \"Just a heads up, sometimes I have to pace myself with certain things because of my TMJ.\" You don't have to go into medical details unless you want to.",
        "Set Boundaries Without Guilt – If an activity might hurt (chewing certain foods, physical games, etc.), it's totally okay to opt out or suggest an alternative. \"How about we find something jaw-friendly to do? Bumper cars aren't really the best choice for me!\"",
        "Own Your Experience – Let your date know you're the expert on your own body. If they're worth your time, they'll respect what you need."
      ]
    },
    {
      title: "Navigating Dates",
      content: [
        "Pick Jaw-Friendly Spots – Soft food restaurants (soups, smoothies, pasta) are a solid win. Bonus points for dates that don't revolve around eating—think museums, movie nights, or scenic walks.",
        "Explain Eating Limits with Humor – \"You'll win extra points if you can find a place that serves something I don't have to chew for hours.\" It makes you relatable, and who doesn't love a little playful challenge?"
      ]
    },
    {
      title: "Addressing the Elephant in the Room",
      content: [
        "Keep It Positive – \"My jaw might act up, but I promise I'm not high-maintenance. I'm all about finding creative ways to make things work.\"",
        "Reassure Them – TMJ can be hard for others to understand, so if they're worried or curious, let them know you're open to questions, but it's not a dealbreaker. If anything, it's a reminder of your strength and resilience."
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        title="TMJ Guide to Dating"
        subtitle="Navigate relationships with confidence"
        backgroundImage="https://images.unsplash.com/photo-1511306404404-ad607bd7c601?auto=format&fit=crop&q=80&w=1920"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Heart className="w-12 h-12 text-bubblegum mx-auto mb-4" />
          <p className="text-lg text-charcoal mb-8">
            So you've got TMJ, but that doesn't mean your dating life has to hit the brakes. 
            Navigating the dating scene with jaw pain, braces, or physical limits can be awkward—but hey, 
            if anyone can keep it real and roll with it, it's you.
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-sigmar text-bubblegum mb-4">{section.title}</h2>
              <div className="space-y-4">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-charcoal">{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-charcoal">
            Dating with TMJ is all about balancing honesty with playfulness, knowing your limits, 
            and remembering that you are more than your jaw condition. When you find the right person, 
            they'll appreciate you and work with you, jaw quirks and all. Happy dating! ❤️
          </p>
        </div>

        <GuideNavigation currentPath="/resources/guides/dating" />
      </div>
    </div>
  );
};

export default Dating;