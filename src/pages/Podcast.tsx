import React, { useState } from 'react';
import { Play, Mic, Mail, Headphones, Calendar, Music2, Youtube } from 'lucide-react';
import PageHero from '../components/PageHero';

const Podcast = () => {
  const [email, setEmail] = useState('');

  const platforms = [
    {
      name: "Spotify",
      icon: <Music2 className="w-8 h-8" />,
      url: "https://open.spotify.com/show/7gf0xG3OblePcEjVUW5naC",
      available: true
    },
    {
      name: "Amazon Music",
      icon: <Music2 className="w-8 h-8" />,
      url: "https://music.amazon.com/podcasts/b92c856f-7a19-45f7-8595-a3463256ac7c/oh-my-jaw",
      available: true
    },
    {
      name: "Apple Podcasts",
      icon: <Music2 className="w-8 h-8" />,
      url: "#",
      available: false
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-8 h-8" />,
      url: "#",
      available: false
    }
  ];

  const upcomingEpisodes = [
    {
      title: "TMJ and Mental Health: Breaking the Cycle",
      date: "January 5, 2025",
      guest: "Dr. Lisa Thompson"
    },
    {
      title: "Alternative Therapies for TMJ Relief",
      date: "January 25, 2025",
      guest: "Dr. James Wilson"
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <div className="min-h-screen">
      <PageHero
        title="TMJ Talks Podcast"
        subtitle="Real stories, real solutions, real talk about TMJ"
        backgroundImage="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=1920"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Host Profile */}
        <section className="mb-20">
          <div className="bg-white rounded-xl shadow-lg p-8 md:flex gap-8">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <img
                src="https://raw.githubusercontent.com/myblackbeanca/tmjimages/refs/heads/main/jfeldman.png"
                alt="Jenny Feldman"
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="md:w-2/3">
              <div className="flex items-center mb-4">
                <Mic className="w-6 h-6 text-bubblegum mr-2" />
                <h2 className="text-2xl font-sigmar text-bubblegum">Meet Your Host</h2>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Jenny Feldman</h3>
              <div className="prose prose-lg">
                <p>
                  As someone who's navigated the complex world of TMJ disorders firsthand, Jenny brings both personal experience and professional insight to every episode. Her mission? To create a space where TMJ warriors can share their stories, find community, and access the information they need.
                </p>
                <p>
                  Through candid conversations with patients, healthcare providers, and advocates, Jenny helps bridge the gap between medical knowledge and lived experience, making complex topics accessible to everyone affected by TMJ.
                </p>
              </div>
              <div className="mt-6 flex items-center space-x-4">
                <span className="text-gray-600 flex items-center">
                  <Headphones className="w-5 h-5 mr-2" />
                  100+ Episodes
                </span>
                <span className="text-gray-600 flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  New Episodes Every Two Weeks
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Episodes */}
        <section className="mb-20">
          <h2 className="text-3xl font-sigmar text-bubblegum mb-12">Recent Episodes</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <iframe 
              src="https://player.rss.com/spilling-the-teamj-intro-to-oh-my-jaw-with-jenny-feldman-wendi-grossman?theme=dark" 
              style={{ width: '100%', height: '320px' }} 
              title="Oh My Jaw" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </section>

        {/* Listen on Your Favorite Platform */}
        <section className="mb-20">
          <h2 className="text-3xl font-sigmar text-bubblegum mb-8">Listen On Your Favorite Platform</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-center ${
                  !platform.available && 'opacity-50 cursor-not-allowed'
                }`}
                onClick={e => !platform.available && e.preventDefault()}
              >
                <div className="flex justify-center mb-4">
                  {platform.icon}
                </div>
                <h3 className="text-lg font-semibold text-charcoal">
                  {platform.name}
                </h3>
                {!platform.available && (
                  <span className="text-sm text-bubblegum">Coming Soon</span>
                )}
              </a>
            ))}
          </div>
        </section>

        {/* Upcoming Episodes */}
        <section className="mb-20">
          <h2 className="text-3xl font-sigmar text-bubblegum mb-8">Coming Up Next</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEpisodes.map((episode, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 flex items-center justify-between">
                <div>
                  <p className="text-gray-500 mb-2">{episode.date}</p>
                  <h3 className="text-xl font-semibold text-charcoal mb-2">{episode.title}</h3>
                  <p className="text-bubblegum">with {episode.guest}</p>
                </div>
                <button className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow">
                  <Calendar className="w-6 h-6 text-bubblegum" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gray-50 rounded-xl p-8">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="w-12 h-12 text-bubblegum mx-auto mb-4" />
            <h2 className="text-2xl font-sigmar text-bubblegum mb-4">
              Never Miss an Episode
            </h2>
            <p className="text-charcoal mb-8">
              Subscribe to our newsletter to get notified about new episodes, TMJ resources, and community updates.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-4">
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
                className="bg-bubblegum text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Podcast;
