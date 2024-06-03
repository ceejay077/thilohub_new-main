import ReturnFocus from "./about_modal.jsx";
import { Button } from "@chakra-ui/react";

export default function About() {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto pt-16 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About <span>ThiloHub</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              THILO HUB PRODUCTION is a media production and consultancy firm,
              established in 2017 by professional journalists with years of
              experience in the media industry.
            </p>

            <h3 className="text-md font-extrabold text-gray-900 sm:text-md my-4">
              Services Offered:
            </h3>
            <p className="mt-4 text-gray-600 text-lg">
              <span>
                I take pride in extending my expertise to clients, offering a
                range of services:
              </span>
              <br />
              <br />
              <span>
                <span className="font-bold">Producer</span>:Crafting compelling
                narratives and managing the production process.
              </span>
              <br />
              <span>
                <span className="font-bold">Fixer:</span> Navigating logistics,
                ensuring seamless operations for projects.
              </span>
              <br />
              <span>
                <span className="font-bold">Videographer:</span> Capturing
                moments with precision and creativity.
              </span>
              <br />
              <span>
                <span className="font-bold">Translator:</span> Facilitating
                effective communication across languages.
              </span>
            </p>
            {/* <div className="mt-8">
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Learn more about us
                <span className="ml-2">&#8594;</span>
              </a>
            </div> */}
          </div>
          {/* <div className="mt-12 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
              alt="About Us Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div> */}
          <div className="h-full relative shadow-2xl shadow-black-900 overflow-hidden group ">
            <div className=" absolute -bottom-80 group-hover:top-0 left-0 w-full h-full group-hover:bg-black/45 transition-all ease-in-out duration-500  ">
              <div className="w-full h-full   p-5   relative">
                <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                  <h2 className="text-2xl font-bold  text-white mb-0 pb-1">
                    About Me
                  </h2>
                  <p className="text-lg font-light text-white hidden lg:block">
                    Welcome to my professional journey spanning 17 years in the
                    dynamic realm of media and news broadcasting. I commenced my
                    career as an Assistant News Producer and News Presenter at
                    EAP Network (PVT) Ltd. in Sri Lanka from 2007 to 2010, where
                    I honed my skills and laid the foundation for a rewarding
                    career. Subsequently, I dedicated 14 years to TV Derana,
                    contributing as a Senior News Reporter. This extensive
                    experience has equipped me with a deep understanding of the
                    media landscape and a commitment to delivering impactful
                    stories.
                  </p>
                  <br />
                  <p>
                    My passion for storytelling and commitment to excellence
                    drive my professional endeavors. Explore the diverse facets
                    of my career, and let&apos;s collaborate to bring your
                    vision to life.
                  </p>
                </div>
              </div>
            </div>
            <img
              src="/thiloNew.jpg"
              className="w-full z-0  h-full object-fill example profile-image"
            />
          </div>
        </div>
        <div className="pt-5 flex justify-center md:hidden">
          {/* <Button variant="outline" colorScheme="blue">
            About Me
          </Button> */}
          <ReturnFocus />
        </div>
      </div>
    </section>
  );
}
