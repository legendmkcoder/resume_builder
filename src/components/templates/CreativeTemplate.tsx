import React from 'react';
import { useResumeContext } from '../../contexts/ResumeContext';

const CreativeTemplate = () => {
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
    <div className="max-w-[21cm] mx-auto bg-white">
      {/* Sidebar */}
      <div className="grid grid-cols-3 min-h-[29.7cm]">
        <div className="bg-indigo-900 text-white p-8">
          <div className="sticky top-8">
            {/* Profile */}
            <div className="mb-8 text-center">
              <h1 className="text-2xl font-bold mb-2">{personalInfo.fullName || 'Your Name'}</h1>
              <div className="text-indigo-200 space-y-1 text-sm">
                {personalInfo.email && <div>{personalInfo.email}</div>}
                {personalInfo.phone && <div>{personalInfo.phone}</div>}
                {personalInfo.location && <div>{personalInfo.location}</div>}
              </div>
            </div>

            {/* Skills */}
            {skills.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-indigo-200">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-indigo-800 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Education */}
            {education.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-indigo-200">Education</h2>
                <div className="space-y-4">
                  {education.map((edu) => (
                    <div key={edu.id}>
                      <h3 className="font-medium">{edu.institution}</h3>
                      <p className="text-indigo-200 text-sm">
                        {edu.degree} in {edu.field}
                      </p>
                      <p className="text-indigo-300 text-xs">
                        {edu.startDate} - {edu.endDate}
                      </p>
                      {edu.gpa && (
                        <p className="text-indigo-200 text-xs mt-1">GPA: {edu.gpa}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Certifications */}
            {certifications.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-4 text-indigo-200">Certifications</h2>
                <div className="space-y-4">
                  {certifications.map((cert) => (
                    <div key={cert.id}>
                      <h3 className="font-medium">{cert.name}</h3>
                      <p className="text-indigo-200 text-sm">{cert.issuer}</p>
                      <p className="text-indigo-300 text-xs">{cert.date}</p>
                      {cert.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-200 text-xs hover:text-white"
                        >
                          View Credential ↗
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-2 p-8 bg-white">
          {/* Summary */}
          {personalInfo.summary && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">About Me</h2>
              <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
            </div>
          )}

          {/* Experience */}
          {workExperience.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-indigo-900 mb-6">Experience</h2>
              <div className="space-y-6">
                {workExperience.map((experience) => (
                  <div key={experience.id} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-indigo-900 before:rounded-full">
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-xl font-semibold text-gray-800">{experience.position}</h3>
                      <span className="text-gray-600 text-sm">
                        {experience.startDate} - {experience.current ? 'Present' : experience.endDate}
                      </span>
                    </div>
                    <p className="text-indigo-900 font-medium">{experience.company}</p>
                    <p className="mt-2 text-gray-600">{experience.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-indigo-900 mb-6">Projects</h2>
              <div className="grid gap-6">
                {projects.map((project) => (
                  <div key={project.id} className="border border-indigo-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 text-sm hover:text-indigo-800"
                        >
                          View Project ↗
                        </a>
                      )}
                    </div>
                    <p className="mt-2 text-gray-600">{project.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreativeTemplate;
