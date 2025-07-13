"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export const ExperienceSection = () => (
  <section id="experience" className="relative py-16 text-white">
    <div className="container mx-auto flex justify-center px-4">
      <div className="bg-gray-900/70 backdrop-blur rounded-xl shadow-lg p-8 w-full max-w-6xl flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <div className="space-y-4 mb-8 max-w-xl">
            <div className="bg-gray-800/70 rounded-xl shadow-lg p-6">
              <div className="font-semibold text-lg">AkashGanga Foundation (NGO)</div>
              <div className="text-gray-400">Feb 2024 – Aug 2024</div>
              <div className="text-sm text-gray-300 mt-2">Conducted sessions on social, educational, and disease awareness at old-age homes and camps.</div>
              <div className="text-xs text-gray-500 mt-2">Skills: Public speaking, social awareness, communication, leadership, teamwork</div>
            </div>
            <div className="bg-gray-800/70 rounded-xl shadow-lg p-6">
              <div className="font-semibold text-lg">Northern Railway Project (NSS CVS)</div>
              <div className="text-gray-400">Sept 2024 – Dec 2024</div>
              <div className="text-sm text-gray-300 mt-2">Promoted waste segregation and educated communities about biodegradable waste.</div>
              <div className="text-xs text-gray-500 mt-2">Skills: Environmental awareness, communication, coordination, project execution</div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-blue-600 bg-gray-800 flex items-center justify-center">
            <Image src="/experience.png" alt="Experience" className="object-cover w-full h-full" width={256} height={256} />
          </div>
        </div>
      </div>
    </div>
  </section>
); 