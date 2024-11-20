import React, { useState } from 'react';
import { DollarSign, CreditCard, User } from 'lucide-react';
import PageHero from '../components/PageHero';
import { useNavigate } from 'react-router-dom';

const Support = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setCustomAmount(value);
      if (value) {
        setAmount(Number(value));
      }
    }
  };

  const handleDonate = async (anonymous: boolean) => {
    if (anonymous) {
      try {
        const response = await fetch('https://omj-donation.alet8891.workers.dev', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            origin: window.location.origin,
            amount: amount,
            isAnonymous: true
          }),
        });
  
        const data = await response.json();
        if (data.url) {
          window.location.href = data.url;
        } else {
          throw new Error('No checkout URL received');
        }
      } catch (error) {
        console.error('Error processing donation:', error);
      }
    } else {
      setShowForm(true);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://omj-donation.alet8891.workers.dev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          origin: window.location.origin,
          amount: amount,
          isAnonymous: false,
          donorInfo: formData
        }),
      });
  
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Error processing donation:', error);
    }
  };

  return (
    <div className="min-h-screen">
      <PageHero
        title="Support OMJ"
        subtitle="Help us make a difference in TMJ care"
        backgroundImage="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=1920"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-12">
            <DollarSign className="w-12 h-12 text-bubblegum mx-auto mb-4" />
            <h2 className="text-3xl font-sigmar text-bubblegum mb-4">Make a Donation</h2>
            <p className="text-lg text-charcoal">
              Your support helps us continue our mission to improve TMJ care and awareness.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-charcoal">Amount</span>
              <span className="text-bubblegum font-bold">${amount}</span>
            </div>
            <input
              type="range"
              min="25"
              max="2000"
              step="25"
              value={amount}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mb-4"
            />
            <div className="flex justify-between mt-2 text-sm text-gray-500">
              <span>$25</span>
              <span>$2000</span>
            </div>

            <div className="mt-4">
              <label className="block text-charcoal mb-2">Custom Amount</label>
              <input
                type="text"
                value={customAmount}
                onChange={handleCustomAmountChange}
                placeholder="Enter custom amount"
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-bubblegum"
              />
            </div>
          </div>

          <div className="flex gap-4 mb-8">
            {[25, 50, 100, 250, 500].map((value) => (
              <button
                key={value}
                onClick={() => {
                  setAmount(value);
                  setCustomAmount('');
                }}
                className={`flex-1 py-2 rounded-lg border ${
                  amount === value
                    ? 'border-bubblegum bg-bubblegum text-white'
                    : 'border-gray-300 hover:border-bubblegum'
                }`}
              >
                ${value}
              </button>
            ))}
          </div>

          {!showForm && (
            <div className="flex gap-4">
              <button
                onClick={() => handleDonate(true)}
                className="flex-1 bg-gray-100 text-charcoal px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Donate Anonymously
              </button>
              <button
                onClick={() => handleDonate(false)}
                className="flex-1 bg-bubblegum text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                Donate with Details
              </button>
            </div>
          )}

          {showForm && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-charcoal mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-bubblegum"
                />
              </div>
              <div>
                <label className="block text-charcoal mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-bubblegum"
                />
              </div>
              <div>
                <label className="block text-charcoal mb-2">Phone</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-bubblegum"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-bubblegum text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                Proceed to Payment
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Support;