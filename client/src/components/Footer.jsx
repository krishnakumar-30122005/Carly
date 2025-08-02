import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
const Footer = () => {

    const navigate = useNavigate();

  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'> {/* This section has three child container */}

            {/*Left* *This section includes logo and description of company*/}

            <div>
               <img className='mb-5 w-40' src={assets.logo} alt="Logo" />
               <p className='w-full md:w-2/3 text-gray-600 leading-6'>Carely is a user-friendly platform designed to simplify appointment booking for healthcare services. Patients can quickly search for healthcare providers, view doctor profiles, check availability, and book appointments directly through the app.</p>
            </div>

              {/*Center* *This section includes link to connect webpages*/}
              <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-2 text-black'>
                    <li onClick={()=>{navigate('/'), scroll(0,0)}} className='cursor-pointer'>Home</li>
                    <li onClick={()=>{navigate('/about'), scroll(0,0)}} className='cursor-pointer'>About us</li>
                    <li onClick={()=>{navigate('/contact'), scroll(0,0)}} className='cursor-pointer'>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
                </div>
                 {/*Right* *This section includes social media platforms and phone numbers*/}
              <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-black'>
                    <li>+91 975011776</li>
                    <li>pgpkrish003@gmail.com</li>
                    <li><img className=' mt-1 w-28' src={assets.sponser} alt="Logo" /></li>
                </ul>
                </div>
        </div>
       
        {/*Copyright section*/}
        
        <div>
        
             <hr/>
              <p className='py-5 text-sm text-center'>...</p>
        </div>
       
            </div>
  )
}

export default Footer