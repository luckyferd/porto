"use client";

import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>
      <form
        target="_blank"
        action="https://formsubmit.co/luckyferdiansyah31@gmail.com"
        method="POST"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="p-3 rounded-lg bg-white/10 border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 transition w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="p-3 rounded-lg bg-white/10 border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 transition w-full"
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            rows={6}
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg bg-white/10 border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-yellow-600 hover:bg-red-700 rounded-lg font-semibold transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
