// this is how you import images in React:
import reactLogo from "./assets/react.svg";
// import hero from "./assets/hero.png";
import tailwind from "./assets/tailwind.svg";
// this is how you import images from public  in Vite:
import viteLogo from "/vite.svg";

import "./App.css";

function App() {
  return (
    <>
      <div className="relative overflow-hidden bg-black">
        <div className="grid h-screen sm:grid-cols-1 sm:pb-40 sm:pt-24 lg:grid-cols-1 lg:pt-20">
          <div className="flex flex-col items-center justify-center">
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-12">
              <h2 className="text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Welcome to your React 18 Starter Kit, powered by Vite and
                Tailwind CSS!
              </h2>
            </div>

            <div className="flex justify-center space-x-20">
              <a href="https://vitejs.dev">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
              <a href="https://tailwindcss.com/">
                <img
                  src={tailwind}
                  className="logo tailwind"
                  alt="React logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
