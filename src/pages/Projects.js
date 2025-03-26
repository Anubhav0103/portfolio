import React from 'react';
import portfolioImg from '../images/portfolio-screenshot.jpg';
import expenseImg from '../images/expense-tracker-screenshot.jpeg';
import chatImg from '../images/chat-app-screenshot.jpg';
import logImg from '../images/login-signup-screenshot.jpg';

function Projects() {
  const projects = [
    { name: 'Personal Portfolio', desc: 'React & Tailwind CSS site.', img: portfolioImg, url: 'https://github.com/Anubhav0103/portfolio' },
    { name: 'Expense Tracker', desc: 'Node.js, Express, SQL app.', img: expenseImg, url: 'https://github.com/Anubhav0103/expensetracker2' },
    { name: 'Chat App', desc: 'MongoDB, Express, WebSocket.', img: chatImg, url: 'https://github.com/Anubhav0103/chatapp' },
    { name: 'Librarian App', desc: 'Monitors issuing, returning date and due fine', img: logImg, url: 'https://github.com/Anubhav0103/library' },
  ];

  return (
    <section className="min-h-screen pt-16 sm:pt-20 px-4 sm:px-8 bg-gray-900 animate-fade-in">
      <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-sm sm:max-w-md md:max-w-4xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-gray-800 p-4 rounded shadow hover:shadow-purple-400 hover:scale-105 transition transform animate-slide-up"
          >
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-24 sm:h-32 object-cover rounded mb-2"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-white">{project.name}</h3>
            <p className="text-gray-400 text-sm sm:text-base">{project.desc}</p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-purple-400 text-sm sm:text-base"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;