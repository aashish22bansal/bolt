import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Users } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      year: '2020 - Present',
      title: 'Senior Data Engineer',
      company: 'TechCorp Inc.',
      description: 'Lead data infrastructure projects, managing petabyte-scale data pipelines and mentoring junior engineers.',
    },
    {
      year: '2018 - 2020',
      title: 'Data Engineer',
      company: 'DataFlow Solutions',
      description: 'Built real-time streaming pipelines using Kafka and Spark, reducing data processing latency by 60%.',
    },
    {
      year: '2016 - 2018',
      title: 'Analytics Engineer',
      company: 'StartupXYZ',
      description: 'Developed ETL processes and data models, enabling data-driven decision making across the organization.',
    },
    {
      year: '2014 - 2016',
      title: 'Data Analyst',
      company: 'Business Intelligence Co.',
      description: 'Created dashboards and reports, providing insights that drove 25% increase in operational efficiency.',
    },
  ];

  const skills = [
    {
      category: 'Programming Languages',
      items: ['Python', 'SQL', 'Scala', 'Java', 'R'],
    },
    {
      category: 'Big Data & Processing',
      items: ['Apache Spark', 'Hadoop', 'Kafka', 'Flink', 'Storm'],
    },
    {
      category: 'Cloud Platforms',
      items: ['AWS', 'Google Cloud', 'Azure', 'Snowflake', 'Databricks'],
    },
    {
      category: 'Orchestration & Workflow',
      items: ['Apache Airflow', 'Prefect', 'Luigi', 'Dagster'],
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MongoDB', 'Cassandra', 'Redis', 'Elasticsearch'],
    },
    {
      category: 'DevOps & Infrastructure',
      items: ['Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Git'],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                About <span className="gradient-text">Me</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                I'm a passionate Senior Data Engineer with over 8 years of experience in designing
                and implementing scalable data infrastructure. I specialize in building robust
                data pipelines that can handle massive volumes of data while ensuring reliability,
                performance, and cost-effectiveness.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                My expertise spans across the entire data ecosystem - from data ingestion and
                processing to storage and analytics. I'm particularly passionate about real-time
                data processing, cloud-native architectures, and helping organizations become
                truly data-driven.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-600" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="text-blue-600" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">8+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="text-blue-600" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">AWS Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-blue-600" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">Team Lead</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl font-bold mb-4">👨‍💻</div>
                  <div className="text-xl font-semibold">Alex Chen</div>
                  <div className="text-blue-100">Senior Data Engineer</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              My career progression in data engineering
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 dark:bg-blue-800"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg card-hover">
                    <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      {exp.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    <div className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                      {exp.company}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {exp.description}
                    </p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Technologies and tools I work with
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md card-hover"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;