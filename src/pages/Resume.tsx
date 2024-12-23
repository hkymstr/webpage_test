import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-[#0a0b1e] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Resume
        </h1>

        <div className="space-y-12">
          <section>
            <div className="flex items-center mb-6">
              <Briefcase className="w-6 h-6 text-purple-400 mr-2" />
              <h2 className="text-2xl font-semibold text-white">Experience</h2>
            </div>
            
            <div className="space-y-8">
              <div className="bg-[#12132d] p-6 rounded-lg border border-purple-400/20">
                <h3 className="text-xl font-semibold text-purple-400">Senior Software Engineer</h3>
                <p className="text-gray-400">Tech Corp • 2020 - Present</p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>• Led development of cloud-native applications</li>
                  <li>• Implemented CI/CD pipelines reducing deployment time by 50%</li>
                  <li>• Mentored junior developers and conducted code reviews</li>
                </ul>
              </div>
              
              <div className="bg-[#12132d] p-6 rounded-lg border border-purple-400/20">
                <h3 className="text-xl font-semibold text-purple-400">Software Developer</h3>
                <p className="text-gray-400">Innovation Labs • 2018 - 2020</p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>• Developed full-stack web applications</li>
                  <li>• Optimized database queries improving performance by 40%</li>
                  <li>• Collaborated with UX team to implement responsive designs</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 text-purple-400 mr-2" />
              <h2 className="text-2xl font-semibold text-white">Education</h2>
            </div>
            
            <div className="bg-[#12132d] p-6 rounded-lg border border-purple-400/20">
              <h3 className="text-xl font-semibold text-purple-400">B.S. Computer Science</h3>
              <p className="text-gray-400">Tech University • 2014 - 2018</p>
              <p className="mt-2 text-gray-300">Focus on Software Engineering and Machine Learning</p>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-6">
              <Award className="w-6 h-6 text-purple-400 mr-2" />
              <h2 className="text-2xl font-semibold text-white">Skills</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'AWS', 
                'Docker', 'GraphQL', 'PostgreSQL'].map((skill) => (
                <div key={skill} className="bg-[#12132d] p-4 rounded-lg border border-purple-400/20 text-center">
                  <span className="text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;