import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Layout, Home } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <FileText className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">ResumeBuilder</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100">
              <Home className="h-5 w-5 mr-1" />
              <span>Home</span>
            </Link>
            <Link to="/templates" className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100">
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