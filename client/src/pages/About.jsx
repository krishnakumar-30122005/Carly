import React from 'react'
import {assets} from '../assets/assets'
const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-black font-medium'>
        <p>ABOUT <span className='text-primary font-semibold'>CARELY</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px] rounded-xl' src={assets.about_image} alt='image'/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Carely, your trusted partner in managing your healthcare needs conveniently and efficiently. At Carely, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p>Carely is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Carely is here to support you every step of the way.</p>
          <b>Our Vision</b>
          <p>Our vision at Carely is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>

      <div className='text-xl my-4 text-center'>
       <p className='font-semibold'>WHY TO CHOOSE <span className='text-primary font-semibold'>CARELY</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white text-gray-500 transition-all duration-300'>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white text-gray-500 transition-all duration-300'>
        <b>CONVENIENCE:</b>
        <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white text-gray-500 transition-all duration-300'>
        <b>PERSONALIZATION:</b>
        <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>

      </div>
    </div>
  )
}

export default About