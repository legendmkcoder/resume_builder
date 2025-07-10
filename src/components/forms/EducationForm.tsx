import React from 'react';
import { useResumeContext } from '../../contexts/ResumeContext';

const EducationForm = () => {
  const { resumeData, updateResumeData } = useResumeContext();

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const updated = resumeData.education.map((edu, i) =>
      i === index ? { ...edu, [name]: value } : edu
    );
    updateResumeData('education', updated);
  };

  const addEducation = () => {
    updateResumeData('education', [
      ...resumeData.education,
      {
        id: Date.now().toString(),
        institution: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: '',
        gpa: '',
      },
    ]);
  };

  const removeEducation = (index: number) => {
    const updated = resumeData.education.filter((_, i) => i !== index);
    updateResumeData('education', updated);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6 font-sans">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-primary">Education</h3>
        <button
          type="button"
          onClick={addEducation}
          className="px-4 py-2 rounded-lg bg-emerald text-white font-medium shadow hover:bg-emerald/90 focus:outline-none focus:ring-2 focus:ring-emerald/50 transition-all"
        >
          + Add
        </button>
      </div>
      {resumeData.education.length === 0 && (
        <div className="text-text-light text-sm mb-4">
          No education added yet.
        </div>
      )}
      {resumeData.education.map((edu, index) => (
        <div
          key={edu.id}
          className="mb-8 border-b border-background pb-6 last:border-b-0 last:pb-0"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label
                htmlFor={`institution-${edu.id}`}
                className="block text-sm font-medium text-text mb-1"
              >
                Institution <span className="text-coral">*</span>
              </label>
              <input
                type="text"
                name="institution"
                id={`institution-${edu.id}`}
                value={edu.institution}
                onChange={(e) => handleChange(index, e)}
                className="mt-1 block w-full rounded-lg border border-primary bg-background text-text shadow-sm focus:border-emerald focus:ring-2 focus:ring-emerald/50 transition-all duration-150 px-3 py-2 outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor={`degree-${edu.id}`}
                className="block text-sm font-medium text-text mb-1"
              >
                Qualification <span className="text-coral">*</span>
              </label>
              <input
                type="text"
                name="degree"
                id={`degree-${edu.id}`}
                value={edu.degree}
                onChange={(e) => handleChange(index, e)}
                className="mt-1 block w-full rounded-lg border border-primary bg-background text-text shadow-sm focus:border-emerald focus:ring-2 focus:ring-emerald/50 transition-all duration-150 px-3 py-2 outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor={`field-${edu.id}`}
                className="block text-sm font-medium text-text mb-1"
              >
                Field of Study <span className="text-coral">*</span>
              </label>
              <input
                type="text"
                name="field"
                id={`field-${edu.id}`}
                value={edu.field}
                onChange={(e) => handleChange(index, e)}
                className="mt-1 block w-full rounded-lg border border-primary bg-background text-text shadow-sm focus:border-emerald focus:ring-2 focus:ring-emerald/50 transition-all duration-150 px-3 py-2 outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor={`startDate-${edu.id}`}
                className="block text-sm font-medium text-text mb-1"
              >
                Start Date <span className="text-coral">*</span>
              </label>
              <input
                type="month"
                name="startDate"
                id={`startDate-${edu.id}`}
                value={edu.startDate}
                onChange={(e) => handleChange(index, e)}
                className="mt-1 block w-full rounded-lg border border-primary bg-background text-text shadow-sm focus:border-emerald focus:ring-2 focus:ring-emerald/50 transition-all duration-150 px-3 py-2 outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor={`endDate-${edu.id}`}
                className="block text-sm font-medium text-text mb-1"
              >
                End Date <span className="text-coral">*</span>
              </label>
              <input
                type="month"
                name="endDate"
                id={`endDate-${edu.id}`}
                value={edu.endDate}
                onChange={(e) => handleChange(index, e)}
                className="mt-1 block w-full rounded-lg border border-primary bg-background text-text shadow-sm focus:border-emerald focus:ring-2 focus:ring-emerald/50 transition-all duration-150 px-3 py-2 outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor={`gpa-${edu.id}`}
                className="block text-sm font-medium text-text mb-1"
              >
                GPA
              </label>
              <input
                type="text"
                name="gpa"
                id={`gpa-${edu.id}`}
                value={edu.gpa}
                onChange={(e) => handleChange(index, e)}
                className="mt-1 block w-full rounded-lg border border-primary bg-background text-text shadow-sm focus:border-emerald focus:ring-2 focus:ring-emerald/50 transition-all duration-150 px-3 py-2 outline-none"
                placeholder="Optional"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={() => removeEducation(index)}
            className="px-3 py-1 rounded-lg bg-coral text-white font-medium shadow hover:bg-coral/90 focus:outline-none focus:ring-2 focus:ring-coral/50 transition-all text-sm"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default EducationForm;
