import React from 'react'
import galleryImg1 from '../../Component/Images/Slider/img-1.jpg'
import galleryImg2 from '../../Component/Images/Slider/img-2.jpg'
import galleryImg3 from '../../Component/Images/Slider/img-3.jpg'
import galleryImg4 from '../../Component/Images/Slider/img-4.jpg'
import galleryImg5 from '../../Component/Images/Slider/img-5.jpg'
import galleryImg6 from '../../Component/Images/Slider/Slider-2/img-1.jpg'
import galleryImg7 from '../../Component/Images/Slider/Slider-2/img-2.jpg'
import galleryImg8 from '../../Component/Images/Slider/Slider-2/img-3.jpg'
import galleryImg9 from '../../Component/Images/Slider/Slider-2/img-4.jpg'
import galleryImg10 from '../../Component/Images/Slider/Slider-2/img-5.jpg'
import galleryImg11 from '../../Component/Images/Slider/Slider-2/img-6.jpg'


export default function Gallery() {
  return (
    <div className='h-auto w-full'>
      <div className='flex flex-wrap p-10 gap-x-[1em] gap-y-[3em]'>
        <img src={galleryImg1} className='h-[15em] w-[19em] border-2 rounded-xl shadow-xl'/>
        <img src={galleryImg2} className='h-[15em] w-[19em] border-2 rounded-xl shadow-xl'/>
        <img src={galleryImg3} className='h-[15em] w-[19em] border-2 rounded-xl shadow-xl'/>
        <img src={galleryImg4} className='h-[15em] w-[19em] border-2 rounded-xl shadow-xl'/>
        <img src={galleryImg5} className='h-[15em] w-[19em] border-2 rounded-xl shadow-xl'/>
        <img src={galleryImg6} className='h-[15em] w-[19em] border-2 rounded-xl shadow-xl'/>
        <img src={galleryImg7} className='h-[15em] w-[19em] border-2 rounded-xl shadow-xl'/>
        <img src={galleryImg8} className='h-[15em] w-[19em] border-2 rounded-xl shadow-xl'/>
        <img src={galleryImg9} className='h-[15em] w-[19em] border-2 rounded-xl shadow-xl'/>
        <img src={galleryImg10} className='h-[15em] w-[19em] border-2 rounded-xl shadow-xl'/>
        <img src={galleryImg11} className='h-[15em] w-[19em] border-2 rounded-xl shadow-xl'/>
        <img src={galleryImg3} className='h-[15em] w-[19em] border-2 rounded-xl shadow-xl'/>

      </div>
    </div>
  )
}
