import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Cloud Analytics Platform',
      description: 'Real-time data analytics platform built with React and Node.js',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
      tech: ['React', 'Node.js', 'AWS'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'AI Image Recognition',
      description: 'Machine learning project for real-time image classification',
      image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=1000',
      tech: ['Python', 'TensorFlow', 'OpenCV'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Blockchain Explorer',
      description: 'Web application for exploring cryptocurrency transactions',
      image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1000',
      tech: ['TypeScript', 'Web3.js', 'GraphQL'],
      github: 'https://github.com',
      demo: 'https://example.com'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0b1e] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#12132d] rounded-lg overflow-hidden border border-purple-400/20 transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-purple-400/20 text-purple-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <Github className="w-5 h-5 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-1" />
                    Demo
                  </a>
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