import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion'
import { FaSmile } from 'react-icons/fa'
import { Link } from 'react-scroll';
import Hamburger from 'hamburger-react';
import { slideInFromLeft, slideInFromTop } from '../../utils/motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [slideOut, setSlideOut] = useState(false);
    window.addEventListener(('scroll'), () => {
        const scrollValue = window.scrollY
        if (scrollValue >= 600) {
            setSlideOut(true)
        }
        else {
            setSlideOut(false)
        }
    })
    return (
        <nav  className={`flex transition-all duration-500  justify-between  ${isOpen ? 'nav': ''} ${slideOut ? 'bg-[#161036]' : 'bg-transparent'} h-16 w-full fixed top-0 md:px-20 px-5 sm:px-14 pt-5 pb-5 z-[1] overflow-x-hidden`}>
            <motion.div variants={slideInFromLeft(-100, 0.3)} animate='visible' initial='hidden'>
                <Link to='home' smooth={true} offset={0} duration={900} className='text-white font-extrabold flex cursor-pointer'>
                    GL<span className='mt-[2px] text-green-500'><FaSmile size={18} /></span>BECOIN.
                </Link>
            </motion.div>
            <motion.div variants={slideInFromLeft(100, 0.5)} animate='visible' initial='hidden' className={`md:inline ${isOpen ? 'inline MobileNavbar ' : 'hidden'} `}>
                <Link onClick={()=>{isOpen ? setIsOpen(false) : '' }}  to='about' smooth={true} offset={0} duration={900} className='md:mx-4 cursor-pointer text-white font-semibold' >About Us</Link>
                <Link onClick={()=>{isOpen ? setIsOpen(false) : '' }}   to='services' smooth={true} offset={0} duration={900} className='md:mx-4 text-white cursor-pointer font-semibold' >Services</Link>
                <Link onClick={()=>{isOpen ? setIsOpen(false) : '' }}   to='contact' smooth={true} offset={0} duration={900} className='overflow-x-hidden'><button className=' px-5 py-2 text-blue-600 text-[10px] sm:text-[13px] font-semibold bg-white rounded-3xl sm:mr-3'>Login</button></Link>
            </motion.div>
            <div className="inline md:hidden text-white -mt-3 ">
                <Hamburger toggle={setIsOpen} toggled={isOpen} size={25} />
            </div>
        </nav>
    )
}
