import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800 mt-3' id='speciality'> {/* Inside this div i have stored two elements which is hi and p tag and i have styled using tailwind. this speciality menu (categories) In this user can select the categories*/}
          <h1 className='text-3xl'>Find by Speciality</h1>
          <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>

          {/* So in this div i have used map method to access object from assets and used link tag. if user clicks on the any speciality image that user should me able to go that page * This is child div */}
          
          <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
                {specialityData.map((item,index)=>(
                   <Link className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`doctors/${item.speciality}`}>
                     <img className='w-16 sm:w-24 mb-2' src={item.image} alt="image"/>
                     <p>{item.speciality}</p>
                   </Link>
                ))}
          </div>
    </div>
  )
}

export default SpecialityMenu