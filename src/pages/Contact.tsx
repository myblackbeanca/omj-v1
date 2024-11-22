import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, Facebook, Instagram, Linkedin } from 'lucide-react';
import PageHero from '../components/PageHero';
import { supabase } from '../supabase/client';

const Contact = () => {
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
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    message: ''
  });

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

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ show: true, type, message });
    setTimeout(() => {
      setNotification(prev => ({ ...prev, show: false }));
    }, 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            first_name: formData.firstName,
            email: formData.email,
            message: formData.message,
            submitted_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      showNotification('success', 'Your message has been sent successfully!');
      setFormData({
        firstName: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      showNotification('error', 'There was a problem sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {notification.show && (
        <div
          className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transition-all transform ${
            notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white`}
          role="alert"
        >
          <p className="font-medium">{notification.message}</p>
        </div>
      )}

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
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bubblegum disabled:bg-gray-100 disabled:cursor-not-allowed"
                disabled={isSubmitting}
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
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bubblegum disabled:bg-gray-100 disabled:cursor-not-allowed"
                disabled={isSubmitting}
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
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bubblegum disabled:bg-gray-100 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-bubblegum text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-charcoal mb-4">Connect With Us</h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bubblegum hover:text-opacity-80 transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;