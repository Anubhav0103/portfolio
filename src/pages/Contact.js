import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_4s5ztbn', // Your Service ID
      'template_vuyq2fm', // Your Template ID
      form.current,
      'JdjTf5zW0LCckjY_s' // Your Public Key
    )
      .then((result) => {
        alert('Message sent successfully!');
        form.current.reset();
      }, (error) => {
        alert('Failed to send message. Please try again.');
        console.log(error.text);
      });
  };

  return (
    <section className="min-h-screen pt-16 sm:pt-20 px-4 sm:px-8 bg-gray-800 animate-fade-in-up">
      <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6">Contact</h2>
      <div className="max-w-sm sm:max-w-md md:max-w-lg mx-auto">
        <p className="text-center mb-4 text-sm sm:text-base text-gray-300">
          Email: <a href="mailto:anubhav06cd@gmail.com" className="text-teal-400 hover:text-purple-400">anubhav06cd@gmail.com</a> <br />
          Phone: +91 7032534877 <br />
          GitHub: <a href="https://github.com/Anubhav0103" className="text-teal-400 hover:text-purple-400">github.com/Anubhav0103</a>
        </p>
        <form ref={form} onSubmit={sendEmail} className="bg-gray-900 p-4 sm:p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-white mb-2 text-sm sm:text-base" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-teal-400 text-sm sm:text-base"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2 text-sm sm:text-base" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-teal-400 text-sm sm:text-base"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2 text-sm sm:text-base" htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-teal-400 text-sm sm:text-base"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-400 text-gray-900 py-2 rounded hover:bg-purple-400 transition transform hover:scale-105 text-sm sm:text-base"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;