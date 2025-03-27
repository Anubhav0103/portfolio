import React from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../images/anubhav-profile.JPG';

function Home() {
  return (
    <section className="h-screen flex items-center justify-center pt-12 sm:pt-16 px-4 sm:px-8 relative overflow-hidden">
      <svg className="absolute inset-0 opacity-20" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
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
        <path
          d="M 50 500 Q 150 400 250 500 T 450 500"
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="1"
          className="float-line float-line-3"
        />
        <path
          d="M 700 100 Q 500 150 400 100 T 200 100"
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="1"
          className="float-line float-line-4"
        />
      </svg>
      <div className="relative z-0 text-center max-w-sm sm:max-w-md md:max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white animate-bounce">Anubhav Pandey</h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mt-2 animate-pulse">Full Stack Developer</p>
        <img
          src={profilePic}
          alt="Anubhav Pandey"
          className="mt-4 rounded-full mx-auto border-4 border-teal-400 hover:rotate-6 transition-transform w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover object-left"
        />
        <Link
          to="/contact"
          className="mt-4 sm:mt-6 inline-block bg-teal-400 text-gray-900 py-2 px-4 rounded hover:bg-purple-400 transition transform hover:scale-105 text-sm sm:text-base"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}

export default Home;