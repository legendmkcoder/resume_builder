import React, { useState } from 'react';
import { useResumeContext } from '../../contexts/ResumeContext';

const SkillsForm = () => {
  const { resumeData, updateResumeData } = useResumeContext();
  const [skill, setSkill] = useState('');

  const addSkill = () => {
    if (skill.trim()) {
      updateResumeData('skills', [...resumeData.skills, skill.trim()]);
      setSkill('');
    }
  };

  const removeSkill = (index: number) => {
    const updated = resumeData.skills.filter((_, i) => i !== index);
    updateResumeData('skills', updated);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6 font-sans">
      <h3 className="text-xl font-semibold text-primary mb-4">Skills</h3>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a skill"
          className="flex-1 rounded-lg border border-primary bg-background text-text shadow-sm focus:border-emerald focus:ring-2 focus:ring-emerald/50 transition-all duration-150 px-3 py-2 outline-none"
          required
        />
        <button
          type="button"
          onClick={addSkill}
          className="px-4 py-2 rounded-lg bg-emerald text-white font-medium shadow hover:bg-emerald/90 focus:outline-none focus:ring-2 focus:ring-emerald/50 transition-all"
        >
          Add
        </button>
      </div>
      {resumeData.skills.length === 0 && (
        <div className="text-text-light text-sm mb-4">No skills added yet.</div>
      )}
      <div className="flex flex-wrap gap-2">
        {resumeData.skills.map((s, i) => (
          <span
            key={i}
            className="inline-flex items-center bg-background border border-primary text-text rounded-full px-3 py-1 text-sm font-medium shadow-sm"
          >
            {s}
            <button
              type="button"
              onClick={() => removeSkill(i)}
              className="ml-2 text-coral hover:text-white hover:bg-coral rounded-full p-1 transition-colors"
              aria-label="Remove skill"
            >
              &times;
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsForm;
