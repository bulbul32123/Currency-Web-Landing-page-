import React from 'react'
import { motion } from 'framer-motion'
import Img from '../Img'
import { opacity, slideInFromLeft, slideInFromTop } from '../../utils/motion'

export default function About() {
  return (
    <div id='about'>
      <div className="h-screen w-full relative backdrop-opacity-90 ">
        <motion.div variants={opacity(0.3)} viewport={{ once: true }} whileInView='visible' initial='hidden' >
          <Img src='/images/AboutBgImage.png' className="w-full h-full object-cover absolute z-[-1]" alt="About Iamge" />
        </motion.div>
        <motion.h3 variants={slideInFromLeft(30, 0.4)} viewport={{ once: true }} whileInView='visible' initial='hidden' className="text-white  overflow-x-hidden font-extrabold text-[30px] pt-28 pl-[42%]">
          About Us
        </motion.h3>
        <div className="z-10 flex flex-col justify-center items-start md:pl-36 pl-5 sm:pl-20 h-full w-full -mt-20 overflow-x-hidden">
          <motion.h4 variants={slideInFromLeft(-20, 0.6)} viewport={{ once: true }} whileInView='visible' initial='hidden' className=' font-extrabold mb-1 text-[20px] max-w-[400px] text-gray-400'>Hey Guys,</motion.h4>
          <motion.p variants={slideInFromLeft(-20, 0.7)} viewport={{ once: true }} whileInView='visible' initial='hidden' className='font-medium text-[18px] text-white mb-8 max-w-[350px]'>Welcome to GlobeCoin, where our mission is to make financial transactions seamless
            and accessible to everyone, connecting people from all corners of the world. World.
            Our platform allows you to move money internationally, exchange currencies,
            and explore the world of cryptocurrencies with confidence and security.</motion.p>
          <motion.span variants={slideInFromLeft(20, 0.8)} viewport={{ once: true }} whileInView='visible' initial='hidden' className='relative flex flex-col max-w-[600px]'>
            <button className='py-3 rounded-[40px] px-8 bg-blue-600 text-white'>Try for free</button>
          </motion.span>
        </div>
      </div>
    </div>
  )
}
