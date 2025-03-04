import React from 'react';
import { Calendar, Building, Briefcase } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "Analyst",
    company: "Deloitte Support Services India Private Limited",
    location: "Hyderabad, Telangana",
    period: "June 2022 - August 2024",
    description: [
      "Demonstrated leadership in achieving Deloitte’s strategic goal of expanding VRCT coverage from 48% at the end of FY23 to 97% by October 2023, completing the transition 4 months ahead of schedule by effectively communicating with GPS practice teams."
    ]
  },
  {
    id: 2,
    title: "Associate Analyst",
    company: "Deloitte Support Services India Private Limited",
    location: "Hyderabad, Telangana",
    period: "October 2020 - May 2022",
    description: [
      "Supported the implementation and training of 5+ new policies and risk tools, improving compliance adherence by 20% within the Third-Party Risk Program.",
      "Monitored 100+ vendors across business resilience, third-party risk, cybersecurity, and identity management, proactively identifying and mitigating 25+ potential threats per quarter."
    ]
  },
];

const Experience: React.FC = () => {
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="My Experience" 
          subtitle="A timeline of my professional journey"
        />
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-900"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500 z-10"></div>
                
                <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Date */}
                  <div className="md:w-1/2 mb-4 md:mb-0 flex justify-center md:justify-start items-center">
                    <div className={`flex items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} px-4`}>
                      <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-md">
                        <Calendar size={18} className="text-blue-600 dark:text-blue-400" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-1/2 px-4">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{exp.title}</h3>
                      
                      <div className="flex items-center gap-2 mb-1">
                        <Building size={16} className="text-blue-600 dark:text-blue-400" />
                        <span className="text-gray-700 dark:text-gray-300">{exp.company}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <Briefcase size={16} className="text-blue-600 dark:text-blue-400" />
                        <span className="text-gray-600 dark:text-gray-400">{exp.location}</span>
                      </div>
                      
                      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;