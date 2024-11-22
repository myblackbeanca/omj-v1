import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import SubscriptionForm from './SubscriptionForm';

const TMJChecker = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [showSubscriptionForm, setShowSubscriptionForm] = useState(false);
  const navigate = useNavigate();

  const symptoms = [
    {
      title: "Jaw Pain or Discomfort",
      description: "Especially near your ear or temple."
    },
    {
      title: "Neck, Shoulder, or Face Pain",
      description: "It's not just the jaw that feels it."
    },
    {
      title: "Headaches or Migraines",
      description: "They could be connected to your jaw."
    },
    {
      title: "Dizzy Spells, Earaches, or Ringing Ears",
      description: "Losing balance or feeling fullness in your ears? Yep, that might be related too."
    },
    {
      title: "Clicking or Popping Jaw",
      description: "Hear those weird sounds when you open wide? Not normal."
    },
    {
      title: "Locked Jaw",
      description: "Ever struggle to open or close your mouth? Yeah, that could be TMJ."
    },
    {
      title: "Tired or Sore Jaw Muscles",
      description: "Even without doing much—chewing, talking, or just existing."
    },
    {
      title: "Sleep Problems or Sinus Issues",
      description: "Poor sleep might have more to do with your jaw than you think."
    },
    {
      title: "Grinding or Clenching Your Teeth",
      description: "Sometimes it's stress, sometimes it's your jaw acting up."
    }
  ];

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptom) 
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  const handleSubmit = () => {
    if (selectedSymptoms.length > 0) {
      setShowSubscriptionForm(true);
    }
  };

  const handleSubscriptionSubmit = (data: { email: string; phone: string }) => {
    console.log('Subscription data:', data);
    setShowSubscriptionForm(false);
    navigate('/about-tmj');
  };

  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between bg-bubblegum text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
        >
          <div className="flex items-center">
            <AlertCircle className="w-6 h-6 mr-4" />
            <h2 className="text-2xl font-sigmar">TMJ-curious? Check Your Symptoms</h2>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-6 h-6" />
          ) : (
            <ChevronDown className="w-6 h-6" />
          )}
        </button>

        {isExpanded && (
          <div className="mt-8">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {symptoms.map((symptom, index) => (
                <button
                  key={index}
                  onClick={() => toggleSymptom(symptom.title)}
                  className={`p-6 rounded-xl text-left transition-all ${
                    selectedSymptoms.includes(symptom.title)
                      ? 'bg-bubblegum text-white shadow-lg'
                      : 'bg-white hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center mb-2">
                    <CheckCircle className={`w-5 h-5 ${
                      selectedSymptoms.includes(symptom.title)
                        ? 'text-white'
                        : 'text-bubblegum'
                    } mr-2`} />
                    <h3 className="font-semibold">{symptom.title}</h3>
                  </div>
                  <p className={`text-sm ${
                    selectedSymptoms.includes(symptom.title)
                      ? 'text-white'
                      : 'text-gray-600'
                  }`}>
                    {symptom.description}
                  </p>
                </button>
              ))}
            </div>

            {selectedSymptoms.length > 0 && (
              <div className="text-center">
                <p className="text-lg text-charcoal mb-6">
                  You've selected {selectedSymptoms.length} {selectedSymptoms.length === 1 ? 'symptom' : 'symptoms'}.
                  If you're experiencing any of these symptoms, you might be dealing with TMJ.
                </p>
                <button
                  onClick={handleSubmit}
                  className="px-8 py-3 rounded-full font-semibold bg-bubblegum text-white hover:bg-opacity-90 transition-colors transform hover:scale-105"
                >
                  Learn More About TMJ
                </button>
              </div>
            )}
          </div>
        )}

        <SubscriptionForm
          isOpen={showSubscriptionForm}
          onClose={() => setShowSubscriptionForm(false)}
          onSubmit={handleSubscriptionSubmit}
          guidePath="/about-tmj"
        />
      </div>
    </section>
  );
};

export default TMJChecker;