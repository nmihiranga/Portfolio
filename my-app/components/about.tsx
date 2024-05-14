'use client';
import React from 'react'
import {motion} from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import Image from 'next/image';

export default function About() {
  const {ref} = useSectionInView('About', 0.25)
  
  return (
    <motion.section ref = {ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28' 
      initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} transition={{delay: 0.175}} id='about'
    >
      <h2 className='text-3xl font-medium mb-8'>About Me</h2>

      <p className='mb-3'>
        I am an enthusiastic <span className='font-medium'>Undergraduate</span> student pursuing a degree in <span className='font-medium'>Applied Mathematics and Computing</span>
        {" "} at the University of Jaffna, concurrently pursuing a <span className='font-medium'>Bachelor of Information Technology</span> degree at the University of Colombo School of Computing.
      </p>

      <p className='mb-3'>
        My academic journey has provided me with a unique blend of mathematical rigor and computational expertise. Through my studies in applied mathematics, I have honed analytical thinking and problem-solving skills, 
        essential for dissecting complex software systems and identifying potential areas for improvement. Complementing my <span className='font-medium'>Mathematical background</span>, my BIT degree has equipped me with 
        a solid foundation in <span className='font-medium'>Computer science principles</span> and software development methodologies. From programming languages to database management, I have gained a 
        comprehensive understanding of the intricacies involved in software engineering.
      </p>

      <p>
        I'm highly motivated to learn and contribute to a team environment, working collaboratively with developers and stakeholders to deliver exceptional software.
      </p>

      <div className='flex flex-wrap justify-center gap-2 text-lg text-gray-800 mt-10 '>
        <a href="https://www.credly.com/badges/4c12fad6-aa32-492d-a368-47fbefa51d5f/public_url" target='_blank'><Image src='/aws-educate-introduction-to-cloud-101.png' alt={'img'} width='250' height='250' quality='95' priority={true} className='h-50 w-40 object-cover border-[0.25rem] border-gray dark:bg-white '/></a>
        <a href="https://www.credly.com/badges/321f899f-cfe9-4039-9e64-12abd4fa044d/public_url" target='_blank'><Image src='/aws-cloud-quest-cloud-practitioner.png' alt={'img'} width='250' height='250' quality='95' priority={true} className='h-50 w-40 object-cover border-[0.25rem] border-gray dark:bg-white '/></a>
        <a href="https://www.credly.com/badges/260b06b0-a234-4891-a289-6d365038cda8/public_url" target='_blank'><Image src='/build-a-secure-google-cloud-network-skill-badge.png' alt={'img'} width='250' height='250' quality='95' priority={true} className='h-50 w-40 object-cover border-[0.25rem] border-gray '/></a>
        <a href="https://www.credly.com/badges/a3e9b483-0c06-4106-a67c-6015d48f2d15/public_url" target='_blank'><Image src='/implement-load-balancing-on-compute-engine-skill-ba.png' alt={'img'} width='250' height='250' quality='95' priority={true} className='h-50 w-40 object-cover border-[0.25rem] border-gray '/></a>
        <a href="https://www.credly.com/badges/4685f0e9-2532-4849-aef8-db420a41d0ad/public_url" target='_blank'><Image src='/set-up-an-app-dev-environment-on-google-cloud-skill.png' alt={'img'} width='250' height='250' quality='95' priority={true} className='h-50 w-40 object-cover border-[0.25rem] border-gray '/></a>
        <a href="https://lnkd.in/gXTXMy86" target='_blank'><Image src='/CertificateOfCompletion_DevOps Professional Certificate by PagerDuty and LinkedIn-1.png' alt={'img'} width='250' height='250' quality='95' priority={true} className='h-40 w-200 object-cover border-[0.25rem] border-gray '/></a>
        <a href="https://lnkd.in/gSP-JkFj" target='_blank'><Image src='/CertificateOfCompletion_Programming Foundations Software TestingQA.png' alt={'img'} width='250' height='250' quality='95' priority={true} className='h-40 w-200 object-cover border-[0.25rem] border-gray '/></a>
        <a href="https://lnkd.in/gGiDPajm" target='_blank'><Image src='/CertificateOfCompletion_LambdaTest Software Testing Professional Certificate.png' alt={'img'} width='250' height='250' quality='95' priority={true} className='h-40 w-200 object-cover border-[0.25rem] border-gray '/></a>
        <a href="https://developers.google.com/profile/badges/events/io/2024/registered" target='_blank'><Image src='/badge.svg' alt={'img'} width='250' height='250' quality='95' priority={true} className='h-50 w-40 object-cover border-[0.25rem] border-gray dark:bg-white '/></a>

        <a href="https://lnkd.in/dTXpQAC9" target='_blank'><Image src='/CertificateOfCompletion_LambdaTest Test Automation Professional Certificate.png' alt={'img'} width='250' height='250' quality='95' priority={true} className='h-40 w-200 object-cover border-[0.25rem] border-gray '/></a>
        <a href="https://lnkd.in/gpGySiqQ" target='_blank'><Image src='/CertificateOfCompletion_SSC Blue Prism Robotic Process Automation Professional Certificate.png' alt={'img'} width='250' height='250' quality='95' priority={true} className='h-40 w-200 object-cover border-[0.25rem] border-gray '/></a>
        <a href="https://developers.google.com/profile/badges/skillsboost/earned-badge" target='_blank'><Image src='/cloud skill boost.svg' alt={'img'} width='250' height='250' quality='95' priority={true} className='h-50 w-40 object-cover border-[0.25rem] border-gray '/></a>
        <a href="https://coursera.org/share/8506aeda06103d09bc4b64f01274f7a1" target='_blank'><Image src='/google-it-support-certificate.png' alt={'img'} width='250' height='250' quality='100' priority={true} className='h-50 w-40 object-cover border-[0.25rem] border-gray dark:bg-white '/></a>

      </div>

    </motion.section>
  )
}
