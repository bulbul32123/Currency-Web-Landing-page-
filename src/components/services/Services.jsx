import React from 'react'
import { services } from '../../utils'
import Container from '../../Container'
import {motion} from 'framer-motion'
import { opacity, slideInFromLeft } from '../../utils/motion'
import Img from '../Img'

export default function Services() {
  return (
    <motion.div variants={opacity(0.4)} viewport={{ once: true }} whileInView='visible' initial='hidden' id='services' className='overflow-x-hidden'>
       <h3 className='text-white text-center font-extrabold text-[27px] pb-24 pt-40'>Our Services</h3>
      <div className='flex justify-center h-full w-full'>
        <div className="grid md:grid-cols-2 grid-cols-1  xl:grid-cols-3 gap-5 sm:gap-10 mb-10">
        {services.map((items)=>(
        <div className="flex justify-center items-center h-full w-60 sm:w-80 relative bg-[#1a1a1a]" key={items.id}>
          <div className="px-2 sm:px-5 pb-10 mt-28 ">
            <Img src={items?.img} className='absolute top-0 w-28 h-28 right-28' alt="" />
            <h3 className='text-[13px] sm:text-[20px] text-white font-extrabold'>{items?.title}</h3>
            <p className='text-gray-400'>{items?.des}</p>
          </div>
          </div>
        ))
        }
          </div>
      </div>
    </motion.div>
  )
}
