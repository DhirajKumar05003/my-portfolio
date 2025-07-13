"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export const EducationSection = () => (
  <section id="education" className="relative py-16 text-white">
    <div className="container mx-auto flex justify-center px-4">
      <div className="bg-gray-900/70 backdrop-blur rounded-xl shadow-lg p-8 w-full max-w-6xl flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="space-y-4 mb-8 max-w-xl">
            <div className="bg-gray-800/70 rounded-xl shadow-lg p-6">
              <div className="font-semibold text-lg">Master&apos;s in Computer Application</div>
              <div className="text-gray-400">Manav Rachna International Institute of Research and Studies</div>
              <div className="text-sm text-gray-500">Year of Passing: 2026 | CGPA: 7.85*/10</div>
            </div>
            <div className="bg-gray-800/70 rounded-xl shadow-lg p-6">
              <div className="font-semibold text-lg">Bachelor&apos;s in Computer Science (Honours)</div>
              <div className="text-gray-400">CVS College, University of Delhi</div>
              <div className="text-sm text-gray-500">Year of Passing: 2024 | CGPA: 7.189</div>
            </div>
            <div className="bg-gray-800/70 rounded-xl shadow-lg p-6">
              <div className="font-semibold text-lg">Senior Secondary (12th Std)</div>
              <div className="text-gray-400">DAV Public School, Patna, Bihar</div>
              <div className="text-sm text-gray-500">Year of Passing: 2021 | Percentage: 94.25%</div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-blue-600 bg-gray-800 flex items-center justify-center">
            <Image src="/education.png" alt="Education" className="object-cover w-full h-full" width={256} height={256} />
          </div>
        </div>
      </div>
    </div>
  </section>
); 