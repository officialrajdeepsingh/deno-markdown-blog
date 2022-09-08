/** @jsx h */
/** @jsxFrag Fragment */

import { Fragment, h } from "blog";

export function Section() {
  return (
    <section class="text-gray-400 my-10 bg-gray-900 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-3/3 flex flex-col sm:flex-row sm:items-center p-2 items-start mx-auto">
          <h6 class="flex-grow sm:pr-16 text-xl font-medium title-font text-white">
            Read more articles related frontend development
          </h6>
          <a
            href="https://officialrajdeepsingh.medium.com"
            target="_blank"
            class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
          >
            Read more
          </a>
        </div>
      </div>
    </section>
  );
}
