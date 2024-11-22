import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabase/client';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionMessage, setSubscriptionMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([
          {
            email,
            subscribed_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      setSubscriptionMessage('Thanks for subscribing!');
      setEmail('');
    } catch (error) {
      console.error('Error subscribing:', error);
      setSubscriptionMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubscribing(false);
      setTimeout(() => setSubscriptionMessage(''), 3000);
    }
  };

  const socialLinks = [
    {
      platform: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61561062720062',
      icon: Facebook
    },
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/ohhhmyjaw/',
      icon: Instagram
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/company/oh-my-jaw/',
      icon: Linkedin
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-black to-[#1D2B35] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <Link to="/" className="block mb-4">
              <img
                src="https://github.com/myblackbeanca/tmjimages/blob/main/logone.png?raw=true"
                alt="OH MY JAW"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm">
              Supporting and advocating for those affected by TMJ disorders.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/about-tmj" className="hover:text-white transition-colors">About TMJ</Link></li>
              <li><Link to="/podcast" className="hover:text-white transition-colors">Podcast</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/support" className="hover:text-white transition-colors">Support</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">Media & Infographics</Link></li>
              <li><Link to="/support" className="text-bubblegum hover:text-opacity-80 font-semibold">Donate Now</Link></li>
            </ul>
          </div>

          {/* Newsletter and Social */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Stay Connected</h4>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                    aria-label={`Follow us on ${link.platform}`}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>

            {/* Newsletter Form */}
            <form onSubmit={handleSubscribe} className="space-y-3">
              <h4 className="text-white text-sm font-semibold">Newsletter</h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg focus:outline-none text-charcoal"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="bg-bubblegum text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-50 whitespace-nowrap"
                >
                  {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              {subscriptionMessage && (
                <p className="text-sm text-sunshine">{subscriptionMessage}</p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>© 2024 OHMYJAW INC. All rights reserved. OHMYJAW INC is a qualified 501(c)(3) tax-exempt organization.</p>
          <p className="mt-2">Tax ID Number: 99-3990593</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;