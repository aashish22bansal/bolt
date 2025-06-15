import React, { useState } from 'react';
import { Github, ExternalLink, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  metrics: string[];
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Real-time Analytics Platform",
      description: "A comprehensive analytics platform processing millions of events per day with real-time dashboards and alerting.",
      fullDescription: "Built a complete real-time analytics platform using Apache Kafka, Spark Streaming, and ClickHouse. The system processes over 10 million events daily, providing real-time insights through interactive dashboards and automated alerting. Implemented advanced data modeling techniques and optimized query performance for sub-second response times.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "Apache Kafka", "Spark", "ClickHouse", "React", "Docker"],
      githubUrl: "#",
      liveUrl: "#",
      metrics: ["10M+ events/day", "Sub-second queries", "99.9% uptime"]
    },
    {
      id: 2,
      title: "ML Feature Store",
      description: "Scalable feature store serving machine learning models with low-latency feature retrieval and automatic feature engineering.",
      fullDescription: "Designed and implemented a production-grade ML feature store that serves 50+ machine learning models with sub-millisecond latency. The system includes automated feature engineering pipelines, data quality monitoring, and feature versioning. Built with a microservices architecture using Redis for low-latency serving and Spark for batch processing.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "Redis", "Spark", "MLflow", "Kubernetes", "FastAPI"],
      githubUrl: "#",
      liveUrl: "#",
      metrics: ["50+ ML models", "<1ms latency", "Automated monitoring"]
    },
    {
      id: 3,
      title: "Data Lake Migration",
      description: "Complete migration of legacy data warehouse to modern data lake architecture with improved performance and cost efficiency.",
      fullDescription: "Led the migration of a legacy Oracle data warehouse to a modern data lake architecture on AWS. The project involved redesigning ETL processes, implementing data cataloging, and establishing data governance frameworks. Achieved 60% cost reduction while improving query performance by 10x through optimized data partitioning and columnar storage formats.",
      image: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["AWS S3", "AWS Glue", "Spark", "Parquet", "Terraform", "Python"],
      githubUrl: "#",
      liveUrl: "#",
      metrics: ["60% cost reduction", "10x faster queries", "PB-scale data"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A showcase of impactful data engineering projects that demonstrate 
              technical expertise and business value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-0 hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 flex gap-4">
                      <a href={project.githubUrl} className="text-white hover:text-blue-200 transition-colors">
                        <Github size={24} />
                      </a>
                      <a href={project.liveUrl} className="text-white hover:text-blue-200 transition-colors">
                        <ExternalLink size={24} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-gray-500 text-sm">+{project.technologies.length - 3} more</span>
                    )}
                  </div>
                  
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {selectedProject.title}
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {selectedProject.metrics.map((metric, index) => (
                  <div key={index} className="text-center bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                      {metric.split(' ')[0]}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {metric.split(' ').slice(1).join(' ')}
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {selectedProject.fullDescription}
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={selectedProject.githubUrl}
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <Github size={20} />
                  View Code
                </a>
                <a 
                  href={selectedProject.liveUrl}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;