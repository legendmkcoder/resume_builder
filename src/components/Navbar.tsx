import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Layout, Home } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="bg-primary shadow-md text-white font-sans">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between h-16 items-center">
          <div className="flex items-center py-2">
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-bold tracking-tight"
            >
              <FileText className="h-8 w-8 text-emerald" />
              <span>ResumeBuilder</span>
            </Link>
          </div>
          <div className="flex items-center space-x-2 md:space-x-6 mt-2 md:mt-0">
            <Link
              to="/"
              className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-150 hover:bg-emerald/20 hover:text-emerald focus:outline-none focus:ring-2 focus:ring-emerald/50 ${
                location.pathname === '/' ? 'bg-emerald/20 text-emerald' : ''
              }`}
            >
              <Home className="h-5 w-5 mr-1" />
              <span>Home</span>
            </Link>
            <Link
              to="/templates"
              className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-150 hover:bg-emerald/20 hover:text-emerald focus:outline-none focus:ring-2 focus:ring-emerald/50 ${
                location.pathname === '/templates'
                  ? 'bg-emerald/20 text-emerald'
                  : ''
              }`}
            >
              <Layout className="h-5 w-5 mr-1" />
              <span>Templates</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
