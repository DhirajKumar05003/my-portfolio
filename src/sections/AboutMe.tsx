"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export const AboutMeSection = () => (
  <section id="aboutme" className="relative py-16 text-white">
    <div className="container mx-auto flex justify-center px-4">
      <div className="bg-gray-900/70 backdrop-blur rounded-xl shadow-lg p-8 w-full max-w-6xl flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
            I&apos;m Dhiraj Kumar, a passionate full-stack developer from New Delhi, India. I specialize in building scalable, API-driven web applications using modern technologies like Node.js, React.js, MongoDB, and MySQL. With strong debugging skills and experience in developing RESTful APIs, I&apos;m also effective in leadership and communication. I have proven involvement in student tech communities and love contributing to meaningful projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
            <div><strong>Location:</strong> New Delhi, Delhi, India</div>
            <div><strong>Email:</strong> dhiraj9693279@gmail.com</div>
            <div><strong>Phone:</strong> +91 9693279793</div>
            <div><strong>Date of Birth:</strong> 05 October, 2003</div>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-blue-600 bg-gray-800 flex items-center justify-center">
            <Image src="/about me.png" alt="Dhiraj Kumar" className="object-cover w-full h-full" width={256} height={256} />
          </div>
        </div>
      </div>
    </div>
  </section>
); 