import React from 'react';
import PageHero from '../../../components/PageHero';
import { Plane } from 'lucide-react';
import GuideNavigation from '../../../components/GuideNavigation';

const Flying = () => {
  const sections = [
    {
      title: "The Perfect Seat: Window Wins",
      content: [
        "Claim That Window Seat – Seriously, it's worth it. Sitting by the window gives you a buffer from aisle traffic, meaning no unexpected bumps from passengers, bags, or the infamous drink cart. Plus, you can lean against the side for a bit more support and jaw rest.",
        "Use a Neck Pillow Strategically – Support your neck and jaw with a soft travel pillow. It'll help keep things comfy while you lean against the window."
      ]
    },
    {
      title: "Manage Air Pressure with Smart Flight Choices",
      content: [
        "Aim for High Altitude Flights – Flights that cruise above 10,000 feet can help avoid unnecessary air pressure changes. Low-altitude flights are more likely to mess with your jaw's equilibrium, so choose wisely when booking.",
        "Nasal Inhalers and antihistamines FTW – Bring a nasal inhaler to help with any congestion or pressure that might make your jaw feel worse. Keeping those airways clear makes a difference."
      ]
    },
    {
      title: "Don't Be Afraid to Ask for Accommodations",
      content: [
        "Request Assistance When You Need It – Whether it's wheelchair assistance to give you extra time to board and settle in, or a bit of patience while you adjust your seat, ask for what you need. Especially post-op, comfort is key.",
        "Board Early (If Possible) – Take advantage of early boarding if it's available so you can store your bags, get settled, and avoid the chaos of everyone jockeying for overhead space."
      ]
    },
    {
      title: "Pack for Comfort: Ice, Heat & Snacks",
      content: [
        "Bring Ice and Heat Packs – TSA-approved gel packs can be a lifesaver. Whether you need heat for muscle tension or cold for swelling, having your own packs makes the flight more bearable.",
        "Soft Snacks Are a Must – Airplane food? Hard pass. Most options are tough, crunchy, or just plain TMJ-unfriendly. Pack soft snacks like applesauce pouches, smoothies, yogurt, or pre-cut fruits to keep your jaw (and stomach) happy."
      ]
    },
    {
      title: "No Gum. Seriously.",
      content: [
        "Don't Chew Gum to Pop Your Ears – It's tempting, but chewing can wreak havoc on your jaw. Instead, try gentle swallowing, yawning, or using ear plugs designed for air pressure changes."
      ]
    },
    {
      title: "Additional Tips for a Jaw-Friendly Flight",
      content: [
        "Stay Hydrated – Dry air can lead to tension. Bring a refillable water bottle and sip regularly.",
        "Stretch & Move (Carefully) – Long flights can make your jaw feel stiff. Do light, gentle neck stretches or small jaw movements if it's comfortable. Just remember not to overdo it.",
        "Noise-Canceling Headphones – Noise can contribute to stress and tension, so block it out with a good pair of headphones and a calming playlist."
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        title="TMJ Guide to Flying"
        subtitle="Make your journey more comfortable"
        backgroundImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1920"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Plane className="w-12 h-12 text-bubblegum mx-auto mb-4" />
          <p className="text-lg text-charcoal mb-8">
            Flying can be stressful enough, but toss in TMJ, and it's a whole different level of prep work. 
            From dodging the dreaded drink cart to making sure your jaw doesn't feel like it's auditioning 
            for a pressure cooker, here's your ultimate guide to flying with TMJ—because your jaw deserves 
            a little extra love at 30,000 feet.
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
            Flying with TMJ might not be a walk in the park, but a little prep goes a long way. 
            You've got this, and when in doubt, remember the golden rule of travel: advocate for 
            your comfort—you deserve it! Safe travels, jaw warriors! ✈️
          </p>
        </div>

        <GuideNavigation currentPath="/resources/guides/flying" />
      </div>
    </div>
  );
};

export default Flying;