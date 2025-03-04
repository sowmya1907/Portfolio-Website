import React from 'react';
import { Code, Database, BarChart, Brain, Server, FileSpreadsheet } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  id: number;
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: "Programming",
    icon: <Code size={24} />,
    skills: [
      { name: "Python", level: 80 },
      { name: "R", level: 70 },
      { name: "SQL", level: 75 },
    ]
  },
  {
    id: 2,
    title: "Data Tools",
    icon: <Database size={24} />,
    skills: [
      { name: "Power BI", level: 70 },
      { name: "Tableau", level: 70 },
      { name: "Excel", level: 80 },
    ]
  },
  {
    id: 3,
    title: "ML & AI",
    icon: <Brain size={24} />,
    skills: [
      { name: "TensorFlow", level: 60 },
      { name: "Scikit-Learn", level: 75 },
      { name: "Deep Learning", level: 70 },
    ]
  },
  {
    id: 4,
    title: "Data Analysis",
    icon: <BarChart size={24} />,
    skills: [
      { name: "Statistical Analysis", level: 85 },
      { name: "Data Visualization", level: 90 },
      { name: "Exploratory Analysis", level: 80 },
    ]
  },
];

const Skills: React.FC = () => {
  return (
    <div className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="My Skills" 
          subtitle="A comprehensive overview of my technical expertise and proficiency"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.id} 
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;