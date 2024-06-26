import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Logos from "./components/logos";
import Recents from "./components/Recents";
import Testimonials from "./components/testimponials";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Testimonials_2 from "./components/testimponials_2";
import Stats from "./components/stats";
import { ChakraProvider } from "@chakra-ui/react";
import Featured from "./components/featured";

export default function Home() {
  return (
    <ChakraProvider>
      <div>
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center bg-white/70 backdrop-blur-lg justify-between sm:h-12 h-6 md:justify-center py-2  ">
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="" aria-label="Home">
                <img src="/logo.svg" height="auto" width="150" />
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  id="main-menu"
                  aria-label="Main menu"
                  aria-haspopup="true"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* <div className="hidden md:flex md:space-x-10">
            <button className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">
              About
            </button>
            <a
              href="#pricing"
              className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
            >
              Pricing
            </a>
            <a
              href="/blog"
              className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
            >
              Blog
            </a>
            <a
              href="https://docs.pingping.io"
              target="_blank"
              className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
            >
              Docs
            </a>
          </div> */}
          <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            <span className="inline-flex">
              {/* <a
                href="/login"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium text-blue-600 hover:text-blue-500 focus:outline-none transition duration-150 ease-in-out"
              >
                Login
              </a> */}
            </span>
            <span className="inline-flex rounded-md shadow m-2">
              <a
                href="/contact"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-black hover:bg-gray-500 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out"
              >
                Contact
              </a>
            </span>
          </div>
        </nav>
      </div>
      <Hero />
      <Featured />
      <About />
      <Services />
      <Logos />
      {/* <Recents /> */}
      <div className="text-center bg-black text-white py-8  font-bold text-4xl mt-5">
        Gallery
      </div>
      <Gallery />
      <Testimonials />
      <Testimonials_2 />
      <Stats />
      <Footer />
    </ChakraProvider>
  );
}
