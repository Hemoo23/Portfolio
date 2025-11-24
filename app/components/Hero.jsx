import React, { useEffect, useRef } from 'react';
import resume from "/assets/Hemachandran.pdf";
import heroImg from '/images/heroImg.png';
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub, FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Typed from 'typed.js';

const Hero = () => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Web Developer', 'Software Developer', 'Frontend Developer'],
      typeSpeed: 50,
      backSpeed: 20,
      loop: true,
      backDelay: 2000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id='home' className='py-12 md:py-30 md:px-22 text-white bg-[#1f242a] min-h-screen'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 px-4 md:px-0'>

        <div className='flex flex-col gap-4 text-center md:text-left max-w-lg'>
          <h1 className='text-2xl md:text-5xl font-bold'>Hello, I'm</h1>
          <h1 className='text-2xl md:text-[2.6rem] font-bold text-[#0ef]'>HEMACHANDRAN K</h1>

          <p className='hidden text-2xl md:text-3xl font-bold md:flex gap-2 md:text-left justify-center md:justify-start'>
            And I'm A
            <span ref={el} className='text-[#0ef] inline-block ml-2'></span>
          </p>

          <p className='md:hidden block text-2xl font-bold text-center'>Software Developer</p>

          <p className='text-sm md:text-base font-semibold text-center md:text-justify'>
            I create smooth, high-performance web experiences that look great on every device.
            From frontend polish to backend logic, I enjoy building things that actually work (most of the time on the first try).
            Always learning, always building, always caffeinated.
          </p>

          <div className='flex gap-4 md:gap-10 justify-center md:justify-start items-center'>
            <a href='https://www.facebook.com/share/16jXGDJgRC/'>
              <FaFacebookF className='text-[#0ef] border-2 rounded-full p-2 h-11 w-11 hover:bg-[#0ef] hover:text-[#1f242a] hover:border-[#0ef] hover:drop-shadow-[0_0_10px_#0ef] transition-all duration-500 ease-in-out' />
            </a>
            <a href='https://github.com/Hemoo23'>
              <FaGithub className='text-[#0ef] border-2 rounded-full p-2 h-11 w-11 hover:bg-[#0ef] hover:text-[#1f242a] hover:border-[#0ef] hover:drop-shadow-[0_0_10px_#0ef] transition-all duration-500 ease-in-out' />
            </a>
            <a href='https://www.instagram.com/peterparker._23?igsh=MWh1b2E0c3hpdXJocQ=='>
              <RiInstagramFill className='text-[#0ef] border-2 rounded-full p-2 h-11 w-11 hover:bg-[#0ef] hover:text-[#1f242a] hover:border-[#0ef] hover:drop-shadow-[0_0_10px_#0ef] transition-all duration-500 ease-in-out' />
            </a>
            <a href='https://www.linkedin.com/in/hemachandran-k'>
              <TiSocialLinkedin className='text-[#0ef] border-2 rounded-full p-2 h-11 w-11 hover:bg-[#0ef] hover:text-[#1f242a] hover:border-[#0ef] hover:drop-shadow-[0_0_10px_#0ef] transition-all duration-500 ease-in-out' />
            </a>
          </div>

          <div>
            <a href={resume} download><button className='p-3 w-full md:w-40 font-bold text-[#1f242a] shadow-[0_0_10px_#0ef] bg-[#0ef] rounded-full'>
              Download CV
            </button></a>
          </div>
        </div>

        <img
          src={heroImg}
          alt="hero"
          className='hero-img block md:flex h-60 w-40 md:h-100 md:w-60 drop-shadow-[0_0_10px_#0ef] mt-10 md:mt-5 md:mr-20 object-cover'
        />

      </div>
    </section>
  );
};

export default Hero;
