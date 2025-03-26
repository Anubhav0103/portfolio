import React from 'react';
import htmlLogo from '../images/html-logo.png';
import cssLogo from '../images/css-logo.png';
import tailwindLogo from '../images/tailwind-logo.png';
import jsLogo from '../images/javascript-logo.png';
import reactLogo from '../images/react-logo.png';
import nodeLogo from '../images/nodejs-logo.png';
import expressLogo from '../images/express-logo.png';
import mongodbLogo from '../images/mongodb-logo.png';
import sqlLogo from '../images/sql-logo.png';
import pythonLogo from '../images/python-logo.png';
import flaskLogo from '../images/flask-logo.png';
import cppLogo from '../images/cpp-logo.png';

function Skills() {
  const skills = [
    { name: 'HTML', logo: htmlLogo, level: '100%', desc: 'Built semantic, accessible web pages.' },
    { name: 'CSS', logo: cssLogo, level: '90%', desc: 'Crafted responsive designs with modern layouts.' },
    { name: 'Tailwind CSS', logo: tailwindLogo, level: '85%', desc: 'Styled apps with utility-first CSS.' },
    { name: 'JavaScript', logo: jsLogo, level: '100%', desc: 'Developed dynamic, interactive features.' },
    { name: 'React', logo: reactLogo, level: '85%', desc: 'Built scalable SPAs with React.' },
    { name: 'Node.js', logo: nodeLogo, level: '100%', desc: 'Created RESTful APIs and servers.' },
    { name: 'Express.js', logo: expressLogo, level: '100%', desc: 'Built backend routes and middleware.' },
    { name: 'MongoDB', logo: mongodbLogo, level: '100%', desc: 'Managed NoSQL databases for apps.' },
    { name: 'SQL', logo: sqlLogo, level: '100%', desc: 'Optimized relational database queries.' },
    { name: 'Python', logo: pythonLogo, level: '50%', desc: 'Developed scripts and web apps.' },
    { name: 'Flask', logo: flaskLogo, level: '70%', desc: 'Built lightweight web apps with Flask.' },
    { name: 'C++ (DSA)', logo: cppLogo, level: '50%', desc: 'Solved complex problems with DSA.' },
  ];

  return (
    <section className="min-h-screen pt-24 px-8 bg-gray-900 relative overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-purple-400/10 opacity-30"></div>
      <h2 className="text-3xl font-bold text-white text-center mb-12 relative z-10">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative z-10">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-teal-400 transition transform hover:-translate-y-2 animate-slide-up flex flex-col items-center"
          >
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              className="w-20 h-20 mb-4 group-hover:scale-110 transition-transform"
            />
            <span className="text-lg font-semibold text-white">{skill.name}</span>
            <div className="w-full bg-gray-700 rounded-full h-2.5 mt-4">
              <div
                className="bg-teal-400 h-2.5 rounded-full animate-fill"
                style={{ '--target-width': skill.level }} // Set custom property
              ></div>
            </div>
            <p className="mt-4 text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              {skill.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;