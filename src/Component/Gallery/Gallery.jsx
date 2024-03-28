import React from 'react'
import galleryImg from '../../Component/Images/Slider/img-5.jpeg'


export default function Gallery() {
  return (
    <div>
        <h2 className='text-center text-xl py-6 text-gray-950 bg-slate-500 uppercase'>Gallery</h2>
      <img src={galleryImg} alt="not" className='w-full' />
    </div>
  )
}
