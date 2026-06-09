import React from 'react';
import { Globe, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoDark from '../assets/images/logo/logo-glow.webp';
import { servicesData } from '../data/services';

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <a href="/#home" className="flex items-center space-x-2 mb-6">
              <img src={logoDark} alt="Kayadu Consulting Logo" className="h-10 w-auto scale-125 origin-left" />
              <span className="font-bold text-xl tracking-tight text-white ml-2">
                Kayadu Consulting <span className="text-brand-teal">LLP</span>
              </span>
            </a>
            <p className="text-slate-400 max-w-sm mb-6">
              Your trusted partners in financial growth. Delivering expert audit, tax, and advisory services tailored to the modern business landscape.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Visit our Website" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-teal hover:text-white transition-colors">
                <Globe className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="#" aria-label="Email us" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-teal hover:text-white transition-colors">
                <Mail className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="#" aria-label="Call us" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-teal hover:text-white transition-colors">
                <Phone className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="/#home" className="hover:text-brand-teal transition-colors">Home</a></li>
              <li><a href="/#services" className="hover:text-brand-teal transition-colors">Services</a></li>
              <li><a href="/#about" className="hover:text-brand-teal transition-colors">About Us</a></li>
              <li><a href="/#contact" className="hover:text-brand-teal transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400">
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link to={`/services/${service.id}`} className="hover:text-brand-teal transition-colors line-clamp-1">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Kayadu Consulting LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
