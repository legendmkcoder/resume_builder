import React from 'react';
import { useResumeContext } from '../../contexts/ResumeContext';

const MinimalTemplate = () => {
  const { resumeData } = useResumeContext();
  const {
    personalInfo = {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      summary: '',
    },
    workExperience = [],
    education = [],
    skills = [],
    projects = [],
    certifications = [],
  } = resumeData || {};

  // Check if any data has been entered
  const hasPersonalInfo =
    personalInfo.fullName ||
    personalInfo.email ||
    personalInfo.phone ||
    personalInfo.location ||
    personalInfo.summary;
  const hasAnyData =
    hasPersonalInfo ||
    workExperience.length > 0 ||
    education.length > 0 ||
    skills.length > 0 ||
    projects.length > 0 ||
    certifications.length > 0;

  return (
    <div className="p-8 max-w-[21cm] mx-auto bg-white">
      {/* Header */}
      <div className="border-b-2 border-gray-200 pb-4 mb-6">
        <h1 className="text-4xl font-light text-gray-800">
          {personalInfo.fullName || 'Your Name'}
        </h1>
        <div className="text-gray-600 mt-2 space-x-2 text-sm">
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
        <div className="mb-8">
          <p className="text-gray-700 leading-relaxed">
            {personalInfo.summary}
          </p>
        </div>
      )}

      {/* Experience */}
      {workExperience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-light text-gray-800 mb-4 uppercase tracking-wider">
            Experience
          </h2>
          <div className="space-y-6">
            {workExperience.map((experience) => (
              <div key={experience.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-lg font-medium text-gray-800">
                    {experience.position}
                  </h3>
                  <span className="text-gray-600 text-sm">
                    {experience.startDate} -{' '}
                    {experience.current ? 'Present' : experience.endDate}
                  </span>
                </div>
                <p className="text-gray-700 font-medium">
                  {experience.company}
                </p>
                <p className="mt-2 text-gray-600 text-sm">
                  {experience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-light text-gray-800 mb-4 uppercase tracking-wider">
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-lg font-medium text-gray-800">
                    {edu.institution}
                  </h3>
                  <span className="text-gray-600 text-sm">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                <p className="text-gray-700">
                  {edu.degree} in {edu.field}
                  {edu.gpa && ` • GPA: ${edu.gpa}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-light text-gray-800 mb-4 uppercase tracking-wider">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-50 text-gray-700 text-sm border border-gray-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-light text-gray-800 mb-4 uppercase tracking-wider">
            Projects
          </h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id}>
                <h3 className="text-lg font-medium text-gray-800">
                  {project.name}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 text-sm ml-2 hover:text-gray-700"
                    >
                      View Project ↗
                    </a>
                  )}
                </h3>
                <p className="mt-1 text-gray-600 text-sm">
                  {project.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-gray-500 text-xs">
                      {tech}
                      {' • '}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-light text-gray-800 mb-4 uppercase tracking-wider">
            Certifications
          </h2>
          <div className="space-y-4">
            {certifications.map((cert) => (
              <div key={cert.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-lg font-medium text-gray-800">
                    {cert.name}
                  </h3>
                  <span className="text-gray-600 text-sm">{cert.date}</span>
                </div>
                <p className="text-gray-700">
                  {cert.issuer}
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 ml-2 hover:text-gray-700"
                    >
                      View Credential ↗
                    </a>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {!hasAnyData && (
        <div className="text-center py-8">
          <p className="text-gray-400 italic">
            Start filling in your information to see your resume here
          </p>
        </div>
      )}
    </div>
  );
};

export default MinimalTemplate;
