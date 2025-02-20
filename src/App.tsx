import React from 'react';
import { motion } from "framer-motion";
// this is how you import images in React:
import reactLogo from "./assets/react.svg";
// import hero from "./assets/hero.png";
import tailwind from "./assets/tailwind.svg";
// this is how you import images from public  in Vite:
import viteLogo from "/vite.svg";


function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full z-50 top-0 start-0 border-b border-gray-700">
      <nav className="bg-gray-900 bg-opacity-80 backdrop-blur-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">React Vite Starter</span>
          </a>

          <div className="flex md:order-2">
            <a
              href="#get-started"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Get started
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 ml-2"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>

          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? '' : 'hidden'}`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-700 rounded-lg bg-gray-800 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <a href="#hero" className="block py-2 px-3 text-white rounded-sm hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="block py-2 px-3 text-white rounded-sm hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0">
                  Features
                </a>
              </li>
              <li>
                <a href="#get-started" className="block py-2 px-3 text-white rounded-sm hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0 md:hidden">
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-40">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-4 md:mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to your React 18 Starter Kit
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8 md:mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Powered by Vite and Tailwind CSS
        </motion.p>
        <motion.div
          className="flex flex-col items-center space-y-8 md:flex-row md:space-y-0 md:space-x-20 md:justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
            <img
              src={viteLogo}
              className="h-20 md:h-32 hover:scale-110 transition-transform"
              alt="Vite logo"
            />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img
              src={reactLogo}
              className="h-20 md:h-32 hover:scale-110 transition-transform"
              alt="React logo"
            />
          </a>
          <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
            <img
              src={tailwind}
              className="h-20 md:h-32 hover:scale-110 transition-transform"
              alt="Tailwind CSS logo"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      title: "Fast Development",
      description: "Leverage Vite for lightning-fast hot module replacement and optimized builds.",
    },
    {
      title: "Modern React",
      description: "Built with React 18, taking advantage of the latest features and best practices.",
    },
    {
      title: "Tailwind CSS",
      description: "Rapidly build custom user interfaces without leaving your HTML.",
    },
    {
      title: "TypeScript Ready",
      description: "Full TypeScript support out of the box for enhanced developer experience.",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-20 bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Features</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 rounded-lg p-4 md:p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm md:text-base">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GetStarted() {
  return (
    <section id="get-started" className="py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Get Started</h2>
        <motion.div
          className="bg-gray-700 rounded-lg p-4 md:p-6 inline-block w-full md:w-auto overflow-x-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <pre className="text-left text-sm md:text-base whitespace-pre-wrap md:whitespace-pre">
            <code>
              git clone https://github.com/BenGardiner123/react-vite-starter.git
              <br />
              cd react-vite-starter
              <br />
              npm install
              <br />
              npm run dev
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 py-6 md:py-8">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} BenGardiner123. Licensed under MIT.
        </p>
        <a
          href="https://github.com/BenGardiner123"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-400 hover:text-blue-500 transition-colors"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Header />
      <Hero />
      <Features />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default App;