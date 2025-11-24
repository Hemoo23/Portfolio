import { FaCode, FaPython } from "react-icons/fa6";
import { BsStack } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services" className="bg-[#1f242a] text-white px-4 py-10 md:py-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-center pt-4 pb-6 md:pt-10 md:pb-10 font-bold">
        My <span className="text-[#0ef]">Services</span>
      </h1>

      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 items-stretch max-w-6xl mx-auto">
        <div className="bg-[#323946] px-4 py-6 md:px-6 md:py-8 rounded-xl text-center flex flex-col items-center gap-3 w-full sm:max-w-sm flex-1 hover:border-4 hover:border-[#0ef] hover:scale-105 transition-all duration-600 ease-in-out ">
          <FaCode className="text-[#0ef] text-4xl sm:text-5xl" />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Web Development</h1>
          <p className="text-justify text-sm sm:text-base leading-relaxed max-w-prose">
            I create clean, responsive, and visually engaging user interfaces using modern front-end technologies. My focus is on delivering smooth performance, intuitive layouts, and user-friendly experiences that enhance product quality and help businesses connect effectively with their audience.
          </p>
          <a href="https://www.geeksforgeeks.org/web-tech/web-technology/"><button className="mt-3 px-4 py-2 rounded-full bg-[#0ef] text-black font-semibold w-full sm:w-auto shadow-[0_0_10px_#0ef]">Learn More</button></a>
        </div>

        <div className="bg-[#323946] px-4 py-6 md:px-6 md:py-8 rounded-xl text-center flex flex-col items-center gap-3 w-full sm:max-w-sm flex-1 hover:border-4 hover:border-[#0ef] hover:scale-105 transition-all duration-600 ease-in-out ">
          <FaPython className="text-[#0ef] text-4xl sm:text-5xl" />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Python Development</h1>
          <p className="text-justify text-sm sm:text-base leading-relaxed max-w-prose">
            I develop efficient, scalable, and reliable Python-based solutions that simplify processes and improve performance. With strong expertise in backend logic, APIs, and automation, I focus on delivering clean, maintainable code that helps businesses operate smoothly and achieve meaningful results.
          </p>
          <a href="https://www.geeksforgeeks.org/python/python-web-development/"><button className="mt-3 px-4 py-2 rounded-full bg-[#0ef] text-black font-semibold w-full sm:w-auto shadow-[0_0_10px_#0ef]">Learn More</button></a>
        </div>

        <div className="bg-[#323946] px-4 py-6 md:px-6 md:py-8 rounded-xl text-center flex flex-col items-center gap-3 w-full sm:max-w-sm flex-1 hover:border-4 hover:border-[#0ef] hover:scale-105 transition-all duration-600 ease-in-out ">
          <BsStack className="text-[#0ef] text-4xl sm:text-5xl" />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Full-Stack</h1>
          <p className="text-justify text-sm sm:text-base leading-relaxed max-w-prose">
            I provide full-stack development services that turn concepts into polished digital products with clean code and a professional finish. From crafting intuitive and responsive front-end designs to building strong backend systems and database structures, Using PYTHON, DJANGO, REACT and JAVASCRIPT
          </p>
          <a href="https://www.geeksforgeeks.org/blogs/what-is-full-stack-development/"><button className="mt-3 px-4 py-2 rounded-full bg-[#0ef] text-black font-semibold w-full sm:w-auto shadow-[0_0_10px_#0ef]">Learn More</button></a>
        </div>
      </div>
    </section>
  );
};

export default Services;
