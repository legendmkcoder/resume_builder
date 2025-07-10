import React from 'react';
import { useResumeContext } from '../../contexts/ResumeContext';

const WorkExperienceForm = () => {
  const { resumeData, updateResumeData } = useResumeContext();

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;
    const updated = resumeData.workExperience.map((exp, i) =>
      i === index
        ? { ...exp, [name]: type === 'checkbox' ? checked : value }
        : exp
    );
    updateResumeData('workExperience', updated);
  };

  const addExperience = () => {
    updateResumeData('workExperience', [
      ...resumeData.workExperience,
      {
        id: Date.now().toString(),
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        current: false,
        description: '',
      },
    ]);
  };

  const removeExperience = (index: number) => {
    const updated = resumeData.workExperience.filter((_, i) => i !== index);
    updateResumeData('workExperience', updated);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6 font-sans">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-primary">Work Experience</h3>
        <button
          type="button"
          onClick={addExperience}
          className="px-4 py-2 rounded-lg bg-emerald text-white font-medium shadow hover:bg-emerald/90 focus:outline-none focus:ring-2 focus:ring-emerald/50 transition-all"
        >
          + Add
        </button>
      </div>
      {resumeData.workExperience.length === 0 && (
        <div className="text-text-light text-sm mb-4">
          No work experience added yet.
        </div>
      )}
      {resumeData.workExperience.map((exp, index) => (
        <div
          key={exp.id}
          className="mb-8 border-b border-background pb-6 last:border-b-0 last:pb-0"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label
                htmlFor={`company-${exp.id}`}
                className="block text-sm font-medium text-text mb-1"
              >
                Company <span className="text-coral">*</span>
              </label>
              <input
                type="text"
                name="company"
                id={`company-${exp.id}`}
                value={exp.company}
                onChange={(e) => handleChange(index, e)}
                className="mt-1 block w-full rounded-lg border border-primary bg-background text-text shadow-sm focus:border-emerald focus:ring-2 focus:ring-emerald/50 transition-all duration-150 px-3 py-2 outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor={`position-${exp.id}`}
                className="block text-sm font-medium text-text mb-1"
              >
                Position <span className="text-coral">*</span>
              </label>
              <input
                type="text"
                name="position"
                id={`position-${exp.id}`}
                value={exp.position}
                onChange={(e) => handleChange(index, e)}
                className="mt-1 block w-full rounded-lg border border-primary bg-background text-text shadow-sm focus:border-emerald focus:ring-2 focus:ring-emerald/50 transition-all duration-150 px-3 py-2 outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor={`startDate-${exp.id}`}
                className="block text-sm font-medium text-text mb-1"
              >
                Start Date <span className="text-coral">*</span>
              </label>
              <input
                type="month"
                name="startDate"
                id={`startDate-${exp.id}`}
                value={exp.startDate}
                onChange={(e) => handleChange(index, e)}
                className="mt-1 block w-full rounded-lg border border-primary bg-background text-text shadow-sm focus:border-emerald focus:ring-2 focus:ring-emerald/50 transition-all duration-150 px-3 py-2 outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor={`endDate-${exp.id}`}
                className="block text-sm font-medium text-text mb-1"
              >
                End Date <span className="text-coral">*</span>
              </label>
              <input
                type="month"
                name="endDate"
                id={`endDate-${exp.id}`}
                value={exp.endDate}
                onChange={(e) => handleChange(index, e)}
                className="mt-1 block w-full rounded-lg border border-primary bg-background text-text shadow-sm focus:border-emerald focus:ring-2 focus:ring-emerald/50 transition-all duration-150 px-3 py-2 outline-none"
                disabled={exp.current}
                required={!exp.current}
              />
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  name="current"
                  id={`current-${exp.id}`}
                  checked={exp.current}
                  onChange={(e) => handleChange(index, e)}
                  className="rounded border-primary text-emerald focus:ring-emerald/50"
                />
                <label
                  htmlFor={`current-${exp.id}`}
                  className="ml-2 text-sm text-text-light"
                >
                  Currently working here
                </label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor={`description-${exp.id}`}
              className="block text-sm font-medium text-text mb-1"
            >
              Description <span className="text-coral">*</span>
            </label>
            <textarea
              name="description"
              id={`description-${exp.id}`}
              rows={3}
              value={exp.description}
              onChange={(e) => handleChange(index, e)}
              className="mt-1 block w-full rounded-lg border border-primary bg-background text-text shadow-sm focus:border-emerald focus:ring-2 focus:ring-emerald/50 transition-all duration-150 px-3 py-2 outline-none resize-none"
              required
            />
          </div>
          <button
            type="button"
            onClick={() => removeExperience(index)}
            className="px-3 py-1 rounded-lg bg-coral text-white font-medium shadow hover:bg-coral/90 focus:outline-none focus:ring-2 focus:ring-coral/50 transition-all text-sm"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default WorkExperienceForm;
