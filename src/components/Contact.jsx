import React, { useRef } from 'react';
import NavigationCircles from './NavigationCircles';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent!');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send. Please try again');
        }
      );
  };

  return (
    <div id="contact" className="h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl font-light md:mb-14 mb-8">Connect with me</h2>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col lg:space-y-6 space-y-4">
        <label className="flex flex-col">
          Name *
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="md:w-[500px] w-[300px] h-13 pl-3 text-lg text-gray-600 dark:text-yellow-500 outline-0 border border-red-500 dark:border-yellow-500 placeholder-gray-400 dark:placeholder-yellow-500/50 transition-colors duration-500"
          />
        </label>
        <label className="flex flex-col">
          Email Address *
          <input
            type="email"
            name="email"
            required
            placeholder="abc@example.com"
            className="md:w-[500px] w-[300px] h-13 pl-3 text-lg text-gray-600 dark:text-yellow-500 outline-0 border border-red-500 dark:border-yellow-500 placeholder-gray-400 dark:placeholder-yellow-500/50 transition-colors duration-500"
          />
        </label>
        <label className="flex flex-col">
          Phone Number
          <input
            type="tel"
            name="phone"
            placeholder="(XXX) XXX-XXXX"
            className="md:w-[500px] w-[300px] h-13 pl-3 text-lg text-gray-600 dark:text-yellow-500 outline-0 border border-red-500 dark:border-yellow-500 placeholder-gray-400 dark:placeholder-yellow-500/50 transition-colors duration-500"
          />
        </label>
        <label className="flex flex-col">
          Message *
          <textarea
            name="message"
            required
            placeholder="Type your message here..."
            className="md:w-[500px] w-[300px] h-13 pl-3 text-lg text-gray-600 dark:text-yellow-500 outline-0 border border-red-500 dark:border-yellow-500 placeholder-gray-400 dark:placeholder-yellow-500/50 min-h-[100px] max-h-[200px] resize-y p-3 transition-colors duration-500"
          ></textarea>
        </label>
        <button
          type="submit"
          className="md:w-[500px] w-[300px] h-13 text-lg outline-0 bg-red-500 dark:bg-yellow-500 text-white dark:text-gray-900 hover:bg-red-700 dark:hover:bg-yellow-600 uppercase font-extrabold cursor-pointer tracking-wide shadow-md shadow-gray-700/20 transition-colors duration-500"
        >
          Submit
        </button>
      </form>
      <NavigationCircles section="contact" />
    </div>
  );
};

export default Contact;
