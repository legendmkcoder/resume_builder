import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useResumeContext } from '../contexts/ResumeContext';
import ModernTemplate from '../components/templates/ModernTemplate';
import MinimalTemplate from '../components/templates/MinimalTemplate';
import CreativeTemplate from '../components/templates/CreativeTemplate';
import { Check } from 'lucide-react';

const templates = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'A clean and professional template with a modern touch',
    component: ModernTemplate,
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'A minimalist design that lets your content shine',
    component: MinimalTemplate,
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'A bold and creative design that stands out',
    component: CreativeTemplate,
  },
];

const Templates = () => {
  const navigate = useNavigate();
  const { selectedTemplate, setSelectedTemplate } = useResumeContext();

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
    setTimeout(() => {
      navigate('/builder');
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Choose Your Template</h1>
          <p className="mt-4 text-xl text-gray-600">
            Select a template that best represents your professional style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <div
              key={template.id}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer transform transition-all duration-200 hover:scale-[1.02] hover:shadow-xl"
              onClick={() => handleTemplateSelect(template.id)}
            >
              {/* Template Preview */}
              <div className="relative bg-gray-50 h-[280px] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="transform scale-[0.25] origin-center">
                    <template.component />
                  </div>
                </div>
                {selectedTemplate === template.id && (
                  <div className="absolute top-2 right-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      <Check className="h-3 w-3 mr-1" />
                      Selected
                    </span>
                  </div>
                )}
              </div>
              
              {/* Template Info */}
              <div className="p-4 border-t border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">{template.name}</h3>
                <p className="mt-1 text-sm text-gray-600 mb-3">{template.description}</p>
                <div
                  className={`inline-flex justify-center items-center px-3 py-2 w-full border rounded-md text-sm font-medium transition-colors
                    ${
                      selectedTemplate === template.id
                        ? 'border-blue-600 text-blue-600 bg-blue-50'
                        : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
                    }
                  `}
                >
                  {selectedTemplate === template.id ? 'Current Template' : 'Use this template'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Templates;