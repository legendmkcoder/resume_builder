import React from 'react';
import { useResumeContext } from '../../contexts/ResumeContext';
import { PlusCircle, Trash2 } from 'lucide-react';

const ProjectsForm = () => {
  const { resumeData, updateResumeData } = useResumeContext();
  const projects = resumeData?.projects || [];

  const addProject = () => {
    const newProject = {
      id: Date.now().toString(),
      name: '',
      description: '',
      technologies: [],
      url: '',
    };
    updateResumeData('projects', [...projects, newProject]);
  };

  const removeProject = (id: string) => {
    updateResumeData(
      'projects',
      projects.filter((project) => project.id !== id)
    );
  };

  const handleChange = (id: string, field: string, value: string | string[]) => {
    updateResumeData(
      'projects',
      projects.map((project) =>
        project.id === id ? { ...project, [field]: value } : project
      )
    );
  };

  const handleTechnologies = (id: string, value: string) => {
    const technologies = value.split(',').map((tech) => tech.trim());
    handleChange(id, 'technologies', technologies);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">Projects</h3>
        <button
          type="button"
          onClick={addProject}
          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          <PlusCircle className="h-4 w-4 mr-2" />
          Add Project
        </button>
      </div>

      {projects.map((project) => (
        <div key={project.id} className="border rounded-lg p-4 space-y-4">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => removeProject(project.id)}
              className="text-red-600 hover:text-red-800"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Project Name</label>
              <input
                type="text"
                value={project.name}
                onChange={(e) => handleChange(project.id, 'name', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                rows={3}
                value={project.description}
                onChange={(e) => handleChange(project.id, 'description', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Technologies (comma-separated)
              </label>
              <input
                type="text"
                value={project.technologies.join(', ')}
                onChange={(e) => handleTechnologies(project.id, e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Project URL (optional)</label>
              <input
                type="url"
                value={project.url}
                onChange={(e) => handleChange(project.id, 'url', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsForm;
