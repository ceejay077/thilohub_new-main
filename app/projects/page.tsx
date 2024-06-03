import { Grid, Heading, Center } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

export default function Page() {
  return (
    <div className="pt-5">
      <div>
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center bg-white/70 backdrop-blur-lg justify-between sm:h-12 h-6 md:justify-center py-2  ">
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="/" aria-label="Home">
                <img src="/logo.svg" height="auto" width="150" />
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  id="main-menu"
                  aria-label="Main menu"
                  aria-haspopup="true"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:-100 focus:outline-none focus:-100 focus:text-gray-500 transition duration-150 ease-in-out"
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
                className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-black hover:-500 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out"
              >
                Contact
              </a>
            </span>
          </div>
        </nav>
      </div>
      <div className="mt-10">
        <ChakraProvider>
          <Center>
            <Heading as="h1" size="2xl">
              Thilohub's Projects
            </Heading>
          </Center>
        </ChakraProvider>
      </div>

      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          <div>
            <div className="relative  ">
              <a href="https://youtu.be/vEA8HpR_Azw?si=4jx5yux3ZlATad30">
                <img
                  src="/featured/coconut_farmers.jpeg"
                  className="w-96 h-auto"
                />
              </a>
              <p className="absolute right-2 bottom-2 text-black text-xs px-1 py">
                3:46
              </p>
            </div>
            <div className="flex flex-row mt-2 gap-2 border-2 p-3">
              <a href="https://youtu.be/vEA8HpR_Azw?si=4jx5yux3ZlATad30">
                <img
                  src="/featured/"
                  className="rounded-full max-h-10 max-w-10"
                />
              </a>
              <div className="flex flex-col ">
                <a href="#">
                  <p className="text-black-400 text-sm font-semibold">
                    Why Coconut Farmers Risk Their Lives to Feed the Worlds
                    Supperfood Obsession
                  </p>
                </a>
                <a
                  className="text-black-400 text-xs mt-2 hover:text-gray-100"
                  href="https://youtu.be/vEA8HpR_Azw?si=4jx5yux3ZlATad30"
                >
                  {" "}
                  Business insider
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="relative  ">
              <a href="https://youtu.be/_dDntezXdL4?si=6As0UaBs-E2cIcg4">
                <img src="/featured/graphite.jpeg" className="w-96 h-auto" />
              </a>
              <p className="absolute right-2 bottom-2 text-black text-xs px-1 py">
                3:46
              </p>
            </div>
            <div className="flex flex-row mt-2 gap-2 border-2 p-3">
              <a href="https://youtu.be/_dDntezXdL4?si=6As0UaBs-E2cIcg4">
                <img
                  src="/featured/35.jpeg"
                  className="rounded-full max-h-10 max-w-10"
                />
              </a>
              <div className="flex flex-col ">
                <a href="https://youtu.be/_dDntezXdL4?si=6As0UaBs-E2cIcg4">
                  <p className="text-black-400 text-sm font-semibold">
                    Why Graphite is The New Gold As Tech Wars Ramp Up
                  </p>
                </a>
                <a
                  className="text-black-400 text-xs mt-2 hover:text-gray-100"
                  href="https://youtu.be/_dDntezXdL4?si=6As0UaBs-E2cIcg4"
                >
                  {" "}
                  Business insider
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="relative ">
              <a href="https://www.youtube.com/watch?v=z2JEulhxcns&t=16s">
                <img
                  src="/featured/underground_mines.jpeg"
                  className="w-96 h-auto"
                />
              </a>
              <p className="absolute right-2 bottom-2 text-black text-xs px-1 py">
                3:46
              </p>
            </div>
            <div className="flex flex-row mt-2 gap-2 border-2 p-3">
              <a href="https://www.youtube.com/watch?v=z2JEulhxcns&t=16s">
                <img
                  src="/featured/35.jpeg"
                  className="rounded-full max-h-10 max-w-10"
                />
              </a>
              <div className="flex flex-col ">
                <a href="https://www.youtube.com/watch?v=z2JEulhxcns&t=16s">
                  <p className="text-black-400 text-sm font-semibold">
                    Inside Sri Lanka's Deadly Underground Mines Filled with Rare
                    Jewels
                  </p>
                </a>
                <a
                  className="text-black-400 text-xs mt-2 hover:text-gray-100"
                  href="https://www.youtube.com/watch?v=z2JEulhxcns&t=16s"
                >
                  {" "}
                  Business Insider
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="relative  ">
              <a href="https://youtu.be/OhO5fKkHTH8?si=k5AQQbUk_-vnzsLH">
                <img src="/featured/cineman.jpeg" className="w-96 h-auto" />
              </a>
              <p className="absolute right-2 bottom-2 text-black text-xs px-1 py">
                3:46
              </p>
            </div>
            <div className="flex flex-row mt-2 gap-2 border-2 p-3">
              <a href="https://youtu.be/OhO5fKkHTH8?si=k5AQQbUk_-vnzsLH">
                <img
                  src="/featured/35.jpeg"
                  className="rounded-full max-h-10 max-w-10"
                />
              </a>
              <div className="flex flex-col ">
                <a href="#">
                  <p className="text-black-400 text-sm font-semibold">
                    Villages Produce the Most Expensive Cinnemmon in the World
                  </p>
                </a>
                <a
                  className="text-black-400 text-xs mt-2 hover:text-gray-600"
                  href="https://youtu.be/OhO5fKkHTH8?si=k5AQQbUk_-vnzsLH"
                >
                  {" "}
                  Business Insider
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="relative  ">
              <a href="https://youtu.be/n2qaEi7skdU?si=nHDj35Rb2UPX1TBJ">
                <img src="/featured/mask.jpeg" className="w-96 h-auto" />
              </a>
              <p className="absolute right-2 bottom-2 text-black text-xs px-1 py">
                3:46
              </p>
            </div>
            <div className="flex flex-row mt-2 gap-2 border-2 p-3">
              <a href="https://youtu.be/n2qaEi7skdU?si=nHDj35Rb2UPX1TBJ">
                <img
                  src="/featured/35.jpeg"
                  className="rounded-full max-h-10 max-w-10"
                />
              </a>
              <div className="flex flex-col ">
                <a href="#">
                  <p className="text-black-400 text-sm font-semibold">
                    The Mask Making | Facsinating Trade in Sri Lanka
                  </p>
                </a>
                <a
                  className="text-black-400 text-xs mt-2 hover:text-gray-100"
                  href="https://youtu.be/n2qaEi7skdU?si=nHDj35Rb2UPX1TBJ"
                >
                  {" "}
                  Flair Media
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="relative  ">
              <a href="https://youtu.be/giljz-R9fBQ?si=TzJ0lA7pTAR7uRUO">
                <img src="/featured/mosque.jpeg" className="w-96 h-auto" />
              </a>
              <p className="absolute right-2 bottom-2 text-black text-xs px-1 py">
                3:46
              </p>
            </div>
            <div className="flex flex-row mt-2 gap-2 border-2 p-3">
              <a href="https://youtu.be/giljz-R9fBQ?si=TzJ0lA7pTAR7uRUO">
                <img
                  src="/featured/35.jpeg"
                  className="rounded-full max-h-10 max-w-10"
                />
              </a>
              <div className="flex flex-col ">
                <a href="#">
                  <p className="text-black-400 text-sm font-semibold">
                    Jami Al-Far | Red Mosque - Sri Lanka
                  </p>
                </a>
                <a
                  className="text-black-400 text-xs mt-2 hover:text-gray-100"
                  href="https://youtu.be/giljz-R9fBQ?si=TzJ0lA7pTAR7uRUO"
                >
                  {" "}
                  Flair Media
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="relative  ">
              <a href="https://youtu.be/Ti8wZmUNLQM?si=QAKrrAGxJPhPSJK4">
                <img src="/featured/paper.jpeg" className="w-96 h-auto" />
              </a>
              <p className="absolute right-2 bottom-2 text-black text-xs px-1 py">
                3:46
              </p>
            </div>
            <div className="flex flex-row mt-2 gap-2 border-2 p-3">
              <a href="https://youtu.be/Ti8wZmUNLQM?si=QAKrrAGxJPhPSJK4">
                <img
                  src="/featured/35.jpeg"
                  className="rounded-full max-h-10 max-w-10"
                />
              </a>
              <div className="flex flex-col ">
                <a href="#">
                  <p className="text-black-400 text-sm font-semibold">
                    How to Make Paper out from Elephant Dung
                  </p>
                </a>
                <a
                  className="text-black-400 text-xs mt-2 hover:text-gray-100"
                  href="https://youtu.be/Ti8wZmUNLQM?si=QAKrrAGxJPhPSJK4"
                >
                  {" "}
                  Flair Media
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="relative  ">
              <a href="https://www.youtube.com/watch?v=N87PRcYuqkM&t=1s">
                <img src="/featured/dark_side.jpeg" className="w-96 h-auto" />
              </a>
              <p className="absolute right-2 bottom-2 text-black text-xs px-1 py">
                3:46
              </p>
            </div>
            <div className="flex flex-row mt-2 gap-2 border-2 p-3">
              <a href="https://www.youtube.com/watch?v=N87PRcYuqkM&t=1s">
                <img
                  src="/featured/35.jpeg"
                  className="rounded-full max-h-10 max-w-10"
                />
              </a>
              <div className="flex flex-col ">
                <a href="https://www.youtube.com/watch?v=N87PRcYuqkM&t=1s">
                  <p className="text-black-400 text-sm font-semibold">
                    The Dark Side of Microfinance
                  </p>
                </a>
                <a
                  className="text-black-400 text-xs mt-2 hover:text-gray-100"
                  href="https://www.youtube.com/watch?v=N87PRcYuqkM&t=1s"
                >
                  {" "}
                  bloomberg
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="relative  ">
              <a href="https://www.youtube.com/watch?v=wVml3cO8Zqw">
                <img src="/featured/sri_lanka.jpeg" className="w-96 h-auto" />
              </a>
              <p className="absolute right-2 bottom-2 text-black text-xs px-1 py">
                3:46
              </p>
            </div>
            <div className="flex flex-row mt-2 gap-2 border-2 p-3">
              <a href="https://www.youtube.com/watch?v=wVml3cO8Zqw">
                <img
                  src="/featured/35.jpeg"
                  className="rounded-full max-h-10 max-w-10"
                />
              </a>
              <div className="flex flex-col ">
                <a href="https://www.youtube.com/watch?v=wVml3cO8Zqw">
                  <p className="text-black-400 text-sm font-semibold">
                    Sri Lanka Crisis
                  </p>
                </a>
                <a
                  className="text-black-400 text-xs mt-2 hover:text-gray-100"
                  href="https://www.youtube.com/watch?v=wVml3cO8Zqw"
                >
                  {" "}
                  SBC Channel
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="relative  ">
              <a href="https://www.youtube.com/watch?v=FRosUUOc30g">
                <img src="/featured/kalu_ganga.jpeg" className="w-96 h-auto" />
              </a>
              <p className="absolute right-2 bottom-2 text-black text-xs px-1 py">
                3:46
              </p>
            </div>
            <div className="flex flex-row mt-2 gap-2 border-2 p-3">
              <a href="https://www.youtube.com/watch?v=FRosUUOc30g">
                <img
                  src="/featured/35.jpeg"
                  className="rounded-full max-h-10 max-w-10"
                />
              </a>
              <div className="flex flex-col ">
                <a href="https://www.youtube.com/watch?v=FRosUUOc30g">
                  <p className="text-black-400 text-sm font-semibold">
                    Reconstruction of the Earth | 18 Kalu Ganga Dam Sri Lanka
                  </p>
                </a>
                <a
                  className="text-black-400 text-xs mt-2 hover:text-gray-100"
                  href="https://www.youtube.com/watch?v=FRosUUOc30g"
                >
                  {" "}
                  SBC Channel
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="relative  ">
              <a href="https://www.youtube.com/watch?v=1TKkPI4vhDE">
                <img src="/featured/earth.jpeg" className="w-96 h-auto" />
              </a>
              <p className="absolute right-2 bottom-2 text-black text-xs px-1 py">
                3:46
              </p>
            </div>
            <div className="flex flex-row mt-2 gap-2 border-2 p-3">
              <a href="https://www.youtube.com/watch?v=1TKkPI4vhDE">
                <img
                  src="/featured/35.jpeg"
                  className="rounded-full max-h-10 max-w-10"
                />
              </a>
              <div className="flex flex-col ">
                <a href="https://www.youtube.com/watch?v=1TKkPI4vhDE">
                  <p className="text-black-400 text-sm font-semibold">
                    Reconstruction of the Earth | Route 19 Peradeniya
                  </p>
                </a>
                <a
                  className="text-black-400 text-xs mt-2 hover:text-gray-100"
                  href="https://www.youtube.com/watch?v=1TKkPI4vhDE"
                >
                  {" "}
                  SBC Channel
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="relative  ">
              <a href="https://www.youtube.com/watch?v=SV3zFB-Idnc&t=5s">
                <img src="/featured/hospital.jpg" className="w-96 h-auto" />
              </a>
              <p className="absolute right-2 bottom-2 text-black text-xs px-1 py">
                3:46
              </p>
            </div>
            <div className="flex flex-row mt-2 gap-2 border-2 p-3">
              <a href="https://www.youtube.com/watch?v=SV3zFB-Idnc&t=5s">
                <img
                  src="/featured/35.jpeg"
                  className="rounded-full max-h-10 max-w-10"
                />
              </a>
              <div className="flex flex-col ">
                <a href="https://www.youtube.com/watch?v=SV3zFB-Idnc&t=5s">
                  <p className="text-black-400 text-sm font-semibold">
                    Reconstruction of the Earth | National Hospital in Sri Lanka
                  </p>
                </a>
                <a
                  className="text-black-400 text-xs mt-2 hover:text-gray-100"
                  href="https://www.youtube.com/watch?v=SV3zFB-Idnc&t=5s"
                >
                  {" "}
                  SBC Channel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
