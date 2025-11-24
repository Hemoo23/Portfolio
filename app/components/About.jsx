import pfabout from "/images/pfabout.png";

const About = () => {
  return (
    <section id="about" className="w-full py-20 sm:py-32 md:pt-40 px-6 sm:px-8 md:px-30 bg-[#323946] text-white">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-8 sm:gap-10">
        <img
          src={pfabout}
          alt="about"
          className="h-56 w-56 sm:h-72 sm:w-72 md:h-96 md:w-96 drop-shadow-[0_0_10px_#0ef] rounded-3xl sm:rounded-4xl md:rounded-full object-cover"
        />

        <div className="flex flex-col gap-4 sm:gap-5 text-center md:text-left px-2 sm:px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            About <span className="text-[#0ef]">Me</span>
          </h1>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            <span className="text-[#0ef]">Full-Stack</span> Developer
          </h1>

          <p className="font-semibold text-sm sm:text-base md:text-lg leading-relaxed text-justify max-w-xl">
            Passionate and detail-oriented Web Developer with a strong foundation in modern web technologies such as HTML, CSS, JavaScript, Python, Django, and SQL. As a fresher, I bring enthusiasm for learning, problem-solving, and building user-friendly digital solutions. I enjoy turning ideas into functional, responsive, and visually appealing websites while continuously improving my skills. My goal is to contribute to a dynamic team, grow as a developer, and create impactful web applications that deliver real value.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;