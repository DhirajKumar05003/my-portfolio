'use client';

export const ContactSection = () => {
  return (
    <section className="py-16 text-white" id="contact">
      <div className="flex justify-center px-4">
        <div className="bg-gray-900/70 backdrop-blur rounded-xl shadow-lg p-8 max-w-6xl w-full">
          <div className="container mx-auto max-w-lg px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
            <p className="mb-8 text-center text-gray-400">Have a project or want to work together? Send me a message below.</p>
            {/* Contact Information */}
            <div className="mb-8 bg-gray-800/70 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-4 text-center">Get in Touch</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-center">
                  <span className="text-gray-400 mr-2">📧</span>
                  <a href="mailto:dhiraj9693279@gmail.com" className="text-blue-400 hover:text-blue-300">dhiraj9693279@gmail.com</a>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-gray-400 mr-2">📱</span>
                  <a href="tel:+919693279793" className="text-blue-400 hover:text-blue-300">+91 9693279793</a>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-gray-400 mr-2">📍</span>
                  <span>New Delhi, Delhi, India</span>
                </div>
              </div>
              {/* Social Links */}
              <div className="mt-6 flex justify-center space-x-4">
                <a 
                  href="https://linkedin.com/in/dhiraj-kumar-73064822b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/DhirajKumar05003" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
            {/* Native HTML Form for Formspree */}
            <form
              action="https://formspree.io/f/mnnzajep"
              method="POST"
              className="space-y-6 bg-gray-800/70 p-8 rounded-xl shadow-lg"
            >
              <div>
                <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Type your message here..."
                  rows={5}
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded font-bold transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
