import React, { useState } from 'react';
import { Play, Mic, Mail, Headphones, Calendar } from 'lucide-react';
import PageHero from '../components/PageHero';
import { supabase } from '../supabase/client';

const Podcast = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    show: boolean;
    type: 'success' | 'error';
    message: string;
  }>({
    show: false,
    type: 'success',
    message: '',
  });

  const episodes = [
    {
      title: "Breaking the Silence: TMJ Stories That Need to Be Heard",
      date: "March 15, 2024",
      duration: "45 min",
      description: "Join Jenny as she talks with TMJ warriors about their journey and the importance of speaking up.",
      image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&q=80&w=600",
      guest: "Dr. Sarah Johnson",
      topics: ["Patient Stories", "Advocacy", "Healthcare Access"]
    },
    {
      title: "The Medical-Dental Divide: Bridging the Gap in TMJ Care",
      date: "March 1, 2024",
      duration: "38 min",
      description: "Exploring the challenges of getting comprehensive care when TMJ falls between medical and dental coverage.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
      guest: "Dr. Michael Chen",
      topics: ["Healthcare Policy", "Insurance Coverage", "Treatment Options"]
    },
    {
      title: "Gender Bias in Pain Management",
      date: "February 15, 2024",
      duration: "42 min",
      description: "A deep dive into how gender bias affects diagnosis, treatment, and research in TMJ disorders.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
      guest: "Dr. Emily Rodriguez",
      topics: ["Gender Bias", "Pain Management", "Research Gaps"]
    }
  ];

  const upcomingEpisodes = [
    {
      title: "TMJ and Mental Health: Breaking the Cycle",
      date: "April 1, 2024",
      guest: "Dr. Lisa Thompson"
    },
    {
      title: "Alternative Therapies for TMJ Relief",
      date: "April 15, 2024",
      guest: "Dr. James Wilson"
    }
  ];

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('podcast_subscribers')
        .insert([
          {
            email,
            subscribed_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      setNotification({
        show: true,
        type: 'success',
        message: 'Thanks for subscribing! You\'ll never miss an episode.'
      });
      setEmail('');
    } catch (error) {
      console.error('Error subscribing:', error);
      setNotification({
        show: true,
        type: 'error',
        message: 'There was a problem subscribing. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setNotification(prev => ({ ...prev, show: false }));
      }, 5000);
    }
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
          <div className="grid md:grid-cols-3 gap-8">
            {episodes.map((episode, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <img
                  src={episode.image}
                  alt={episode.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">{episode.date}</span>
                    <span className="text-sm text-gray-500">{episode.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-3">{episode.title}</h3>
                  <p className="text-gray-600 mb-4">{episode.description}</p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-bubblegum">Guest: {episode.guest}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {episode.topics.map((topic, topicIndex) => (
                        <span key={topicIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="flex items-center text-bubblegum font-semibold hover:text-opacity-80 transition-colors">
                    <Play className="w-5 h-5 mr-2" /> Listen Now
                  </button>
                </div>
              </div>
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
            {notification.show && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  notification.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}
              >
                {notification.message}
              </div>
            )}
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
                  'Subscribe'
                )}
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Podcast;