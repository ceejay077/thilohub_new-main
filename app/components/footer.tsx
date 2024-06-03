import Social from "./social";

export default function Footer() {
  return (
    <div>
      <footer className="px-3 lg:px-9 border-t-2 bg-black pt-5">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a href="#" className="inline-flex items-center">
              <img
                src="/logo2.png"
                alt="logo"
                className="h-9 w-auto bg-white"
              />
              {/* <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
                ThiloHub
              </span> */}
            </a>
            <div className="mt-6 lg:max-w-xl">
              <p className="text-sm text-white">
                THILO HUB PRODUCTION is a media production and consultancy firm,
                established in 2017 by professional journalists with years of
                experience in the media industry.
              </p>
              <br />

              <h3 className="text-md font-extrabold text-white sm:text-md my-4">
                Our Vision
              </h3>
              <p className="mt-4 text-white text-lg">
                Our ambition is to facilitate and promote effective journalism
                while providing all the necessary tools required to operate as
                successful as possible within the media environment, in any
                given setting and scenario.
              </p>
            </div>
          </div>
          <br />
          {/* <div className="flex flex-col gap-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">
              Popular Courses
            </p>
            <a href="#">UPSC - Union Public Service Commission</a>
            <a href="#">General Knowledge</a>
            <a href="#">MBA</a>
            <p className="text-base font-bold tracking-wide text-gray-900">
              Popular Topics
            </p>
            <a href="#">Human Resource Management</a>
            <a href="#">Operations Management</a>
            <a href="#">Marketing Management</a>
          </div> */}

          <div>
            <p className="text-base font-bold tracking-wide text-white">
              THILOHUB IS ALSO AVAILABLE ON
            </p>
            <div className="flex items-center gap-1 px-2">
              {/* <a href="#" className="w-full min-w-xl">
                <img
                  src="https://mcqmate.com/public/images/icons/playstore.svg"
                  alt="Playstore Button"
                  className="h-10"
                />
              </a> */}
              <a
                className="w-full min-w-xl"
                href="https://www.youtube.com/channel/UCo8tEi6SrGFP8XG9O0ljFgA"
              >
                <img
                  src="https://mcqmate.com/public/images/icons/youtube.svg"
                  alt="Youtube Button"
                  className="h-28"
                />
              </a>
            </div>
            <p className="text-base font-bold tracking-wide text-white">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-1 text-white">Email:</p>
              <a href="#" title="send email" className="text-white">
                cutiethilo@gmail.com
              </a>
            </div>
            <div>
              <Social />
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-white">
            © Copyright 2023{" "}
            <span>
              <a
                href="https://growthly.us/"
                className="underline"
                rel="dofollow"
              >
                Growthly.
              </a>
            </span>
            All rights reserved.
          </p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="#"
                className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Privacy &amp; Cookies Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Disclaimer
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
