import React from 'react';
import { useResumeContext } from '../../contexts/ResumeContext';
import { PlusCircle, Trash2 } from 'lucide-react';

const CertificationsForm = () => {
  const { resumeData, updateResumeData } = useResumeContext();
  const certifications = resumeData?.certifications || [];

  const addCertification = () => {
    const newCertification = {
      id: Date.now().toString(),
      name: '',
      issuer: '',
      date: '',
      url: '',
    };
    updateResumeData('certifications', [...certifications, newCertification]);
  };

  const removeCertification = (id: string) => {
    updateResumeData(
      'certifications',
      certifications.filter((cert) => cert.id !== id)
    );
  };

  const handleChange = (id: string, field: string, value: string) => {
    updateResumeData(
      'certifications',
      certifications.map((cert) =>
        cert.id === id ? { ...cert, [field]: value } : cert
      )
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">Certifications</h3>
        <button
          type="button"
          onClick={addCertification}
          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          <PlusCircle className="h-4 w-4 mr-2" />
          Add Certification
        </button>
      </div>

      {certifications.map((certification) => (
        <div key={certification.id} className="border rounded-lg p-4 space-y-4">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => removeCertification(certification.id)}
              className="text-red-600 hover:text-red-800"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Certification Name</label>
              <input
                type="text"
                value={certification.name}
                onChange={(e) => handleChange(certification.id, 'name', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Issuing Organization</label>
              <input
                type="text"
                value={certification.issuer}
                onChange={(e) => handleChange(certification.id, 'issuer', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date Issued</label>
              <input
                type="date"
                value={certification.date}
                onChange={(e) => handleChange(certification.id, 'date', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Credential URL (optional)
              </label>
              <input
                type="url"
                value={certification.url}
                onChange={(e) => handleChange(certification.id, 'url', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificationsForm;
