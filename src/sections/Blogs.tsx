"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export const BlogsSection = () => (
  <section id="blogs" className="py-16 bg-gray-900/80 text-white">
    <div className="container mx-auto max-w-3xl px-4">
      <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl font-bold mb-6 text-center">Blogs</motion.h2>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="mb-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        <div className="space-y-4 flex-1">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-gray-800/70 rounded-xl shadow-lg p-6">
            <div className="font-semibold">How to Build a Portfolio with Next.js</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="bg-gray-800/70 rounded-xl shadow-lg p-6">
            <div className="font-semibold">Modern Animations with Framer Motion</div>
          </motion.div>
        </div>
        <div className="flex justify-center md:justify-end flex-1">
          <Image src="/memoji-avatar-4.png" alt="Blogs" width={160} height={160} className="rounded-lg shadow-lg" />
        </div>
      </motion.div>
    </div>
  </section>
); 