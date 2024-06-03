import React from "react";

export default function Stats() {
  return (
    <div>
      <div className="bg-green-50 pt-12 my-10 sm:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Cross-Cultural Journalism: Crafting Compelling Narratives for a
              Global Clientele
            </h2>
          </div>
        </div>
        <div className="mt-10 bg-white pb-12 sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-green-50 "></div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-4xl">
                <dl className="rounded-lg bg-white  shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col border-b border-gray-100  p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 ">
                      Diverse array of clients
                    </dt>
                    <dd className="order-1 text-5xl font-bold tracking-tight text-green-600 ">
                      <span>10</span>+
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100  p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 ">
                      Countries
                    </dt>
                    <dd className="order-1 text-5xl font-bold tracking-tight text-green-600 ">
                      <span>9</span>+
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100  p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 ">
                      Years as a journalist
                    </dt>
                    <dd className="order-1 text-5xl font-bold tracking-tight text-green-600 ">
                      <span>17</span>+
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
