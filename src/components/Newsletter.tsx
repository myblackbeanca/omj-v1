import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    optIn: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      optIn: false
    });
  };

  return (
    <section className="py-20 bg-[#1D2B35]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Mail className="w-12 h-12 text-bubblegum mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            does TMJ affect your life?
          </h2>
          <h3 className="text-2xl text-bubblegum font-bold mb-6">
            join the club...
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
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-bubblegum"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-white mb-2">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-bubblegum"
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
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-bubblegum"
                />
              </div>
              
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="optIn"
                  required
                  checked={formData.optIn}
                  onChange={(e) => setFormData({ ...formData, optIn: e.target.checked })}
                  className="mt-1"
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
                className="w-full bg-bubblegum text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors mt-6"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;