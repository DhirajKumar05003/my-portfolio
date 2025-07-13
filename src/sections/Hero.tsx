import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section className="relative py-20 text-white" id="hero">
      <div className="container mx-auto flex justify-center px-4">
        <div className="bg-gray-900/70 backdrop-blur rounded-xl shadow-lg p-8 w-full max-w-6xl flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-600/20 text-blue-300 font-semibold text-xs">
              Available for new projects
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Hi, I'm <span className="text-blue-400">Dhiraj Kumar</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
              Full-stack developer skilled in building scalable, API-driven web applications using Node.js, React.js, MongoDB, and MySQL. Strong in debugging, developing RESTful APIs, and effective in leadership and communication.
            </p>
            <a href="#contact" className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-bold text-white transition shadow-lg">
              Get in Touch
            </a>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-blue-600 bg-gray-800 flex items-center justify-center">
              <Image src="/hero.png" alt="Dhiraj Kumar" className="object-cover w-full h-full" width={256} height={256} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
