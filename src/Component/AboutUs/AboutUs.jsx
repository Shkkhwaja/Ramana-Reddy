import React from 'react'
import AboutImg from '../../Component/Images/aboutus/aboutus.jpg'
import cartOneIng from '../../Component/Images/aboutus/cart-1.jpg'


export default function AboutUs() {
  return (
     <>
     <div>
        <img src={AboutImg} className='h-[30em] w-full' alt="not visible" />
        <p className='text-xl mx-20 text-center my-[4em] text-gray-900'>Tasty and unlimited food in both South Indian and North Indian styles will be served twice or thrice a day as per deal with the  of our hostels.
</p>
     </div>
     <div className='flex'>
    <img src={cartOneIng} className='h-[20em] my-4' alt="not visible" />
    <p className='my-[2em] mx-[4em] text-xl text-gray-900'>Ramana Reddy Luxury was established few Year ago with the idea of providing housing solutions to people who are new in metro cities. Ramana Reddy Luxury currently provides Hostels for students and Professional employees who are single. <br /> <br />
Ramana Reddy Luxury ovides hostels at prime locations that are easily accessible from near by major employment and education hubs and IT Company.</p>
     </div>
     </>
  )
}
