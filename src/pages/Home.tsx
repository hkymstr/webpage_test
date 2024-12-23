import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20">
        <div className="content-backdrop rounded-lg p-8 md:p-12 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text mb-4">
            John Doe
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Software Engineer & Racing Enthusiast
          </p>
          
          <div className="mt-6 md:mt-8 flex justify-center space-x-6">
            <a 
              href="https://github.com" 
              className="text-gray-300 hover:text-purple-400 transition-colors p-2"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a 
              href="https://linkedin.com" 
              className="text-gray-300 hover:text-purple-400 transition-colors p-2"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="text-gray-300 hover:text-purple-400 transition-colors p-2"
              aria-label="Email Contact"
            >
              <Mail className="w-6 h-6 md:w-8 md:h-8" />
            </a>
          </div>
          
          <div className="mt-8 md:mt-12">
            <p className="text-base md:text-lg text-gray-300">
              Passionate about creating elegant solutions to complex problems.
              When I'm not coding, you'll find me on the racetrack pushing the limits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;