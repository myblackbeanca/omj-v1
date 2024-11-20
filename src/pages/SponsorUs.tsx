import React from 'react';
import { Gift, TrendingUp, Wallet, Users, HandHeart, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const SponsorUs = () => {
  const sponsorshipOptions = [
    {
      icon: <Gift className="w-8 h-8 text-bubblegum" />,
      title: "Planned Giving",
      description: "Want to leave behind a legacy that really matters? By supporting Oh My Jaw, you can transform the lives of children and adults living with TMJ. Explore our planned giving options and create a lasting impact for generations to come."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-bubblegum" />,
      title: "Gifts of Securities",
      description: "Got stocks that have grown in value? Donating appreciated securities is one of the smartest ways to give. Your gift will support our mission and programs while helping TMJ patients and their families. Plus, it could offer financial benefits for you, too!"
    },
    {
      icon: <Wallet className="w-8 h-8 text-bubblegum" />,
      title: "Giving with Your IRA",
      description: "If you're 70.5 or older, making a gift from your IRA (through a Qualified Charitable Deduction) is one of the most tax-efficient ways to give. This type of donation could unlock significant savings while supporting TMJ patients when they need it most."
    },
    {
      icon: <Users className="w-8 h-8 text-bubblegum" />,
      title: "Donor-Advised Funds (DAFs)",
      description: "A donor-advised fund (DAF) is a flexible way to support the causes you care about while maximizing tax benefits. It's easy to manage, simplifies your giving, and helps you meet your philanthropic goals."
    },
    {
      icon: <HandHeart className="w-8 h-8 text-bubblegum" />,
      title: "Matching Gifts",
      description: "Double (or even triple) your impact! Many companies offer matching gift programs, meaning your employer could match your donation dollar-for-dollar—or more! Check with your company to see if they'll help you make an even bigger difference."
    },
    {
      icon: <Building2 className="w-8 h-8 text-bubblegum" />,
      title: "Become a Corporate Sponsor",
      description: "We're always excited to team up with companies that align with our mission. Let's create a partnership that drives change, supports TMJ patients, and aligns with your organization's philanthropic goals. Reach out to explore how we can work together!"
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        title="Sponsor Us: Ways to Make an Impact"
        subtitle="Join us in making a difference for TMJ patients"
        backgroundImage="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=1920"
      >
        <Link
          to="/support"
          className="inline-block mt-6 bg-bubblegum text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
        >
          Donate Now <ArrowRight className="inline-block ml-2" size={20} />
        </Link>
      </PageHero>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsorshipOptions.map((option, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="mb-6">{option.icon}</div>
              <h3 className="text-2xl font-sigmar text-bubblegum mb-4">{option.title}</h3>
              <p className="text-charcoal">{option.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-xl text-center">
          <p className="text-xl text-charcoal mb-6">
            When you partner with Oh My Jaw, you're not just supporting a cause—you're changing lives. Whether through securities, corporate sponsorships, or matching gifts, your contribution helps us fight for better care, more research, and a brighter future for TMJ patients everywhere.
          </p>
          <p className="text-2xl font-sigmar text-bubblegum">
            Let's do some good—together. ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default SponsorUs;