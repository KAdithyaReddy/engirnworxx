import { Link } from 'react-router-dom';
import { Mail, MapPin, Linkedin } from 'lucide-react';
import logo from '../assets/logo.png';
const Footer = () => {
  return (
    <footer className="bg-[#0A142F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
           <div className="flex flex-col items-start mb-4">
  <img
    src={logo}

    alt="Engrinworx Logo"
    className="w-28 h-auto mb-2"
  />
  <h3 className="text-xl font-bold bg-gradient-to-r from-[#2979FF] to-[#5A5F73] bg-clip-text text-transparent">
    Engrinworx
  </h3>
</div>

            <p className="text-gray-400 mb-4">
              Precision. Innovation. Performance.
            </p>
           <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@engineerinworx.com"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-gray-400 mb-2 
             hover:text-[#2979FF] transition-colors cursor-pointer"
>
  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
  <span>contact@engineerinworx.com</span>
</a>

            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>United States</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about/who-we-are" className="text-gray-400 hover:text-[#2979FF] transition-colors">Who We Are</Link></li>
              <li><Link to="/about/what-we-do" className="text-gray-400 hover:text-[#2979FF] transition-colors">What We Do</Link></li>
              <li><Link to="/about/careers" className="text-gray-400 hover:text-[#2979FF] transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#2979FF] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/engineering" className="text-gray-400 hover:text-[#2979FF] transition-colors">Engineering</Link></li>
              <li><Link to="/services/manufacturing" className="text-gray-400 hover:text-[#2979FF] transition-colors">Manufacturing</Link></li>
              <li><Link to="/services/products" className="text-gray-400 hover:text-[#2979FF] transition-colors">Products</Link></li>
              <li><Link to="/process" className="text-gray-400 hover:text-[#2979FF] transition-colors">Our Process</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><Link to="/lunch-and-learn" className="text-gray-400 hover:text-[#2979FF] transition-colors">Lunch & Learn</Link></li>
              <li>
                <a href=" https://www.linkedin.com/company/engrinworx/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-[#2979FF] transition-colors">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Engrinworx. All rights reserved. Certified Women-Owned Business.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
