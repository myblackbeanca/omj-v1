import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';

const AboutUs = () => {
  const timelineEvents = [
    {
      year: "2018",
      title: "First Surgery",
      description: "Multiple jaw surgeries and beginning of the TMJ journey"
    },
    {
      year: "2019",
      title: "Education & Advocacy",
      description: "Started researching and connecting with other TMJ patients"
    },
    {
      year: "2020",
      title: "Oh My Jaw Founded",
      description: "Established OMJ as a platform for TMJ awareness and support"
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        title="About Us"
        subtitle="Our story, our mission, our community"
        backgroundImage="https://raw.githubusercontent.com/myblackbeanca/tmjimages/refs/heads/main/OMJabout.jpg"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl font-sigmar text-bubblegum mb-6">Why I Started Oh My Jaw</h2>
              <h3 className="text-xl font-semibold text-charcoal mb-4">A note from OMJ founder Jenny Feldman</h3>
              <div className="prose prose-lg">
                <p>When I first started dealing with this mess—endless surgeries, constant jaw pain, and feeling totally wrecked by the medical system—I looked around and thought, Where are the people like me?</p>
                <p>TMJ isn't exactly dinner table conversation, but honestly? It should be. It's this invisible monster that affects millions, and yet we're treated like we just need a nap or, worse, that it's all in our heads.</p>
                <p>I started Oh My Jaw because I was done feeling invisible. People don't see the daily grind—the jaw locking at the worst times, the relentless pain, the emotional rollercoaster that comes with it. They think you're fine because you look fine. But behind the scenes? My life was literally wired and screwed.</p>
              </div>
            </div>
            <div className="sticky top-24">
              <iframe
                src="https://www.youtube.com/embed/tzKA8HmEKno?start=254"
                title="Jenny's Story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full aspect-video rounded-xl shadow-lg"
              ></iframe>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-sigmar text-bubblegum mb-8">Journey Timeline</h2>
          <div className="space-y-12 mb-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0 w-24">
                  <div className="text-xl font-bold text-sunshine">{event.year}</div>
                </div>
                <div className="ml-8">
                  <h3 className="text-xl font-semibold text-charcoal mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <iframe
              src="https://www.youtube.com/embed/QLTvPfsmq_M"
              title="TMJ Journey Video 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full aspect-video rounded-xl shadow-lg"
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/pxkgSoIopQY"
              title="TMJ Journey Video 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full aspect-video rounded-xl shadow-lg"
            ></iframe>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-sigmar text-bubblegum mb-8">WIRED/SCREWED, Not NIP/TUCK</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
              alt="Beauty and TMJ"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <div className="prose prose-lg">
              <p>This isn't about vanity—it's about feeling good in your skin, even when your jaw is fighting you. As Logan Levkoff puts it: TMJ may not be a cosmetic problem, but we still deserve to feel beautiful. You shouldn't have to look as broken as you feel to receive compassion and respect.</p>
              <p>Meet Jenn Hoffman—TMJ surgery warrior, artist, and makeup magician. Jenn is on a mission to show that beauty and chronic pain can coexist.</p>
              <ul>
                <li>Skincare routines for facial pain, scars, and paralysis</li>
                <li>Managing skin sensitivities, braces, dry eye, and more</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-sigmar text-bubblegum mb-6">These Are the Jaws of Our Lives 🥤</h3>
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
              alt="TMJ Nutrition"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <div className="prose prose-lg">
              <p>Eating shouldn't be a battle. That's why we're serving up recipes, smoothies, and nutrition tips designed for TMJ patients. From soft-chew diets to post-surgery care, we've got you covered.</p>
              <p>Introducing Registered Dietician Deborah Cohen Malkoff—who'll help you enjoy diverse cuisines without making a scene. Your jaw may be stubborn, but your social life doesn't have to suffer.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-sigmar text-bubblegum mb-6">Chronically Fashionable: Hot Girls Drule! 👗</h3>
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800"
              alt="Fashion and TMJ"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <div className="prose prose-lg">
              <p>What you wear during recovery can change your whole vibe. Learn how to elevate your pajama game and slip into something more comfortable while still feeling cute. Because even if you drool a little (we've all been there), you can still look fly AF doing it.</p>
              <p>At Oh My Jaw, we're building a community that understands TMJ isn't just about pain—it's about finding joy, style, and connection in every part of life.</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-sigmar text-bubblegum mb-6">Want to Learn More About TMJ?</h2>
          <p className="text-lg text-charcoal mb-8">
            Discover more about TMJ disorders, their impact, and how we're working to make a difference.
          </p>
          <Link 
            to="/about-tmj"
            className="inline-flex items-center px-6 py-3 bg-sunshine text-charcoal font-bold rounded-full hover:bg-opacity-80 transition-colors"
          >
            Learn More About TMJ <ArrowRight className="ml-2" size={20} />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;