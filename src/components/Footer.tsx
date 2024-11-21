import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-[#1D2B35] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/">
              <img
                src="https://github.com/myblackbeanca/tmjimages/blob/main/logone.png?raw=true"
                alt="OH MY JAW"
                className="h-12 w-auto mb-4"
              />
            </Link>
            <p className="text-sm">
              Supporting and advocating for those affected by TMJ disorders.
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/about-tmj" className="hover:text-white transition-colors">About TMJ</Link></li>
              <li><Link to="/podcast" className="hover:text-white transition-colors">Podcast</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/support" className="hover:text-white transition-colors">Support</Link></li>
              <li><Link to="/media-hub" className="hover:text-white transition-colors">Media Hub</Link></li>
              <li><Link to="/support" className="text-bubblegum hover:text-opacity-80 font-semibold">Donate Now</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>© 2024 OHMYJAW INC. All rights reserved. OHMYJAW INC is a qualified 501(c)(3) tax-exempt organization.</p>
          <p className="mt-2">Tax ID Number: 99-3990593</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;