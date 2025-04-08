import React from 'react';
import { Download, FileText } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const Resume: React.FC = () => {
  return (
    <div className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="My Resume" 
          subtitle="Download my resume or view it directly on this page"
        />
        
        <div className="flex flex-col items-center mb-12">
          <Button 
            href="resume.pdf"
            download 
            variant="primary" 
            size="lg"
            className="flex items-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </Button>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 shadow-md">
          <div className="flex items-center justify-center mb-8">
            <FileText size={48} className="text-blue-600 dark:text-blue-400" />
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Sowmya Guduguntla</h2>
              <p className="text-gray-600 dark:text-gray-300"> Aspiring Data Scientist | Machine Learning & Artificial Intelligence Enthusiast</p>
              <div className="flex justify-center gap-4 mt-2 text-gray-600 dark:text-gray-300 text-sm">
                <span>Hyderabad, Telangana</span>
                <span>•</span>
                <span>sowmya190700@gmail.com</span>
                <span>•</span>
                <span>+91 7093478259</span>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-600">
                Education
              </h3>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <h4 className="font-semibold text-gray-800 dark:text-white">Master of Science in Data Science</h4>
                  <span className="text-gray-600 dark:text-gray-400">2024 - Present</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">Gitam University, Hyderabad</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">GPA: 8.12/10</p>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <h4 className="font-semibold text-gray-800 dark:text-white">Bachelor of Science in Computer Data Science and Analytics </h4>
                  <span className="text-gray-600 dark:text-gray-400">2017 - 2020</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">Loyola Academy Degree & PG College, Hyderabad</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">GPA: 8.99/10</p>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-600">
                Work Experience
              </h3>
              
              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <h4 className="font-semibold text-gray-800 dark:text-white">Associate Analyst- Analyst</h4>
                  <span className="text-gray-600 dark:text-gray-400">October 2020 - August 2024</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">Deloitte Support Services India Private Limited, Hyderabad, India </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Received 2 Spot Awards and 1 Applause Award for achieving a 30% reduction in third-party risk incidents through data-driven risk assessment and strategic compliance initiatives. </li>
                  <li>Demonstrated leadership in achieving Deloitte’s strategic goal of expanding VRCT coverage from 48% at the end of FY23 to 97% by October 2023, completing the transition 4 months ahead of schedule by effectively communicating with GPS practice teams.</li>
                  <li>Conducted 10+ risk-related projects, compiled and analysed 500+ weekly data points, and presented actionable insights to senior leadership, driving 15% faster decision-making on vendor risk. </li>
                  <li>Monitored 100+ vendors across business resilience, third-party risk, cybersecurity, and identity management, proactively identifying and mitigating 25+ potential threats per quarter. </li>
                  <li>Supported the implementation and training of 5+ new policies and risk tools, improving compliance adherence by 20% within the Third-Party Risk Program. </li>
                  <li>Raised awareness of operational risks from third-party engagements by delivering monthly risk briefings to 10+ stakeholders, resulting in a 40% reduction in risk exposure. </li>
                  <li>Partnered with Vendor Management to develop data-backed risk mitigation strategies for 50+ key third-party relationships, enhancing vendor accountability by 35%. </li>
                  <li>Led cross-departmental initiatives to standardize due diligence and risk assessment criteria across 4+ teams, ensuring a 100% consistent framework for third-party onboarding and reducing compliance gaps by 25%. </li>
                </ul>
              </div>
              </div>
              
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-600">
                Skills
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Programming Languages</h4>
                  <p className="text-gray-600 dark:text-gray-400">Python, R, SQL</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Data Science, AI & ML</h4>
                  <p className="text-gray-600 dark:text-gray-400">TensorFlow, Scikit-Learn, PyTorch, Pandas, NumPy, Open CV</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Data Visualization</h4>
                  <p className="text-gray-600 dark:text-gray-400">Tableau, Power BI, Matplotlib, Seaborn, Plotly</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Cloud & Tools</h4>
                  <p className="text-gray-600 dark:text-gray-400">AWS, Git, Jupyter, VS Code</p>
                </div>
                
            
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-600">
                Certifications
              </h3>
              
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
                <li>Certificate of Excellence in technical project competition organized during Machine Learning and Artificial Intelligence Internship</li>
                <li>A Two-Day National workshop on LLMs and Generative AI</li>
                <li>Power BI - Beginner</li>
                <li>AWS Cloud Practitioner Essentials</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;