import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "TechFlow Solutions",
      position: "Senior Data Engineer",
      duration: "2022 - Present",
      location: "San Francisco, CA",
      description: "Lead data engineering initiatives for a high-growth fintech startup, managing petabyte-scale data processing and real-time analytics platforms.",
      achievements: [
        "Designed and implemented a real-time fraud detection system processing 10M+ transactions daily",
        "Reduced data pipeline processing time by 70% through optimization and architectural improvements",
        "Built ML feature store serving 50+ models with sub-millisecond latency",
        "Mentored junior engineers and established data engineering best practices"
      ]
    },
    {
      company: "DataCorp Analytics",
      position: "Data Engineer",
      duration: "2020 - 2022",
      location: "New York, NY",
      description: "Developed scalable data pipelines and analytics infrastructure for enterprise clients across multiple industries.",
      achievements: [
        "Built end-to-end ETL pipelines processing 500GB+ daily data volume",
        "Implemented data quality monitoring reducing data incidents by 85%",
        "Migrated legacy systems to modern cloud-native architecture on AWS",
        "Delivered custom analytics solutions for Fortune 500 clients"
      ]
    },
    {
      company: "StartupX",
      position: "Junior Data Engineer",
      duration: "2019 - 2020",
      location: "Austin, TX",
      description: "Kickstarted my data engineering career by building the foundational data infrastructure for a growing e-commerce platform.",
      achievements: [
        "Established the first data warehouse and reporting infrastructure",
        "Automated manual data processes saving 20+ hours per week",
        "Created customer analytics dashboards driving business decisions",
        "Collaborated with product team to implement event tracking"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Experience
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                
                <div className="ml-20 bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-2">
                        <div className="flex items-center gap-2">
                          <Building size={16} />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;