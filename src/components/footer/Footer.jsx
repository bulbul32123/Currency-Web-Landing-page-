import React from 'react';
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'

export default function Footer() {
  return (
    <div className='flex justify-between items-center bg-[#1a1a1a] h-20 w-full'>
    <div className="ml-2 md:ml-10 text-white">
         <p>&copy; All right Reserve</p>
    </div>
    <div className="flex ">
    <BsGithub size={20} color='white' className='mx-3' />
    <BsLinkedin size={20} color='white' className='mr-3'/>
    <BsFacebook size={20} color='white' className='mr-2 md:mr-10' />
    </div>
    </div>
  )
}
