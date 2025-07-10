import React from 'react';

const SampleContent = () => {
  return (
    <div className="p-8 max-w-[21cm] mx-auto bg-white shadow-lg">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">John Doe</h1>
        <div className="text-gray-600 mt-2 space-x-4">
          <span>john.doe@email.com</span>
          <span>•</span>
          <span>(555) 123-4567</span>
          <span>•</span>
          <span>San Francisco, CA</span>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 border-b-2 border-blue-600 pb-2 mb-3">
          Professional Summary
        </h2>
        <p className="text-gray-700">
          Experienced software engineer with 5+ years of expertise in full-stack
          development, specializing in React, Node.js, and cloud technologies.
          Proven track record of delivering scalable solutions and leading
          cross-functional teams in agile environments.
        </p>
      </div>

      {/* Work Experience */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 border-b-2 border-blue-600 pb-2 mb-3">
          Work Experience
        </h2>
        <div className="mb-4">
          <div className="flex justify-between items-baseline">
            <h3 className="text-lg font-medium text-gray-900">
              Senior Software Engineer
            </h3>
            <span className="text-gray-600 text-sm">2021 - Present</span>
          </div>
          <div className="text-gray-700">TechCorp Inc.</div>
          <p className="mt-2 text-gray-600">
            Led development of microservices architecture, improved system
            performance by 40%, and mentored junior developers. Technologies:
            React, Node.js, AWS, Docker.
          </p>
        </div>
        <div className="mb-4">
          <div className="flex justify-between items-baseline">
            <h3 className="text-lg font-medium text-gray-900">
              Software Developer
            </h3>
            <span className="text-gray-600 text-sm">2019 - 2021</span>
          </div>
          <div className="text-gray-700">StartupXYZ</div>
          <p className="mt-2 text-gray-600">
            Developed and maintained web applications, collaborated with design
            team, and participated in code reviews. Technologies: JavaScript,
            Python, PostgreSQL.
          </p>
        </div>
      </div>

      {/* Education */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 border-b-2 border-blue-600 pb-2 mb-3">
          Education
        </h2>
        <div className="mb-4">
          <div className="flex justify-between items-baseline">
            <h3 className="text-lg font-medium text-gray-900">
              University of Technology
            </h3>
            <span className="text-gray-600 text-sm">2015 - 2019</span>
          </div>
          <div className="text-gray-700">
            Bachelor of Science in Computer Science • GPA: 3.8
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 border-b-2 border-blue-600 pb-2 mb-3">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            React
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            Node.js
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            TypeScript
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            AWS
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            Docker
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            PostgreSQL
          </span>
        </div>
      </div>

      {/* Projects */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 border-b-2 border-blue-600 pb-2 mb-3">
          Projects
        </h2>
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-900">
            E-commerce Platform
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm ml-2 hover:underline"
            >
              View Project
            </a>
          </h3>
          <p className="mt-1 text-gray-600">
            Full-stack e-commerce platform with payment integration, user
            authentication, and admin dashboard. Handles 10,000+ daily users.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
              React
            </span>
            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
              Node.js
            </span>
            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
              Stripe
            </span>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 border-b-2 border-blue-600 pb-2 mb-3">
          Certifications
        </h2>
        <div className="mb-4">
          <div className="flex justify-between items-baseline">
            <h3 className="text-lg font-medium text-gray-900">
              AWS Certified Developer
            </h3>
            <span className="text-gray-600 text-sm">2022</span>
          </div>
          <div className="text-gray-700">
            Amazon Web Services
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 ml-2 hover:underline"
            >
              View Credential
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleContent;
