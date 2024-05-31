import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex relative z-20 items-center overflow-hidden">
      <div className="container px-3 py-5 xl:px-6 xl:py-16 flex relative ">
        <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
          <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
          <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
            Be on
            <span className="text-5xl sm:text-7xl">Style</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-700 dark:text-white">
            A dimension of expression that makes fashion evolution possible and
            relatable. An infinite and versatile canvas where trends and
            personal style intertwine.
          </p>
          <div className="flex mt-8">
            <a
              href="/products"
              className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
            >
              Get started
            </a>
            <Link
              href="/about"
              className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
            >
              Read more
            </Link>
          </div>
        </div>
        <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
          <img
            src="https://www.tailwind-kit.com/images/object/10.png"
            className="max-w-xs md:max-w-sm ml-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
