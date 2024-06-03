import { Button } from "@chakra-ui/react";

export default function Services() {
  return (
    <div>
      <div className="bg-black text-white py-16 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-whute-900 sm:text-4xl">
                Featured Projects
              </h2>
              {/* <p className="mt-4 text-lg leading-8 text-white-600">
                Our platform is trusted by organizations worldwide to boost
                productivity, streamline operations, and enhance customer
                experiences.
              </p> */}
            </div>
            <div>
              <div className=" flex p-8 items-center justify-center">
                <div className="grid grid-cols-12 gap-2 gap-y-4 max-w-6xl">
                  <div className="col-span-12 sm:col-span-6 md:col-span-3">
                    <card className="w-full flex flex-col">
                      <div className="relative">
                        <a href="https://www.youtube.com/watch?v=P3uJwXJlp5k&t=11s">
                          <img
                            src="/featured/34.jpeg"
                            className="w-96 h-auto"
                          />
                        </a>

                        <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                          3:46
                        </p>
                      </div>

                      <div className="flex flex-row mt-2 gap-2">
                        <a href="https://youtu.be/n2qaEi7skdU?si=nHDj35Rb2UPX1TBJ">
                          <img
                            src="/featured/35.jpeg"
                            className="rounded-full max-h-10 max-w-10"
                          />
                        </a>

                        <div className="flex flex-col">
                          <a href="https://www.youtube.com/watch?v=P3uJwXJlp5k&t=11s">
                            <p className="text-gray-100 text-sm font-semibold">
                              Dancing with Fire in Sri Lanka
                            </p>
                          </a>
                          <a
                            className="text-gray-400 text-xs mt-2 hover:text-gray-100"
                            href="https://www.youtube.com/watch?v=P3uJwXJlp5k&t=11s"
                          >
                            {" "}
                            Great big story
                          </a>
                          {/* <p className="text-gray-400 text-xs mt-1">
                            241K views . 3 years ago
                          </p> */}
                        </div>
                      </div>
                    </card>
                  </div>

                  <div className="col-span-12 sm:col-span-6 md:col-span-3">
                    <card className="w-full flex flex-col">
                      <div className="relative">
                        <a href="https://www.youtube.com/watch?v=n2qaEi7skdU&t=1s">
                          <img
                            src="/featured/36.jpeg"
                            className="w-96 h-auto"
                          />
                        </a>

                        <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                          1:15
                        </p>
                      </div>

                      <div className="flex flex-row mt-2 gap-2">
                        <a href="https://www.youtube.com/watch?v=n2qaEi7skdU&t=1s">
                          <img
                            src="/featured/37.jpeg"
                            className="rounded-full max-h-10 max-w-10"
                          />
                        </a>

                        <div className="flex flex-col">
                          <a href="https://www.youtube.com/watch?v=n2qaEi7skdU&t=1s">
                            <p className="text-gray-100 text-sm font-semibold">
                              Bringing Sri Lanka's Mangroves Back to Life
                            </p>
                          </a>
                          <a
                            className="text-gray-400 text-xs mt-2 hover:text-gray-100"
                            href="https://www.youtube.com/watch?v=n2qaEi7skdU&t=1s"
                          >
                            {" "}
                            Business insider
                          </a>
                          <p className="text-gray-400 text-xs mt-1">
                            241K views . 3 years ago
                          </p>
                        </div>
                      </div>
                    </card>
                  </div>

                  <div className="col-span-12 sm:col-span-6 md:col-span-3">
                    <card className="w-full flex flex-col">
                      <div className="relative">
                        <a href="https://www.youtube.com/watch?v=vEA8HpR_Azw">
                          <img
                            src="/featured/38.jpeg"
                            className="w-96 h-auto"
                          />
                        </a>

                        <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                          15.06
                        </p>
                      </div>

                      <div className="flex flex-row mt-2 gap-2">
                        <a href="https://www.youtube.com/watch?v=vEA8HpR_Azw">
                          <img
                            src="https://picsum.photos/seed/88/40/40"
                            className="rounded-full max-h-10 max-w-10"
                          />
                        </a>

                        <div className="flex flex-col">
                          <a href="https://www.youtube.com/watch?v=vEA8HpR_Azw">
                            <p className="text-gray-100 text-sm font-semibold">
                              Why Coconut Farmers Risk Their Lives to Feed th
                              World Superfood Obsession
                            </p>
                          </a>
                          <a
                            className="text-gray-400 text-xs mt-2 hover:text-gray-100"
                            href="https://www.youtube.com/watch?v=vEA8HpR_Azw"
                          >
                            {" "}
                            Business insider
                          </a>
                          {/* <p className="text-gray-400 text-xs mt-1">
                            241K views . 3 years ago
                          </p> */}
                        </div>
                      </div>
                    </card>
                  </div>

                  <div className="col-span-12 sm:col-span-6 md:col-span-3">
                    <card className="w-full flex flex-col">
                      <div className="relative">
                        <a href="https://www.youtube.com/watch?v=w_rUKOwlStc&t=15s">
                          <img
                            src="/featured/39.jpeg"
                            className="w-96 h-auto"
                          />
                        </a>

                        <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                          1:15
                        </p>
                      </div>

                      <div className="flex flex-row mt-2 gap-2">
                        <a href="https://www.youtube.com/watch?v=w_rUKOwlStc&t=15s">
                          <img
                            src="https://picsum.photos/seed/57/40/40"
                            className="rounded-full max-h-10 max-w-10"
                          />
                        </a>

                        <div className="flex flex-col">
                          <a href="https://www.youtube.com/watch?v=w_rUKOwlStc&t=15s">
                            <p className="text-gray-100 text-sm font-semibold">
                              The Mask Making
                            </p>
                          </a>
                          <a
                            className="text-gray-400 text-xs mt-2 hover:text-gray-100"
                            href="https://www.youtube.com/watch?v=w_rUKOwlStc&t=15s"
                          >
                            {" "}
                            Business insider
                          </a>
                          {/* <p className="text-gray-400 text-xs mt-1">
                            241K views . 3 years ago
                          </p> */}
                        </div>
                      </div>
                    </card>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <a href="/projects">
                <Button className="text-white">See More Works</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
