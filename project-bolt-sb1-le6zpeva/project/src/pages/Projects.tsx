import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Cloud, Zap, BarChart3 } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Data Pipeline', 'Real-time Processing', 'Cloud Infrastructure', 'Analytics'];

  const projects = [
    {
      id: 1,
      title: 'Real-time Fraud Detection Pipeline',
      category: 'Real-time Processing',
      description: 'Built a real-time fraud detection system processing 100K+ transactions per second using Kafka, Spark Streaming, and ML models.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Apache Kafka', 'Spark Streaming', 'Python', 'Redis', 'AWS'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      icon: <Zap className="text-yellow-500" size={24} />,
    },
    {
      id: 2,
      title: 'Multi-Cloud Data Lake Architecture',
      category: 'Cloud Infrastructure',
      description: 'Designed and implemented a multi-cloud data lake architecture handling 50TB+ daily data ingestion across AWS and GCP.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['AWS S3', 'Google Cloud Storage', 'Terraform', 'Apache Airflow', 'Snowflake'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      icon: <Cloud className="text-blue-500" size={24} />,
    },
    {
      id: 3,
      title: 'Customer Analytics Data Warehouse',
      category: 'Analytics',
      description: 'Built a comprehensive customer analytics platform with automated ETL pipelines and self-service BI capabilities.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['dbt', 'Snowflake', 'Python', 'Tableau', 'Docker'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      icon: <BarChart3 className="text-green-500" size={24} />,
    },
    {
      id: 4,
      title: 'IoT Data Processing Platform',
      category: 'Data Pipeline',
      description: 'Developed a scalable IoT data processing platform handling sensor data from 10K+ devices with sub-second latency.',
      image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Apache Kafka', 'InfluxDB', 'Grafana', 'Kubernetes', 'Go'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      icon: <Database className="text-purple-500" size={24} />,
    },
    {
      id: 5,
      title: 'Machine Learning Feature Store',
      category: 'Data Pipeline',
      description: 'Created a centralized feature store for ML teams, reducing feature development time by 70% and ensuring consistency.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Apache Spark', 'Delta Lake', 'MLflow', 'FastAPI', 'AWS'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      icon: <Database className="text-indigo-500" size={24} />,
    },
    {
      id: 6,
      title: 'Event-Driven Microservices Architecture',
      category: 'Real-time Processing',
      description: 'Architected an event-driven system for order processing, improving system reliability and reducing coupling.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Apache Kafka', 'Docker', 'Kubernetes', 'PostgreSQL', 'Node.js'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      icon: <Zap className="text-orange-500" size={24} />,
    },
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A showcase of data engineering projects that demonstrate my expertise in building
              scalable, reliable, and efficient data infrastructure solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md">
                    {project.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Interested in Working Together?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              I'm always excited to take on new challenges and build innovative data solutions.
              Let's discuss how I can help with your next project.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;