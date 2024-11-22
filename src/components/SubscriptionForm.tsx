import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

interface SubscriptionFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { email: string; phone: string }) => void;
  guidePath: string;
}

const SubscriptionForm: React.FC<SubscriptionFormProps> = ({ isOpen, onClose, onSubmit, guidePath }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email, phone });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-2xl font-sigmar text-bubblegum mb-6">
          Access TMJ Guide
        </h3>

        <p className="text-charcoal mb-6">
          Enter your details to access our comprehensive TMJ guide. We'll send you updates
          and additional resources to support your TMJ journey.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-charcoal mb-2">Email *</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bubblegum"
            />
          </div>

          <div>
            <label className="block text-charcoal mb-2">Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bubblegum"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-bubblegum text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Access Guide
          </button>

          <p className="text-sm text-gray-500 mt-4">
            By submitting this form, you agree to receive updates and resources from Oh My Jaw.
            We respect your privacy and will never share your information.
          </p>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionForm;