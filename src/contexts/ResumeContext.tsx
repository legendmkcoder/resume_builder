import React, { createContext, useContext, useState, useEffect } from 'react';

interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
}

interface WorkExperience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  url: string;
}

interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url: string;
}

interface ResumeData {
  personalInfo: PersonalInfo;
  workExperience: WorkExperience[];
  education: Education[];
  skills: string[];
  projects: Project[];
  certifications: Certification[];
}

interface ResumeContextType {
  resumeData: ResumeData;
  selectedTemplate: string;
  templateSelected: boolean;
  updateResumeData: (field: keyof ResumeData, value: any) => void;
  setSelectedTemplate: (template: string) => void;
  resetResumeData: () => void;
}

const defaultResumeData: ResumeData = {
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
  },
  workExperience: [],
  education: [],
  skills: [],
  projects: [],
  certifications: [],
};

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [resumeData, setResumeData] = useState<ResumeData>(() => {
    const savedData = localStorage.getItem('resumeData');
    return savedData ? JSON.parse(savedData) : defaultResumeData;
  });

  const [selectedTemplate, setSelectedTemplate] = useState<string>(() => {
    const savedTemplate = localStorage.getItem('selectedTemplate');
    return savedTemplate || 'modern';
  });

  const [templateSelected, setTemplateSelected] = useState<boolean>(() => {
    const savedTemplateSelected = localStorage.getItem('templateSelected');
    return savedTemplateSelected ? JSON.parse(savedTemplateSelected) : false;
  });

  useEffect(() => {
    try {
      localStorage.setItem('resumeData', JSON.stringify(resumeData));
    } catch (error) {
      console.error('Error saving resume data:', error);
    }
  }, [resumeData]);

  useEffect(() => {
    try {
      localStorage.setItem('selectedTemplate', selectedTemplate);
    } catch (error) {
      console.error('Error saving template selection:', error);
    }
  }, [selectedTemplate]);

  useEffect(() => {
    try {
      localStorage.setItem(
        'templateSelected',
        JSON.stringify(templateSelected)
      );
    } catch (error) {
      console.error('Error saving template selected state:', error);
    }
  }, [templateSelected]);

  const updateResumeData = (field: keyof ResumeData, value: any) => {
    setResumeData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleTemplateChange = (template: string) => {
    setSelectedTemplate(template);
    setTemplateSelected(true);
  };

  const resetResumeData = () => {
    setResumeData(defaultResumeData);
    // Keep templateSelected as true so users don't see sample content again
    // Only clear localStorage for resume data, not template selection
    localStorage.removeItem('resumeData');
    // Don't remove templateSelected from localStorage
  };

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        selectedTemplate,
        templateSelected,
        updateResumeData,
        setSelectedTemplate: handleTemplateChange,
        resetResumeData,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export const useResumeContext = () => {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResumeContext must be used within a ResumeProvider');
  }
  return context;
};
