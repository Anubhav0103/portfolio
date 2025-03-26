import React from 'react';

function Experience() {
  return (
    <section className="min-h-screen pt-32 px-8 bg-gray-800 relative overflow-hidden flex items-center">
      {/* Subtle Background Animation (Floating Lines) */}
      <svg className="absolute inset-0 opacity-10" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#2DD4BF', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#A78BFA', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path
          d="M 10 50 Q 200 100 300 50 T 500 50"
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="1"
          className="float-line float-line-1"
        />
        <path
          d="M 600 300 Q 400 200 300 300 T 100 300"
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="1"
          className="float-line float-line-2"
        />
      </svg>
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12 animate-fade-in-up">Experience</h2>
        <div className="relative">
          {/* Timeline Line with Drawing Animation */}
          <div className="absolute left-1/2 w-1 bg-teal-400 h-40 transform -translate-x-1/2 animate-draw-line"></div>
          {/* Internship Entry */}
          <div className="relative bg-gray-900 p-6 rounded-lg shadow-lg animate-slide-in-left">
            <div className="absolute w-6 h-6 bg-teal-400 rounded-full left-1/2 transform -translate-x-1/2 -mt-2"></div>
            <h3 className="text-xl font-semibold text-white">Full Stack Developer Intern</h3>
            <p className="text-teal-400">Societe Generale, India | Mar 2023 - Aug 2024</p>
            <p className="text-gray-300 mt-2">
              During my internship at Societe Generale, I worked on a variety of full-stack development projects, contributing to both frontend and backend development. I collaborated closely with a team of developers and stakeholders to deliver high-quality solutions for internal tools and client-facing applications.
            </p>
            <ul className="list-disc ml-5 mt-2 text-gray-300">
              <li>Developed responsive web applications using React, Node.js, and SQL, improving user engagement through intuitive UI/UX designs.</li>
              <li>Integrated RESTful APIs to connect frontend and backend, enabling seamless data flow and reducing latency in data retrieval.</li>
              <li>Optimized database queries in SQL, reducing load times for key features, which significantly improved application performance.</li>
              <li>Collaborated with a team of 5 developers to deliver features on tight deadlines, ensuring 100% on-time delivery and meeting all project milestones.</li>
              <li>Implemented user authentication with JWT, enhancing app security by protecting sensitive user data and preventing unauthorized access.</li>
              <li>Participated in code reviews and debugging sessions, improving code quality and reducing bugs across the project.</li>
              <li>Documented technical processes and workflows, creating guides that helped onboard new team members faster.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;