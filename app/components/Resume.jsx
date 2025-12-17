import { FaPython, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill, RiReactjsLine } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";

const Resume = () => {
    return (
        <section id="resume" className="bg-[#323946] text-white px-4 sm:px-6 md:px-10 py-8 md:py-12">
            <h1 className="text-[#0ef] font-bold text-4xl text-center">Resume</h1>
            <div className='flex flex-col md:grid md:grid-cols-2 gap-6 sm:gap-8 mt-8'>
                <div className="flex flex-col bg-[#1f242a] p-4 sm:p-5 rounded-2xl md:rounded-4xl hover:shadow-[0_0_10px_#0ef] hover:scale-105 transition-all duration-300 ease-in-out">
                    <h1 className="font-bold text-xl sm:text-2xl text-center text-[#0ef]">Experiences</h1>
                    <h1 className="mt-2 text-lg sm:text-xl">AR Analyst</h1>
                    <div className="flex justify-between text-sm sm:text-base">
                        <p>Coronis Ajuba</p>
                        <p>(2022-2024)</p>
                    </div>
                    <ul className="mt-2 list-disc ml-5 text-sm sm:text-sm md:text-base leading-snug">
                        <li>Inducing Different Micro Level Process of RCM Like AR Follow Up,Denial Management, Electronic Remittance Advice Management Appeal</li>
                        <li>Focus on Resolving The Denial And Rejection Rather Than Writing Off The Amount.</li>
                        <li>Work For Provider Based Billing</li>
                    </ul>
                </div>

                <div className="flex flex-col bg-[#1f242a] p-4 sm:p-5 gap-4 rounded-2xl md:rounded-4xl hover:shadow-[0_0_10px_#0ef] hover:scale-105 transition-all duration-300 ease-in-out">
                    <h1 className="font-bold text-xl sm:text-2xl text-center text-[#0ef]">Skills</h1>
                    <div className="flex justify-around gap-4 mt-2 text-3xl sm:text-4xl">
                        <FaHtml5 className="hover:text-[#0ef] hover:drop-shadow-[0_0_3px_#0ef] hover:scale-110 transition-all duration-300 ease-in-out"/>
                        <FaCss3Alt className="hover:text-[#0ef] hover:drop-shadow-[0_0_3px_#0ef] hover:scale-110 transition-all duration-300 ease-in-out"/>
                        <IoLogoJavascript className="hover:text-[#0ef] hover:drop-shadow-[0_0_3px_#0ef] hover:scale-110 transition-all duration-300 ease-in-out"/>
                    </div>
                    <div className="flex justify-around gap-4 mt-2 text-3xl sm:text-4xl">
                        <FaPython className="hover:text-[#0ef] hover:drop-shadow-[0_0_3px_#0ef] hover:scale-110 transition-all duration-300 ease-in-out"/>
                        <SiDjango className="hover:text-[#0ef] hover:drop-shadow-[0_0_3px_#0ef] hover:scale-110 transition-all duration-300 ease-in-out"/>
                        <GrMysql className="hover:text-[#0ef] hover:drop-shadow-[0_0_3px_#0ef] hover:scale-110 transition-all duration-300 ease-in-out"/>
                    </div>
                    <div className="flex justify-around gap-4 mt-2 text-3xl sm:text-4xl">
                        <RiReactjsLine className="hover:text-[#0ef] hover:drop-shadow-[0_0_3px_#0ef] hover:scale-110 transition-all duration-300 ease-in-out"/>
                        <RiTailwindCssFill className="hover:text-[#0ef] hover:drop-shadow-[0_0_3px_#0ef] hover:scale-110 transition-all duration-300 ease-in-out"/>
                        <TbBrandFramerMotion className="hover:text-[#0ef] hover:drop-shadow-[0_0_3px_#0ef] hover:scale-110 transition-all duration-300 ease-in-out"/>
                    </div>
                </div>

                <div className="flex flex-col bg-[#1f242a] p-4 sm:p-5 gap-4 rounded-2xl md:rounded-4xl hover:shadow-[0_0_10px_#0ef] hover:scale-105 transition-all duration-300 ease-in-out">
                    <h1 className="font-bold text-xl sm:text-2xl text-center text-[#0ef]">Education</h1>
                    <ul className="md:list-decimal px-4 md:px-5 text-center md:text-left space-y-4 md:space-y-3 text-sm sm:text-sm md:text-base">
                        <li>
                            <h1 className="font-bold text-[#0ef] text-base sm:text-lg">Am Jain College</h1>
                            <h2 className="font-bold text-sm sm:text-md">B.com (Comp.Appln)</h2>
                            <p className="text-xs sm:text-sm md:text-sm">Completed B.com in the year 2022 with GPA of 6.6</p>
                        </li>
                        <li>
                            <h1 className="font-bold text-[#0ef] text-base sm:text-lg">Chanakya Mat.Hr.Sec.School</h1>
                            <h2 className="font-bold text-sm sm:text-md">H.S.E</h2>
                            <p className="text-xs sm:text-sm md:text-sm">Completed HSC in the year 2019 with Percentage of 68</p>
                        </li>
                        <li>
                            <h1 className="font-bold text-[#0ef] text-base sm:text-lg">Sri Saraswathy Vikas Mat.Hr.Sec.School</h1>
                            <h2 className="font-bold text-sm sm:text-md">S.S.L.C</h2>
                            <p className="text-xs sm:text-sm md:text-sm">Completed SSLC in the year 2017 with Percentage of 76</p>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col bg-[#1f242a] p-4 sm:p-5 rounded-2xl md:rounded-4xl hover:shadow-[0_0_10px_#0ef] hover:scale-105 transition-all duration-300 ease-in-out">
                    <h1 className="font-bold text-xl sm:text-2xl text-center text-[#0ef]">Certifications</h1>
                    <ul className="flex flex-col justify-center items-center gap-6 mt-4 text-center text-sm sm:text-sm md:text-base">
                        <li>
                            <h1 className="font-medium">Full Stack Development</h1>
                            <h1 className="text-xs sm:text-sm">Login360, Velachery</h1>
                        </li>
                        <li>
                            <h1 className="font-medium">Front-end Development</h1>
                            <h1 className="text-xs sm:text-sm">Login360, Velachery</h1>
                        </li>
                        <li>
                            <h1 className="font-medium">Python Development</h1>
                            <h1 className="text-xs sm:text-sm">Login360, Velachery</h1>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Resume