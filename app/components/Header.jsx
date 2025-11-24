import React, { useState } from 'react';

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#1f242a] text-white sticky top-0 z-50">
      <div className="flex items-center h-[100px] px-6 md:px-10 justify-between md:justify-around md:gap-35">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold font-[hero]">PORTFOLIO</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 font-bold text-lg">
          <a href="#home" className="hover:text-[#0ef] transition-all duration-300 ease-in-out">Home</a>
          <a href="#about" className="hover:text-[#0ef] transition-all duration-300 ease-in-out">About</a>
          <a href="#services" className="hover:text-[#0ef] transition-all duration-300 ease-in-out">Services</a>
          <a href="#resume" className="hover:text-[#0ef] transition-all duration-300 ease-in-out">Resume</a>
          <a href="#contact" className="hover:text-[#0ef] transition-all duration-300 ease-in-out">Contact</a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#0ef]"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <div className="w-6 h-5 relative">
            <span className={`block absolute left-0 top-0 w-6 h-[2px] transition-transform duration-300 bg-white ${open ? 'rotate-45 top-[10px]' : ''}`}></span>
            <span className={`block absolute left-0 top-[9px] w-6 h-[2px] transition-opacity duration-200 bg-white ${open ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block absolute left-0 top-[18px] w-6 h-[2px] transition-transform duration-300 bg-white ${open ? '-rotate-45 top-[10px]' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile menu stays inside header: expands header height and keeps items within the header box */}
      <div className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${open ? 'max-h-48' : 'max-h-0'}`}>
        <div className="px-6 pb-4">
          <nav className="flex flex-col items-center gap-3 font-bold bg-[#1f242a] rounded-b-lg py-3">
            <a href="#home" className="hover:text-[#0ef] transition-all duration-200 px-2" onClick={() => setOpen(false)}>Home</a>
            <a href="#about" className="hover:text-[#0ef] transition-all duration-200 px-2" onClick={() => setOpen(false)}>About</a>
            <a href="#services" className="hover:text-[#0ef] transition-all duration-200 px-2" onClick={() => setOpen(false)}>Services</a>
            <a href="#resume" className="hover:text-[#0ef] transition-all duration-200 px-2" onClick={() => setOpen(false)}>Resume</a>
            <a href="#contact" className="hover:text-[#0ef] transition-all duration-200 px-2" onClick={() => setOpen(false)}>Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
