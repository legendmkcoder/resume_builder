import React from 'react';
import { useResumeContext } from '../../contexts/ResumeContext';

const PersonalInfoForm = () => {
  const { resumeData, updateResumeData } = useResumeContext();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    updateResumeData('personalInfo', {
      ...resumeData.personalInfo,
      [name]: value,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6 font-sans">
      <h3 className="text-xl font-semibold text-primary mb-4">
        Personal Information
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-text mb-1"
          >
            Full Name <span className="text-coral">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={resumeData.personalInfo.fullName || ''}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-primary bg-background text-text shadow-sm focus:border-emerald focus:ring-2 focus:ring-emerald/50 transition-all duration-150 px-3 py-2 outline-none"
            autoComplete="name"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-text mb-1"
          >
            Email <span className="text-coral">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={resumeData.personalInfo.email || ''}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-primary bg-background text-text shadow-sm focus:border-emerald focus:ring-2 focus:ring-emerald/50 transition-all duration-150 px-3 py-2 outline-none"
            autoComplete="email"
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-text mb-1"
          >
            Phone <span className="text-coral">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={resumeData.personalInfo.phone || ''}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-primary bg-background text-text shadow-sm focus:border-emerald focus:ring-2 focus:ring-emerald/50 transition-all duration-150 px-3 py-2 outline-none"
            autoComplete="tel"
            required
          />
        </div>
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-text mb-1"
          >
            Location <span className="text-coral">*</span>
          </label>
          <input
            type="text"
            name="location"
            id="location"
            value={resumeData.personalInfo.location || ''}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-primary bg-background text-text shadow-sm focus:border-emerald focus:ring-2 focus:ring-emerald/50 transition-all duration-150 px-3 py-2 outline-none"
            autoComplete="address-level2"
            required
          />
        </div>
      </div>
      <div className="mt-6">
        <label
          htmlFor="summary"
          className="block text-sm font-medium text-text mb-1"
        >
          Professional Summary
          {/* <span className="text-coral">*</span> */}
        </label>
        <textarea
          name="summary"
          id="summary"
          rows={4}
          value={resumeData.personalInfo.summary || ''}
          onChange={handleChange}
          className="mt-1 block w-full rounded-lg border border-primary bg-background text-text shadow-sm focus:border-emerald focus:ring-2 focus:ring-emerald/50 transition-all duration-150 px-3 py-2 outline-none resize-none"
          // required
        />
      </div>
    </div>
  );
};

export default PersonalInfoForm;
