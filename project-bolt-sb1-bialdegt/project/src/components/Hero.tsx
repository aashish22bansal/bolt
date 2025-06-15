import React from 'react';
import { Download, Mail, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fadeInUp">
            <img
              src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-xl"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fadeInUp animation-delay-200">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Alex</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 animate-fadeInUp animation-delay-400">
            Senior Data Engineer
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animation-delay-600">
            I transform raw data into actionable insights through robust data pipelines, 
            scalable architectures, and cutting-edge analytics platforms. With 5+ years of experience 
            in building enterprise-grade data solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeInUp animation-delay-800">
            <button
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Get In Touch
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
          </div>
          
          <div className="flex justify-center gap-6 animate-fadeInUp animation-delay-1000">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;