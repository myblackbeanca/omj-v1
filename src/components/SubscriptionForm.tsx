import React, { useState } from 'react';
import { supabase } from '../supabase/client';
import { X } from 'lucide-react';

interface SubscriptionFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { email: string; phone: string }) => void;
  guidePath: string;
}

const SubscriptionForm: React.FC<SubscriptionFormProps> = ({ 
  isOpen, 
  onClose, 
  onSubmit,
  guidePath 
}) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !phone) {
      setError('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Insert subscription to Supabase
      const { error: supabaseError } = await supabase
        .from('subscriptions')
        .insert([
          { 
            email, 
            phone, 
            infographic_url: guidePath 
          }
        ]);

      if (supabaseError) throw supabaseError;

      // Call parent component's submit handler
      onSubmit({ email, phone });

      // Reset form
      setEmail('');
      setPhone('');
    } catch (err) {
      console.error('Subscription error:', err);
      setError('Failed to submit subscription. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-8 w-full max-w-md relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h2 className="text-2xl font-sigmar text-bubblegum mb-4">
          Access Infographic
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded">
              {error}
            </div>
          )}
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-charcoal">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-bubblegum focus:ring focus:ring-bubblegum/50"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-charcoal">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-bubblegum focus:ring focus:ring-bubblegum/50"
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-bubblegum text-white py-3 rounded-md hover:bg-opacity-90 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Get Infographic'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionForm;