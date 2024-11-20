import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';
import PageHero from '../components/PageHero';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submission:', formData);
    setFormData({
      firstName: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen">
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with the OMJ team"
        backgroundImage="https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=1920"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-sigmar text-bubblegum mb-6">
            Join the Movement
          </h2>
          <p className="text-lg text-charcoal mb-8">
            If you want to learn how to join the movement, click the button below. Otherwise, scroll down and fill out the contact form to reach us.
          </p>
          <Link
            to="/support"
            className="inline-block bg-bubblegum text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
          >
            Support Oh My Jaw
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-sigmar text-bubblegum mb-8">get in touch.</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="firstName" className="block text-charcoal mb-2">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bubblegum"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-charcoal mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bubblegum"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-charcoal mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Enter your message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bubblegum"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-bubblegum text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center"
            >
              Send Message
              <Send className="ml-2 w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;