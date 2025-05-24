import React, { useRef, useEffect } from 'react';
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
import { Download } from 'lucide-react';
import { generatePDF } from '../utils/pdfGenerator';

const templates: { [key: string]: React.ComponentType } = {
  modern: ModernTemplate,
  minimal: MinimalTemplate,
  creative: CreativeTemplate,
};

const Builder = () => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const { selectedTemplate, resumeData } = useResumeContext();

  // Force re-render when template changes
  const [key, setKey] = React.useState(0);
  useEffect(() => {
    setKey(prev => prev + 1);
  }, [selectedTemplate]);

  // Get the selected template component or fallback to ModernTemplate
  const SelectedTemplate = templates[selectedTemplate] || ModernTemplate;

  const handleDownload = async () => {
    if (resumeRef.current) {
      const filename = resumeData.personalInfo?.fullName
        ? `${resumeData.personalInfo.fullName.replace(/\s+/g, '_')}_resume.pdf`
        : 'resume.pdf';
      await generatePDF(resumeRef.current, filename);
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
              <button
                onClick={handleDownload}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </button>
            </div>
          </div>
          <div className="max-w-2xl mx-auto py-8 px-4" ref={resumeRef}>
            <div className="bg-white shadow-lg" key={key}>
              <SelectedTemplate />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;