import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 98 },
        { name: "Scala", level: 85 },
        { name: "Java", level: 80 },
        { name: "R", level: 75 }
      ]
    },
    {
      title: "Big Data & Analytics",
      skills: [
        { name: "Apache Spark", level: 90 },
        { name: "Apache Kafka", level: 88 },
        { name: "Hadoop", level: 85 },
        { name: "Databricks", level: 92 },
        { name: "Apache Airflow", level: 90 }
      ]
    },
    {
      title: "Cloud Platforms",
      skills: [
        { name: "AWS", level: 95 },
        { name: "Azure", level: 85 },
        { name: "GCP", level: 80 },
        { name: "Snowflake", level: 90 },
        { name: "Redshift", level: 88 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Docker", level: 90 },
        { name: "Kubernetes", level: 85 },
        { name: "Terraform", level: 88 },
        { name: "dbt", level: 92 },
        { name: "Tableau", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Expertise across the modern data stack with a focus on scalable, 
              reliable, and performant solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-blue-600 dark:text-blue-400 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
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
    </section>
  );
};

export default Skills;