import React from 'react';
import { Github, Linkedin, Database } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const About: React.FC = () => {
  return (
    <div className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know more about my background and passion for Data Science"
        />
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl">
            <img 
              src="/Sowmya Headshot.jpg" 
              alt="Sowmya's Headshot" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="max-w-2xl text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Sowmya</span>
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Data Science student with 3.8 years of experience at Deloitte, I specialize in transforming complex data into actionable insights. My expertise spans Python, Artificial Intelligence, Machine Learning, and Deep Learning, allowing me to tackle challenging problems and deliver innovative solutions.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Currently pursuing a Master's degree in Data Science, I'm focused on developing advanced machine learning models and extracting meaningful insights from complex datasets. I believe in the transformative potential of AI and data science to solve real-world problems across industries.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              When I'm not coding or analyzing data, you can find me participating in Kaggle competitions, contributing to open-source projects, or exploring the latest research in machine learning.
            </p>
            
            <div className="flex justify-center md:justify-start space-x-4">
              <a 
                href="https://github.com/sowmya1907" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/sowmya-guduguntla-977790191/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://www.kaggle.com/work" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
              >
                <Database size={20} />
                <span>Kaggle</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;