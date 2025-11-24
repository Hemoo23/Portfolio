import { FaAngleDoubleUp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#323946] text-white text-center px-4 py-6 sm:py-8">
            <div className="flex md:flex-row md:gap-200 gap-30 justify-evenly items-center text-sm sm:text-base">
                <p className="font-bold">Developed by <span className="text-[#0ef]">Hemoo</span></p>
                <a href="#home" className="mt-1 md:mt-0">
                  <FaAngleDoubleUp className="bg-[#0ef] p-2 rounded-lg text-black text-3xl sm:text-4xl" />
                </a>
            </div>
        </footer>
    )
}

export default Footer