export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-12 border-t border-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <span className="font-bold text-white">Dhiraj Kumar</span> &copy; {new Date().getFullYear()}<br />
          <span className="text-xs">Full-Stack Developer | New Delhi, India</span>
        </div>
        <nav className="flex gap-6 text-sm">
          <a href="#hero" className="hover:text-blue-400 transition">Home</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </nav>
      </div>
    </footer>
  );
};
