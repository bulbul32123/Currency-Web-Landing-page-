import React from 'react';
import { motion } from 'framer-motion'
import { opacity } from '../../utils/motion'
import Img from '../Img';
import { slideInFromLeft } from '../../utils/motion';
import Container from '../../Container';


export default function Hero() {
  return (
    <div id='home'>
    <div className="h-screen w-full relative backdrop-opacity-90 overflow-x-hidden">
    <motion.div variants={opacity(0.3)} animate='visible' initial='hidden' className='overflow-x-hidden' >
      <Img  src='/images/HeroImg.png' className="w-full h-full object-cover absolute z-[-1]" alt="Hero Iamge" />
    </motion.div>
      <div className="z-10 flex flex-col justify-center items-start md:pl-36  h-full w-full md:pt-10 sm:pl-20 pl-5">
    <motion.h4 variants={slideInFromLeft(100, 0.6)} animate='visible' initial='hidden'  className='md:text-[55px] text-[25px] font-extrabold mb-5 max-w-[400px] leading-[33px] md:leading-[60px] text-white'>Move Money to All Corners of the World.</motion.h4>
    <motion.p variants={slideInFromLeft(-100, 0.7)} animate='visible' initial='hidden'  className='font-light text-gray-300 mb-8 max-w-[300px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum dolor dolores recusandae doloremque inventore sequi veniam voluptas quibusdam at </motion.p>
    <motion.span variants={slideInFromLeft(30, 0.8)} animate='visible' initial='hidden'   className='relative flex flex-col max-w-[600px]'>
    <input type="text" placeholder='Enter your email address' className='w-[250px] h-[50px] md:w-[400px] md:h-[60px] pr-3 md:pr-40 md:pl-10 pl-7 rounded-[40px] mb-4 outline-none border-none'  />
    <button className='md:absolute md:right-2 top-[6px]  py-3 rounded-[40px] px-8 bg-blue-600 text-white'>Get Started</button>
    </motion.span>
      </div>
    </div>
    </div>
  )
}
