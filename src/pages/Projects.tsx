import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  category: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Classification of Plant Seedlings using Deep Learning",
    description: "Machine learning algorithm [Convolutional Neural Network] is used to classify the image. The model thus implemented can be extended to a mobile device or my website as per developers need.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    techStack: ["Python", "Tensor Flow", "Keras", "Matplotlib"],
    githubUrl: "https://github.com/sowmya1907/Classification-of-Plant-Seedlings-using-Deep-Learning",
    category: ["Machine Learning", "Classification"]
  },
  {
    id: 2,
    title: "Vehicle Plate Recognition ",
    description: "Developed a deep learning-based system for vehicle license plate detection and recognition using a dataset of 1,800 annotated images.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    techStack: ["Python", "Computer Vision", "OCR", "YOLO"],
    githubUrl: "https://github.com/sowmya1907/Vehicle-Plate-Recognition",
    category: ["Machine Learning", "Object Detection"]
  },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(projects.flatMap(project => project.category)))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="My Projects" 
          subtitle="A showcase of my data science projects and applications"
        />
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <div className="flex items-center gap-2 mb-2 sm:mb-0">
            <Filter size={18} className="text-blue-600 dark:text-blue-400" />
            <span className="text-gray-700 dark:text-gray-300">Filter by:</span>
          </div>
          
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category)}
              className={`px-3 py-1 rounded-full text-sm transition-colors duration-300 ${
                filter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variant="primary"
                    size="sm"
                    className="flex items-center gap-1"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </Button>
                  
                  {project.demoUrl && (
                    <Button 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;