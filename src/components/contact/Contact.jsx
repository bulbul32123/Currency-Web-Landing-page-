import React from 'react'
import {motion} from 'framer-motion'
import { opacity } from '../../utils/motion'
export default function Contact() {
  return (
    <motion.div variants={opacity(0.3)} viewport={{ once: true }} whileInView='visible' initial='hidden' id='contact' className='h-full w-full flex justify-center items-center flex-col '>
      <form className='w-[60%] text-white h-full bg-[#1a1a1a] rounded-3xl flex mt-20 py-20 justify-center items-center flex-col mb-20'>
      <label className='font-semibold text-[20px] md:text-[30px] mb-20'>Get In Tourch</label>
        <label>Full Name</label>
        <input type="text" placeholder='Name' onChange={()=>{}} className='w-[40%] h-9 mb-5 pl-3 rounded-sm outline-none' />
        <label>Email</label>
        <input type="email" placeholder='Email' onChange={()=>{}} className='w-[40%] h-9 mb-5 pl-3 rounded-sm outline-none' />
        <label>Password</label>
        <input type="password" placeholder='Password' onChange={()=>{}} className='w-[40%] h-9 pl-3 rounded-sm outline-none' />
      </form>
    </motion.div>
  )
}
