import React, { useState } from 'react';
import { useResumeContext } from '../../contexts/ResumeContext';
import { PlusCircle, X } from 'lucide-react';

const SkillsForm = () => {
  const { resumeData, updateResumeData } = useResumeContext();
  const [newSkill, setNewSkill] = useState('');
  const skills = resumeData?.skills || [];

  const addSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      updateResumeData('skills', [...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    updateResumeData(
      'skills',
      skills.filter((skill) => skill !== skillToRemove)
    );
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">Skills</h3>
      
      <form onSubmit={addSkill} className="flex gap-2">
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="Add a skill"
          className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          <PlusCircle className="h-4 w-4 mr-2" />
          Add
        </button>
      </form>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <div
            key={skill}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
          >
            {skill}
            <button
              type="button"
              onClick={() => removeSkill(skill)}
              className="ml-2 text-blue-600 hover:text-blue-800"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsForm;
