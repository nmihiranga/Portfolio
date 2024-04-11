'use client';
import { sendEmail } from '@/actions/sendEmail';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion'
import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  const {ref} = useSectionInView('Contact', 0.9);

  

  return (
    <motion.section ref = {ref} id='contact' className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center' 
    initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}} viewport={{once: true}}>
      <h2 className='text-3xl font-medium mb-8'>Contact me</h2>

      <p className='text-gray-700 -mt-5'>Fell free to contact me at {" "}
        <a className='underline' href='mailto:mihiranganayana@gmail.com'>mihiranganayana@gmail.com</a> {" "}
        or through this form.
      </p>

      <form className='mt-10 flex flex-col' 
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <input 
          type="email" 
          name='senderEmail'
          required maxLength={500} 
          placeholder='Your email' 
          className='px-4 h-14 rounded-lg border border-black/10' 
        />

        <textarea 
          required 
          name='message' 
          maxLength={500} 
          placeholder='Your message' 
          className='h-52 my-3 rounded-lg border border-black/10 p-4' 
        />

        <button type='submit' className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950'>
          Submit <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
        </button>
      </form>
    </motion.section>
  )
}
