import React from 'react';
import { useResumeContext } from '../../contexts/ResumeContext';
import { PlusCircle, Trash2 } from 'lucide-react';

const EducationForm = () => {
  const { resumeData, updateResumeData } = useResumeContext();
  const education = resumeData?.education || [];

  const addEducation = () => {
    const newEducation = {
      id: Date.now().toString(),
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      gpa: '',
    };
    updateResumeData('education', [...education, newEducation]);
  };

  const removeEducation = (id: string) => {
    updateResumeData(
      'education',
      education.filter((edu) => edu.id !== id)
    );
  };

  const handleChange = (id: string, field: string, value: string) => {
    updateResumeData(
      'education',
      education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">Education</h3>
        <button
          type="button"
          onClick={addEducation}
          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          <PlusCircle className="h-4 w-4 mr-2" />
          Add Education
        </button>
      </div>

      {education.map((education) => (
        <div key={education.id} className="border rounded-lg p-4 space-y-4">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => removeEducation(education.id)}
              className="text-red-600 hover:text-red-800"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Institution</label>
              <input
                type="text"
                value={education.institution}
                onChange={(e) => handleChange(education.id, 'institution', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Degree</label>
              <input
                type="text"
                value={education.degree}
                onChange={(e) => handleChange(education.id, 'degree', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Field of Study</label>
              <input
                type="text"
                value={education.field}
                onChange={(e) => handleChange(education.id, 'field', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">GPA (optional)</label>
              <input
                type="text"
                value={education.gpa}
                onChange={(e) => handleChange(education.id, 'gpa', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Start Date</label>
              <input
                type="date"
                value={education.startDate}
                onChange={(e) => handleChange(education.id, 'startDate', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">End Date</label>
              <input
                type="date"
                value={education.endDate}
                onChange={(e) => handleChange(education.id, 'endDate', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationForm;
