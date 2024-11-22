import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabase/client';

const Newsletter = () => {
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
    lastName: '',
    email: '',
    optIn: false
  });

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
        .from('newsletter_subscriptions')
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            opt_in: formData.optIn,
            subscribed_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      showNotification('success', 'Thank you for subscribing to our newsletter!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        optIn: false
      });
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      showNotification('error', 'There was a problem subscribing. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#1D2B35] to-black relative">
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

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Mail className="w-12 h-12 text-bubblegum mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            join the tribe...
          </h2>
          <h3 className="text-2xl text-bubblegum font-bold mb-6">
            does TMJ affect your life?
          </h3>
          <p className="text-xl text-gray-200 mb-8">
            Sign up to hear from us about news, events and updates.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto text-left">
            <div className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block text-white mb-2">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-bubblegum disabled:bg-gray-100 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-white mb-2">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-bubblegum disabled:bg-gray-100 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-bubblegum disabled:bg-gray-100 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="optIn"
                  required
                  checked={formData.optIn}
                  onChange={(e) => setFormData({ ...formData, optIn: e.target.checked })}
                  className="mt-1 disabled:opacity-50"
                  disabled={isSubmitting}
                />
                <label htmlFor="optIn" className="text-gray-300 text-sm">
                  I agree to receive communications from OH MY JAW. I understand that my contact information will only be used for communications and marketing content from OH MY JAW. View our{' '}
                  <Link to="/privacy" className="text-bubblegum hover:text-opacity-80">
                    privacy policy
                  </Link>{' '}
                  here.
                </label>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-bubblegum text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors mt-6 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
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
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;