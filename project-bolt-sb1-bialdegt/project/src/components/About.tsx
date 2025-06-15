import React from 'react';
import { Database, BarChart3, Zap, Shield } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Database className="w-8 h-8 text-blue-600" />,
      title: "Data Architecture",
      description: "Designing scalable data warehouses and lakehouse architectures"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-600" />,
      title: "Analytics & BI",
      description: "Building comprehensive dashboards and analytics platforms"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Real-time Processing",
      description: "Implementing streaming data pipelines and event-driven systems"
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Data Governance",
      description: "Ensuring data quality, security, and compliance standards"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Passionate about turning data into insights
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                With over 5 years of experience in data engineering, I specialize in building 
                robust, scalable data infrastructure that empowers organizations to make 
                data-driven decisions. My expertise spans across cloud platforms, big data 
                technologies, and modern data stack implementations.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                I'm passionate about solving complex data challenges and have successfully 
                delivered end-to-end data solutions that have processed petabytes of data 
                and supported millions of users across various industries including fintech, 
                e-commerce, and healthcare.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-lg">
                  AWS Certified
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-lg">
                  Databricks Certified
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-lg">
                  Snowflake Certified
                </span>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;