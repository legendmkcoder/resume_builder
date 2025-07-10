import React from 'react';
import { useResumeContext } from '../../contexts/ResumeContext';

const CertificationsForm = () => {
  const { resumeData, updateResumeData } = useResumeContext();

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const updated = resumeData.certifications.map((cert, i) =>
      i === index ? { ...cert, [name]: value } : cert
    );
    updateResumeData('certifications', updated);
  };

  const addCertification = () => {
    updateResumeData('certifications', [
      ...resumeData.certifications,
      {
        id: Date.now().toString(),
        name: '',
        issuer: '',
        date: '',
        url: '',
      },
    ]);
  };

  const removeCertification = (index: number) => {
    const updated = resumeData.certifications.filter((_, i) => i !== index);
    updateResumeData('certifications', updated);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6 font-sans">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-primary">Certifications</h3>
        <button
          type="button"
          onClick={addCertification}
          className="px-4 py-2 rounded-lg bg-emerald text-white font-medium shadow hover:bg-emerald/90 focus:outline-none focus:ring-2 focus:ring-emerald/50 transition-all"
        >
          + Add
        </button>
      </div>
      {resumeData.certifications.length === 0 && (
        <div className="text-text-light text-sm mb-4">
          No certifications added yet.
        </div>
      )}
      {resumeData.certifications.map((cert, index) => (
        <div
          key={cert.id}
          className="mb-8 border-b border-background pb-6 last:border-b-0 last:pb-0"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label
                htmlFor={`name-${cert.id}`}
                className="block text-sm font-medium text-text mb-1"
              >
                Certification Name <span className="text-coral">*</span>
              </label>
              <input
                type="text"
                name="name"
                id={`name-${cert.id}`}
                value={cert.name}
                onChange={(e) => handleChange(index, e)}
                className="mt-1 block w-full rounded-lg border border-primary bg-background text-text shadow-sm focus:border-emerald focus:ring-2 focus:ring-emerald/50 transition-all duration-150 px-3 py-2 outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor={`issuer-${cert.id}`}
                className="block text-sm font-medium text-text mb-1"
              >
                Issuer <span className="text-coral">*</span>
              </label>
              <input
                type="text"
                name="issuer"
                id={`issuer-${cert.id}`}
                value={cert.issuer}
                onChange={(e) => handleChange(index, e)}
                className="mt-1 block w-full rounded-lg border border-primary bg-background text-text shadow-sm focus:border-emerald focus:ring-2 focus:ring-emerald/50 transition-all duration-150 px-3 py-2 outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor={`date-${cert.id}`}
                className="block text-sm font-medium text-text mb-1"
              >
                Date <span className="text-coral">*</span>
              </label>
              <input
                type="month"
                name="date"
                id={`date-${cert.id}`}
                value={cert.date}
                onChange={(e) => handleChange(index, e)}
                className="mt-1 block w-full rounded-lg border border-primary bg-background text-text shadow-sm focus:border-emerald focus:ring-2 focus:ring-emerald/50 transition-all duration-150 px-3 py-2 outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor={`url-${cert.id}`}
                className="block text-sm font-medium text-text mb-1"
              >
                Credential URL
              </label>
              <input
                type="url"
                name="url"
                id={`url-${cert.id}`}
                value={cert.url}
                onChange={(e) => handleChange(index, e)}
                className="mt-1 block w-full rounded-lg border border-primary bg-background text-text shadow-sm focus:border-emerald focus:ring-2 focus:ring-emerald/50 transition-all duration-150 px-3 py-2 outline-none"
                placeholder="https://..."
              />
            </div>
          </div>
          <button
            type="button"
            onClick={() => removeCertification(index)}
            className="px-3 py-1 rounded-lg bg-coral text-white font-medium shadow hover:bg-coral/90 focus:outline-none focus:ring-2 focus:ring-coral/50 transition-all text-sm"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default CertificationsForm;
