import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, Layout } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Create Your Professional</span>
          <span className="block text-blue-600">Resume in Minutes</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Choose from multiple templates, customize your design, and export to PDF. Build a resume that stands out and gets you hired.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <Link
              to="/builder"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
            >
              <FileText className="mr-2" />
              Start Building
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Features that make resume building easier
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    {feature.name}
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    name: 'Multiple Templates',
    description: 'Choose from a variety of professional templates to make your resume stand out.',
    icon: <Layout className="h-6 w-6 text-white" />,
  },
  {
    name: 'Real-time Preview',
    description: 'See changes instantly as you build your resume.',
    icon: <FileText className="h-6 w-6 text-white" />,
  },
  {
    name: 'PDF Export',
    description: 'Download your resume in PDF format, ready to send to employers.',
    icon: <ArrowRight className="h-6 w-6 text-white" />,
  },
];

export default Home;