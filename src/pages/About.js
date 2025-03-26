import React from 'react';

function About() {
  return (
    <section className="min-h-screen pt-20 px-8 bg-gray-800 bg-opacity-80 bg-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')" }}>
      <h2 className="text-3xl font-bold text-white text-center mb-6 animate-fade-in-up">About Me</h2>
      <div className="max-w-2xl mx-auto text-center">
        <p className="mb-4">
          I’m a B.E. grad from Siddaganga Institute of Technology (2023) with a knack for coding cool stuff. I interned at Societe Generale, where I rocked React, Node.js, and SQL, building web apps that users loved.
        </p>
        <p className="mb-4">
          I’m passionate about creating scalable, user-friendly applications and always learning new tech. When I’m not coding, you’ll find me exploring new places or diving into a good sci-fi book.
        </p>
        <p className="text-teal-400 italic">
          Fun Fact: I once debugged a production issue while on a road trip—coding on the go is my superpower!
        </p>
      </div>
    </section>
  );
}

export default About;