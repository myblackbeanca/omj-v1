import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { supabase } from '../supabase/client';

const JoinMission = () => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('mission_subscribers')
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
        message: 'Thanks for joining our mission! We\'ll be in touch soon.'
      });
      setEmail('');
    } catch (error) {
      console.error('Error subscribing:', error);
      setNotification({
        show: true,
        type: 'error',
        message: 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setNotification(prev => ({ ...prev, show: false }));
      }, 5000);
    }
  };

  return (
    <section className="bg-gray-50 rounded-xl p-8 max-w-2xl mx-auto">
      <div className="text-center">
        <Mail className="w-12 h-12 text-bubblegum mx-auto mb-4" />
        <h2 className="text-2xl font-sigmar text-bubblegum mb-4">
          Join Our Mission
        </h2>
        <p className="text-charcoal mb-6">
          Subscribe to our newsletter and be part of the change. Together, we can make a real difference 
          in the lives of TMJ patients everywhere.
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
        <form onSubmit={handleSubmit} className="flex gap-4">
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
              'Join Mission'
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default JoinMission;