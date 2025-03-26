import React from 'react';
import portfolioImg from '../images/portfolio-screenshot.jpg';
import expenseImg from '../images/expense-tracker-screenshot.jpeg';
import chatImg from '../images/chat-app-screenshot.jpg';
import logImg from '../images/login-signup-screenshot.jpg';

function Projects() {
  const projects = [
    { name: 'Personal Portfolio', desc: 'React & Tailwind CSS site.', img: portfolioImg },
    { name: 'Expense Tracker', desc: 'Node.js, Express, SQL app.', img: expenseImg },
    { name: 'Chat App', desc: 'MongoDB, Express, WebSocket.', img: chatImg },
    { name: 'Login/Signup Form', desc: 'React & Tailwind CSS form with validation.', img: logImg },
  ];

  return (
    <section className="min-h-screen pt-20 px-8 bg-gray-900 animate-fade-in">
      <h2 className="text-3xl font-bold text-white text-center mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-gray-800 p-4 rounded shadow hover:shadow-purple-400 hover:scale-105 transition transform animate-slide-up"
          >
            <img src={project.img} alt={project.name} className="w-full h-32 object-cover rounded mb-2" />
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p>{project.desc}</p>
            <a href="#" className="text-teal-400 hover:text-purple-400">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;