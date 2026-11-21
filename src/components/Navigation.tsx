import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isActiveParent = (paths: string[]) => paths.some(p => location.pathname === p);

 const menuItems = [
  { name: 'Home', path: '/' },
  {
    name: 'About Us',
    submenu: [
      { name: 'Who We Are', path: '/about/who-we-are' },
      { name: 'What We Do', path: '/about/what-we-do' },
      { name: 'Careers', path: '/about/careers' },
    ],
  },
  {
    name: 'Services',
    submenu: [
      { name: 'Engineering', path: '/services/engineering' },
      { name: 'Manufacturing', path: '/services/manufacturing' },
      { name: 'Products', path: '/services/products' },
    ],
  },
  {
   name: 'Our Process',
      submenu: [
        { name: 'Process', path: '/Process' }, // new item
        { name: 'Lunch & Learn', path: '/lunch-and-learn' },
    ],
  },
  { name: 'Contact Us', path: '/contact' },
];

  return (
    <nav className="bg-[#0A142F] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
    <Link to="/" className="flex items-center space-x-3">
  {/* Company Logo with Curved Edges */}
  <img
  src={logo}
  alt="Engrinworx Logo"
  className="h-16 w-auto object-contain rounded-xl pt-1"
  style={{ transform: 'translateY(-2px)' }}
/>

  {/* Company Name */}
 <span className="text-3xl font-semibold tracking-tight">
  <span className="text-[#f28c1b]">E</span>
  <span className="text-white">N</span>
  <span className="text-white">G</span>
  <span className="text-white">R</span>
  <span className="text-[#32CD32]">I</span>
  <span className="text-white">N</span>
  <span className="text-[#00A9FF]">W</span>
  <span className="text-white">O</span>
  <span className="text-white">R</span>
  <span className="text-white">X</span>
</span>


</Link>

          <div className="hidden lg:flex space-x-1">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.submenu ? (
                  <button
                    className={`px-4 py-2 rounded-lg flex items-center gap-1 transition-all duration-200 ${
                      isActiveParent(item.submenu.map(s => s.path))
                        ? 'bg-[#2979FF] text-white'
                        : 'hover:bg-[#1a2744] text-gray-200'
                    }`}
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={item.path!}
                    className={`px-4 py-2 rounded-lg flex items-center gap-1 transition-all duration-200 ${
                      isActive(item.path!)
                        ? 'bg-[#2979FF] text-white'
                        : 'hover:bg-[#1a2744] text-gray-200'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {item.submenu && openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-0 w-56 bg-[#1a2744] rounded-lg shadow-xl py-2 border border-[#2979FF]/20 z-50">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        to={subitem.path}
                        className={`block px-4 py-3 transition-colors duration-200 ${
                          isActive(subitem.path)
                            ? 'bg-[#2979FF] text-white'
                            : 'text-gray-200 hover:bg-[#2979FF] hover:text-white'
                        }`}
                        onClick={() => setOpenDropdown(null)}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-[#1a2744]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-4">
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <div>
                    <div className="px-4 py-3 font-semibold text-gray-200">{item.name}</div>
                    <div className="pl-4">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.path}
                          className={`block px-4 py-2 text-sm rounded-lg transition-colors ${
                            isActive(subitem.path)
                              ? 'bg-[#2979FF] text-white'
                              : 'text-gray-300 hover:bg-[#1a2744]'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path!}
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      isActive(item.path!)
                        ? 'bg-[#2979FF] text-white'
                        : 'hover:bg-[#1a2744]'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
