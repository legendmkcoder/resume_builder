import React from 'react';
import { useResumeContext } from '../../contexts/ResumeContext';
import { PlusCircle, Trash2 } from 'lucide-react';

const WorkExperienceForm = () => {
  const { resumeData, updateResumeData } = useResumeContext();
  const workExperience = resumeData?.workExperience || [];

  const addExperience = () => {
    const newExperience = {
      id: Date.now().toString(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
    };
    updateResumeData('workExperience', [...workExperience, newExperience]);
  };

  const removeExperience = (id: string) => {
    updateResumeData(
      'workExperience',
      workExperience.filter((exp) => exp.id !== id)
    );
  };

  const handleChange = (id: string, field: string, value: string | boolean) => {
    updateResumeData(
      'workExperience',
      workExperience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">Work Experience</h3>
        <button
          type="button"
          onClick={addExperience}
          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          <PlusCircle className="h-4 w-4 mr-2" />
          Add Experience
        </button>
      </div>

      {workExperience.map((experience) => (
        <div key={experience.id} className="border rounded-lg p-4 space-y-4">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => removeExperience(experience.id)}
              className="text-red-600 hover:text-red-800"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Company</label>
              <input
                type="text"
                value={experience.company}
                onChange={(e) => handleChange(experience.id, 'company', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Position</label>
              <input
                type="text"
                value={experience.position}
                onChange={(e) => handleChange(experience.id, 'position', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Start Date</label>
              <input
                type="date"
                value={experience.startDate}
                onChange={(e) => handleChange(experience.id, 'startDate', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">End Date</label>
              <input
                type="date"
                value={experience.endDate}
                disabled={experience.current}
                onChange={(e) => handleChange(experience.id, 'endDate', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              <div className="mt-2">
                <input
                  type="checkbox"
                  id={`current-${experience.id}`}
                  checked={experience.current}
                  onChange={(e) => handleChange(experience.id, 'current', e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor={`current-${experience.id}`} className="ml-2 text-sm text-gray-600">
                  Current Position
                </label>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              rows={4}
              value={experience.description}
              onChange={(e) => handleChange(experience.id, 'description', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperienceForm;
