import React, { useState,useContext } from 'react'
import { AppContext } from '../context/AppContext'
import {assets} from '../assets/assets'
import { toast } from 'react-toastify'
import axios from 'axios';

const MyProfile = () => {

  {/*Initial state for users data*/}

   const {userData , setUserData , token ,loadUserProfileData}= useContext(AppContext)

  {/* Purpose of this state is that is user can edit their profile whenever they want*/}
  const [isEdit,setIsEdit] = useState(false);
  const [image,setImage] = useState(false);

  const updateUserProfileData = async () => {
       try {
        const formData = new FormData()

        formData.append('name',userData.name)
        formData.append('phone',userData.phone)
        formData.append('address',JSON.stringify(userData.address))
        formData.append('gender',userData.gender)
        formData.append('dob',userData.dob)
        image && formData.append('image',image)

        const {data} = await axios.post('http://localhost:8000/api/user/update-profile',formData,{headers:{
          Authorization: `Bearer ${token}`
       }})
        if(data.success){
          toast.success(data.message)
          await loadUserProfileData()
          setIsEdit(false)
          setImage(false)
        } else {
          toast.error(data.message)
        }
       } catch (error) {
        console.log(error);
      toast.error(error.message);
       }
  }

  return userData && (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      {
        isEdit
        ? <label htmlFor='image'>
          <div className='inline-block relative cursor-pointer'>
            <img className='w-36 rounded opacity-75' src={image ? URL.createObjectURL(image) : userData.image} alt="" />
            <img className='w-10 absolute bottom-12 right-12' src={image ? '' : assets.upload_icon } alt="" />
          </div>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden/>
        </label>
        : <img className="w-36 rounded" src={userData.image} alt="image" />

      }
     
      {/* This conditional rendering for Username (User can change the name)*/}
      {
        isEdit
        ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type='text' value={userData.name} onChange={e => setUserData(previousData => ({...previousData, name:e.target.value}))} />
        : <p className='font-medium text-3xl text-primary'>{userData.name}</p>
      }

      <hr className='bg-zinc-400 h-[1px] border-none'/>

      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3'>
          <p className='font-medium'>Email:</p>
          <p className='text-primary'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>   

      {/* This conditional rendering for Phonenumber (User can change the phonenumber)*/}     
      {
        isEdit
        ? <input type='text' value={userData.phone} onChange={e => setUserData(previousData => ({...previousData, phone:e.target.value}))} />
       : <p className='text-primary'>{userData.phone}</p>
      }

          <p className='font-medium'>Address:</p>
          {/* This conditional rendering for Address(User can change the address)*/}
          {
            isEdit
            ?<p>
              <input type="text" value={userData.address.line1} onChange={(e) => setUserData((previousData)=> ({...previousData,address:{...previousData.address, line1: e.target.value}}))} />
              <input type="text" value={userData.address.line2} onChange={(e) => setUserData((previousData)=> ({...previousData,address:{...previousData.address, line2: e.target.value}}))} />
            </p>
            :<p className='text-primary'>
              {userData.address.line1}
              <br/>
              {userData.address.line2}
            </p>
          }
        </div>
      </div>
      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3'>
          <p className='font-medium'>Gender:</p>
          {/* This conditional rendering for gender by using select method(options) (User can change the gender)*/}
          {
            isEdit
            ? <select className='max-w-20' onChange={(e) => setUserData(previousData => ({...previousData, gender: e.target.value}))} value={userData.gender}>
              <option>Male</option>
              <option>Female</option>
            </select>
            : <p className='text-primary'>{userData.gender}</p>
          }
          
          <p className='font-medium'>Birthday:</p>
          {/* This conditional rendering for Date (User can change the their date of birth)*/}
          {
            isEdit 
            ? <input type='date' onChange={(e) => setUserData(previousData => ({...previousData, dob: e.target.value}))} value={userData.dob}/>
            : <p className='text-primary'>{userData.dob}</p>
          }
        </div>
      </div>

      <div className='mt-10'>
        {/*isEdit ?  Epa user vanthu edit section ulla iruka na avanuku save information nu oru buttom kammikum ethuku na avan edit pannathuku aparam save panna  :  Intha condition ethuku na epa user vanthu normal ha avan profile ha pakkura na avanuku vanthu kila edit button kammikum suppose avan edit button click panna avanuku edit profile varum*/}
        {
          isEdit
          ? <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300' onClick={updateUserProfileData}>Save information</button>
          : <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300' onClick={()=>setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>
  )
}

export default MyProfile