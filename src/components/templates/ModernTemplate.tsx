import React from 'react';
import { useResumeContext } from '../../contexts/ResumeContext';

const ModernTemplate = () => {
  const { resumeData } = useResumeContext();
  const {
    personalInfo = {},
    workExperience = [],
    education = [],
    skills = [],
    projects = [],
    certifications = []
  } = resumeData || {};

  return (
    <div className="p-8 max-w-[21cm] mx-auto bg-white shadow-lg">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{personalInfo.fullName || 'Your Name'}</h1>
        <div className="text-gray-600 mt-2 space-x-4">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && (
            <>
              <span>•</span>
              <span>{personalInfo.phone}</span>
            </>
          )}
          {personalInfo.location && (
            <>
              <span>•</span>
              <span>{personalInfo.location}</span>
            </>
          )}
        </div>
      </div>

      {/* Summary */}
      {personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 border-b-2 border-blue-600 pb-2 mb-3">
            Professional Summary
          </h2>
          <p className="text-gray-700">{personalInfo.summary}</p>
        </div>
      )}

      {/* Work Experience */}
      {workExperience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 border-b-2 border-blue-600 pb-2 mb-3">
            Work Experience
          </h2>
          {workExperience.map((experience) => (
            <div key={experience.id} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-lg font-medium text-gray-900">{experience.position}</h3>
                <span className="text-gray-600 text-sm">
                  {experience.startDate} - {experience.current ? 'Present' : experience.endDate}
                </span>
              </div>
              <div className="text-gray-700">{experience.company}</div>
              <p className="mt-2 text-gray-600">{experience.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 border-b-2 border-blue-600 pb-2 mb-3">
            Education
          </h2>
          {education.map((education) => (
            <div key={education.id} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-lg font-medium text-gray-900">{education.institution}</h3>
                <span className="text-gray-600 text-sm">
                  {education.startDate} - {education.endDate}
                </span>
              </div>
              <div className="text-gray-700">
                {education.degree} in {education.field}
                {education.gpa && ` • GPA: ${education.gpa}`}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 border-b-2 border-blue-600 pb-2 mb-3">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 border-b-2 border-blue-600 pb-2 mb-3">
            Projects
          </h2>
          {projects.map((project) => (
            <div key={project.id} className="mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                {project.name}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm ml-2 hover:underline"
                  >
                    View Project
                  </a>
                )}
              </h3>
              <p className="mt-1 text-gray-600">{project.description}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 border-b-2 border-blue-600 pb-2 mb-3">
            Certifications
          </h2>
          {certifications.map((certification) => (
            <div key={certification.id} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-lg font-medium text-gray-900">{certification.name}</h3>
                <span className="text-gray-600 text-sm">{certification.date}</span>
              </div>
              <div className="text-gray-700">
                {certification.issuer}
                {certification.url && (
                  <a
                    href={certification.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 ml-2 hover:underline"
                  >
                    View Credential
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ModernTemplate;
