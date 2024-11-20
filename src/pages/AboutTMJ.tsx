import React from 'react';
import { Brain, Umbrella, Book } from 'lucide-react';
import PageHero from '../components/PageHero';

const AboutTMJ = () => {
  const comorbidities = [
    'Headaches & migraines',
    'Fibromyalgia (aka full-body pain and fatigue)',
    'Back pain (because why not?)',
    'Irritable Bowel Syndrome (IBS) (your body\'s unwanted party guest)'
  ];

  const relatedConditions = [
    'Migraines & Chronic Headaches',
    'Neck, Shoulder & Back Pain',
    'Earaches, Tinnitus, and Vertigo',
    'Fibromyalgia & Chronic Fatigue Syndrome',
    'Sleep Disorders & Insomnia',
    'Sinus Issues & Facial Pain',
    'Anxiety & Depression'
  ];

  const glossaryTerms = [
    {
      term: 'Condyle',
      definition: 'The condyle is the rounded end of your lower jawbone (mandible) that fits into the socket at the base of your skull. Think of it as the "ball" in a ball-and-socket joint. It moves every time you talk, chew, or yawn.'
    },
    {
      term: 'Fossa',
      definition: 'The fossa is the little socket in your skull where the condyle sits. It\'s like the "home base" for your jaw when it\'s at rest or in motion. If things aren\'t lined up properly, your jaw might pop, crack, or cause pain.'
    },
    {
      term: 'Crepitus',
      definition: 'Crepitus is a fancy word for the clicking, popping, or crackling noises your jaw makes when you move it. Sometimes it\'s harmless—other times, it\'s your joint telling you, "Hey, something\'s off!"'
    },
    {
      term: 'Mandible',
      definition: 'Your mandible is just a fancy word for your lower jaw. It\'s the bone that moves when you talk or chew—and it\'s one of the main players in TMJ disorders.'
    },
    {
      term: 'Maxilla',
      definition: 'The maxilla is the upper jaw that stays put while the mandible moves. It also helps shape your face, support your teeth, and forms part of your nose and eye sockets.'
    },
    {
      term: 'Synovial',
      definition: 'The synovial fluid inside your jaw joint works like lubricating oil for your joint, helping it move smoothly. If this fluid is off-balance, it can lead to inflammation, pain, and stiffness.'
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        title="About TMJ"
        subtitle="Understanding TMJ disorders and their impact"
        backgroundImage="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=1920"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <Brain className="w-8 h-8 text-bubblegum mr-4" />
            <h2 className="text-3xl font-sigmar text-charcoal">What's Up with TMDs?</h2>
          </div>
          
          <div className="prose prose-lg">
            <div className="mb-8">
              <img
                src="https://raw.githubusercontent.com/myblackbeanca/tmjimages/refs/heads/main/jennmin.png"
                alt="TMJ Impact - Photo by Jenn Hoffman"
                className="w-full rounded-xl shadow-lg"
              />
              <p className="text-sm text-gray-500 text-center mt-2">Photo credit: Jenn Hoffman - TMJ warrior, artist, and makeup magician</p>
            </div>

            <p>TMDs don't come alone—they love to bring friends like:</p>
            <ul className="list-none space-y-2">
              {comorbidities.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-bubblegum rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
            
            <p>Some people deal with temporary jaw issues, while others are stuck in it for the long haul. It can start with an innocent little jaw click—but sometimes it spirals into severe, life-altering pain across the face, jaw, and neck. Everyday things most people don't even think about—like eating, talking, smiling, laughing, or kissing—can become totally unbearable.</p>
            
            <p>And it's not just about the physical pain. TMDs can wreck your social life, relationships, and mental health, leaving you feeling isolated and misunderstood. The worst part? Many people with TMDs are met with eye rolls and invalidation—whether from family, friends, or healthcare providers. It's like being stuck in a loop of "But You Don't Look Sick" vibes, which just makes the whole thing worse.</p>
            
            <p>When TMDs are dismissed or misunderstood, it only leads to more suffering for patients—and it hits everyone around them, too. That's why we need to take this seriously. Ignoring it isn't just inconvenient—it's harmful.</p>
          </div>
        </section>

        {/* Rest of the sections remain unchanged */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <Umbrella className="w-8 h-8 text-bubblegum mr-4" />
            <h2 className="text-3xl font-sigmar text-charcoal">When It Rains, It Pours: TMJ & 30+ Comorbidities</h2>
          </div>
          
          <div className="prose prose-lg">
            <p>TMJ isn't just jaw pain—it's an umbrella term covering 30+ related conditions that can hit you all at once. Think migraines, neck pain, ear issues, brain fog, and more. It's like when one thing goes wrong, everything else piles on.</p>
            
            <p>Imagine the Morton Salt Girl, standing there with her cute umbrella, except instead of rain, she's getting pelted with conditions like:</p>
            
            <ul className="list-none space-y-2">
              {relatedConditions.map((condition, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-bubblegum rounded-full mr-3"></span>
                  {condition}
                </li>
              ))}
            </ul>
            
            <p>It's a whole storm—and TMJ is right in the middle of it.</p>
            
            <p>But don't worry, you're not alone in this downpour. At Oh My Jaw, we're here to help you weather the storm with support, resources, and people who get it. 🌧☂️</p>
          </div>
        </section>

        <section>
          <div className="flex items-center mb-8">
            <Book className="w-8 h-8 text-bubblegum mr-4" />
            <h2 className="text-3xl font-sigmar text-charcoal">TMJ 101: Glossary of Terms</h2>
          </div>
          
          <div className="prose prose-lg">
            <p>We get it—TMJ terminology can sound like it's straight out of a medical textbook. Here's a plain language breakdown so you can actually understand the moving parts of your jaw.</p>
            
            <div className="space-y-8 mt-8">
              {glossaryTerms.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold text-bubblegum mb-2">{item.term}</h3>
                  <p className="text-charcoal">{item.definition}</p>
                </div>
              ))}
            </div>
            
            <p className="mt-8">Understanding these terms is just the start! Now you've got the basics down, and you're ready to dive deeper into how your jaw works—and what happens when it doesn't.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutTMJ;