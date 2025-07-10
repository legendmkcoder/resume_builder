import React from 'react';
import { useResumeContext } from '../../contexts/ResumeContext';

const ProjectsForm = () => {
  const { resumeData, updateResumeData } = useResumeContext();

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updated = resumeData.projects.map((proj, i) =>
      i === index ? { ...proj, [name]: value } : proj
    );
    updateResumeData('projects', updated);
  };

  const addProject = () => {
    updateResumeData('projects', [
      ...resumeData.projects,
      {
        id: Date.now().toString(),
        name: '',
        description: '',
        technologies: [],
        url: '',
      },
    ]);
  };

  const removeProject = (index: number) => {
    const updated = resumeData.projects.filter((_, i) => i !== index);
    updateResumeData('projects', updated);
  };

  const handleTechChange = (index: number, tech: string) => {
    const updated = resumeData.projects.map((proj, i) =>
      i === index
        ? {
            ...proj,
            technologies: tech
              .split(',')
              .map((t) => t.trim())
              .filter(Boolean),
          }
        : proj
    );
    updateResumeData('projects', updated);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6 font-sans">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-primary">Projects</h3>
        <button
          type="button"
          onClick={addProject}
          className="px-4 py-2 rounded-lg bg-emerald text-white font-medium shadow hover:bg-emerald/90 focus:outline-none focus:ring-2 focus:ring-emerald/50 transition-all"
        >
          + Add
        </button>
      </div>
      {resumeData.projects.length === 0 && (
        <div className="text-text-light text-sm mb-4">
          No projects added yet.
        </div>
      )}
      {resumeData.projects.map((proj, index) => (
        <div
          key={proj.id}
          className="mb-8 border-b border-background pb-6 last:border-b-0 last:pb-0"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label
                htmlFor={`name-${proj.id}`}
                className="block text-sm font-medium text-text mb-1"
              >
                Project Name <span className="text-coral">*</span>
              </label>
              <input
                type="text"
                name="name"
                id={`name-${proj.id}`}
                value={proj.name}
                onChange={(e) => handleChange(index, e)}
                className="mt-1 block w-full rounded-lg border border-primary bg-background text-text shadow-sm focus:border-emerald focus:ring-2 focus:ring-emerald/50 transition-all duration-150 px-3 py-2 outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor={`url-${proj.id}`}
                className="block text-sm font-medium text-text mb-1"
              >
                Project URL
              </label>
              <input
                type="url"
                name="url"
                id={`url-${proj.id}`}
                value={proj.url}
                onChange={(e) => handleChange(index, e)}
                className="mt-1 block w-full rounded-lg border border-primary bg-background text-text shadow-sm focus:border-emerald focus:ring-2 focus:ring-emerald/50 transition-all duration-150 px-3 py-2 outline-none"
                placeholder="https://..."
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor={`description-${proj.id}`}
                className="block text-sm font-medium text-text mb-1"
              >
                Description <span className="text-coral">*</span>
              </label>
              <textarea
                name="description"
                id={`description-${proj.id}`}
                rows={3}
                value={proj.description}
                onChange={(e) => handleChange(index, e)}
                className="mt-1 block w-full rounded-lg border border-primary bg-background text-text shadow-sm focus:border-emerald focus:ring-2 focus:ring-emerald/50 transition-all duration-150 px-3 py-2 outline-none resize-none"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor={`technologies-${proj.id}`}
                className="block text-sm font-medium text-text mb-1"
              >
                Technologies (comma separated){' '}
                <span className="text-coral">*</span>
              </label>
              <input
                type="text"
                name="technologies"
                id={`technologies-${proj.id}`}
                value={proj.technologies.join(', ')}
                onChange={(e) => handleTechChange(index, e.target.value)}
                className="mt-1 block w-full rounded-lg border border-primary bg-background text-text shadow-sm focus:border-emerald focus:ring-2 focus:ring-emerald/50 transition-all duration-150 px-3 py-2 outline-none"
                required
              />
            </div>
          </div>
          <button
            type="button"
            onClick={() => removeProject(index)}
            className="px-3 py-1 rounded-lg bg-coral text-white font-medium shadow hover:bg-coral/90 focus:outline-none focus:ring-2 focus:ring-coral/50 transition-all text-sm"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProjectsForm;
