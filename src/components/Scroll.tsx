"use client"

import React from 'react'
import { motion } from "framer-motion";

const Scroll = () => {
  return (
    <div className='absolute xs:bottom-10 bottom-6 w-full flex justify-center items-center animate-fade-in-scroll'>
      <a href='#about'>
        <div className='w-[25px] h-[45px] rounded-2xl border-2 border-white flex justify-center items-start p-1.5'>
          <motion.div
            initial={{ y: 0 }}
            animate={{
              y: [0, 16, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
            className='w-2 h-2 rounded-full bg-white mb-1'
          />
        </div>
      </a>
    </div>
  )
}

export default Scroll