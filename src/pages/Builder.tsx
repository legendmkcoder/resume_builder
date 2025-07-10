import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResumeContext } from '../contexts/ResumeContext';
import PersonalInfoForm from '../components/forms/PersonalInfoForm';
import WorkExperienceForm from '../components/forms/WorkExperienceForm';
import EducationForm from '../components/forms/EducationForm';
import SkillsForm from '../components/forms/SkillsForm';
import ProjectsForm from '../components/forms/ProjectsForm';
import CertificationsForm from '../components/forms/CertificationsForm';
import ModernTemplate from '../components/templates/ModernTemplate';
import MinimalTemplate from '../components/templates/MinimalTemplate';
import CreativeTemplate from '../components/templates/CreativeTemplate';
import SampleContent from '../components/SampleContent';
import { Download } from 'lucide-react';
import { generatePDF } from '../utils/pdfGenerator';

const templates: { [key: string]: React.ComponentType } = {
  modern: ModernTemplate,
  minimal: MinimalTemplate,
  creative: CreativeTemplate,
};

const Builder = () => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { selectedTemplate, resumeData, resetResumeData, templateSelected } =
    useResumeContext();

  // Error state for validation
  const [error, setError] = React.useState<string | null>(null);
  // Loading state for export
  const [isExporting, setIsExporting] = React.useState(false);

  // Force re-render when template changes
  const [key, setKey] = React.useState(0);
  useEffect(() => {
    setKey((prev) => prev + 1);
  }, [selectedTemplate]);

  // Get the selected template component or fallback to ModernTemplate
  const SelectedTemplate = templates[selectedTemplate] || ModernTemplate;

  // Validation function
  const validateResume = () => {
    if (!resumeData.personalInfo.fullName.trim())
      return 'Full Name is required.';
    if (!resumeData.personalInfo.email.trim()) return 'Email is required.';
    if (!resumeData.personalInfo.phone.trim()) return 'Phone is required.';
    if (!resumeData.personalInfo.location.trim())
      return 'Location is required.';
    // summary is NOT required
    if (
      (!resumeData.workExperience || resumeData.workExperience.length === 0) &&
      (!resumeData.education || resumeData.education.length === 0)
    ) {
      return 'At least one Work Experience or Education entry is required.';
    }
    // if (resumeData.skills.length === 0) {
    //   return 'At least one skill is required.';
    // }
    // Check for incomplete work experience (description is NOT required)
    for (const exp of resumeData.workExperience) {
      if (
        !exp.company.trim() ||
        !exp.position.trim() ||
        !exp.startDate.trim() ||
        (!exp.current && !exp.endDate.trim())
      ) {
        return 'All Work Experience fields (except Description) are required.';
      }
    }
    // Check for incomplete education
    for (const edu of resumeData.education) {
      if (
        !edu.institution.trim() ||
        !edu.degree.trim() ||
        !edu.field.trim() ||
        !edu.startDate.trim() ||
        !edu.endDate.trim()
      ) {
        return 'All Education fields are required.';
      }
    }
    // Check for incomplete projects (name is required, description/technologies are NOT)
    for (const proj of resumeData.projects) {
      if (!proj.name.trim()) {
        return 'Project Name is required.';
      }
    }
    return null;
  };

  const handleDownload = async () => {
    const validationError = validateResume();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null);
    setIsExporting(true);
    if (resumeRef.current) {
      const filename = resumeData.personalInfo?.fullName
        ? `${resumeData.personalInfo.fullName.replace(/\s+/g, '_')}_resume.pdf`
        : 'resume.pdf';
      try {
        await generatePDF(resumeRef.current, filename);
        // Reset all data after successful export
        resetResumeData();
        // Navigate back to home page
        navigate('/');
      } catch (error) {
        console.error('Error during PDF generation:', error);
      } finally {
        setIsExporting(false);
      }
    } else {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Forms Section */}
        <div className="w-1/2 min-h-screen bg-white border-r border-gray-200 overflow-y-auto">
          <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <PersonalInfoForm />
              <WorkExperienceForm />
              <EducationForm />
              <SkillsForm />
              <ProjectsForm />
              <CertificationsForm />
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className="w-1/2 bg-gray-50 overflow-y-auto">
          <div className="sticky top-0 z-10 bg-gray-50 border-b border-gray-200 px-4 py-2">
            <div className="max-w-2xl mx-auto flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900">Preview</h2>
              {templateSelected ? (
                <button
                  onClick={handleDownload}
                  className={`inline-flex items-center px-6 py-2 border border-transparent text-base font-semibold rounded-lg shadow-sm text-white bg-emerald hover:bg-emerald/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald/50 transition-all ${
                    isExporting ? 'opacity-60 cursor-not-allowed' : ''
                  }`}
                  disabled={isExporting}
                  aria-busy={isExporting}
                >
                  {isExporting ? (
                    <svg
                      className="animate-spin h-5 w-5 mr-2 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                  ) : (
                    <Download className="h-5 w-5 mr-2" />
                  )}
                  {isExporting ? 'Exporting...' : 'Download PDF'}
                </button>
              ) : (
                <div className="text-sm text-gray-500">
                  Select a template to start building
                </div>
              )}
            </div>
            {/* Error message */}
            {error && (
              <div className="text-red-600 text-sm mt-2 text-center">
                {error}
              </div>
            )}
          </div>
          <div className="max-w-2xl mx-auto py-8 px-4" ref={resumeRef}>
            <div className="bg-white shadow-lg" key={key}>
              {templateSelected ? <SelectedTemplate /> : <SampleContent />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;
