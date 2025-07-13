import Image from 'next/image';
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import memojiComputer from "@/assets/images/memoji-computer.png";

const portfolioProjects = [
  {
    company: "Full Stack Development",
    year: "2025",
    title: "Restaurant Application",
    results: [
      { title: "Built scalable web app for restaurant menu registration" },
      { title: "Integrated RESTful APIs and MongoDB for dish data" },
      { title: "Implemented table booking system with real-time updates" },
    ],
    link: "#",
    image: darkSaasLandingPage,
    tech: "Node.js, Express.js, React.js, MongoDB, HTML, CSS, Bootstrap"
  },
  {
    company: "Web Development",
    year: "2024",
    title: "IKIGAI Chart Generator",
    results: [
      { title: "Created interactive web app for career alignment" },
      { title: "Focused on responsive UI and logic-driven evaluation" },
      { title: "Helped users align passions and careers using IKIGAI concept" },
    ],
    link: "#",
    image: lightSaasLandingPage,
    tech: "HTML, CSS, JavaScript"
  },
  {
    company: "Portfolio Project",
    year: "2024",
    title: "Personal Portfolio Website",
    results: [
      { title: "Modern responsive design with cosmic animations" },
      { title: "Built with Next.js, TypeScript, and Tailwind CSS" },
      { title: "Integrated with Three.js for interactive background" },
    ],
    link: "#",
    image: memojiComputer,
    tech: "Next.js, TypeScript, Tailwind CSS, Three.js, Framer Motion"
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project, index) => (
            <div key={index} className="bg-gray-800/70 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                  width={400}
                  height={200}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs text-gray-300 mb-1">{project.company} • {project.year}</div>
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-3 mb-4">
                  {project.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <p className="text-sm text-gray-300">{result.title}</p>
                    </div>
                  ))}
                </div>
                <div className="text-xs text-gray-400 mb-4">
                  <strong>Tech Stack:</strong> {project.tech}
                </div>
                <a
                  href={project.link}
                  className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-semibold transition-colors duration-200"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
