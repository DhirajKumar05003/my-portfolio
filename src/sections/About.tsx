export const AboutSection = () => {
  return (
    <section className="py-16 text-white" id="about">
      <div className="flex justify-center px-4">
        <div className="bg-gray-900/70 backdrop-blur rounded-xl shadow-lg p-8 max-w-6xl w-full">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
            <p className="mb-8 text-center text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, massa sapien faucibus erat, nec ultricies elit urna eu nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-700 rounded-lg p-6 text-center shadow">
                <h3 className="font-semibold text-lg mb-2">Frontend Development</h3>
                <p className="text-gray-400 text-sm">React, Next.js, TypeScript, Tailwind CSS</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-6 text-center shadow">
                <h3 className="font-semibold text-lg mb-2">UI/UX Design</h3>
                <p className="text-gray-400 text-sm">Modern, responsive, user-focused interfaces</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-6 text-center shadow">
                <h3 className="font-semibold text-lg mb-2">API & Backend</h3>
                <p className="text-gray-400 text-sm">Node.js, REST APIs, integration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
