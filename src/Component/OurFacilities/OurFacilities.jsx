import React from 'react'
import facilitiesImg from '../../Component/Images/Slider/img-5.jpg'
import wifiImg from '../../Component/Facilities/Images/wifi-1.png';
import machineImg from '../../Component/Facilities/Images/washing-machine.png'
import doorImg from '../../Component/Facilities/Images/door.png'
import waterImg from '../../Component/Facilities/Images/RO-water.png'
import serviceImg from '../../Component/Facilities/Images/housekeeping.png'
import supportImg from '../../Component/Facilities/Images/technical-support.png'
import FacilitiesBox from '../Facilities/FacilitiesBox';


export default function OurFacilities() {
  const wifi = {
    logo: wifiImg,
    heading: "Unlimited Wifi",
    para: "Be it an official video call to halfway around the world or a lazy day YouTube videos, you need never compromise"
  };

  const machine ={
    logo: machineImg,
    heading: "Washing Machine",
    para: "We provide you, automatic Washing Machine to wash and dry at your convenience and comfort"
  }

  const door ={
    logo: doorImg,
    heading: "Biometric Door",
    para: "We provide Enhance the security of your premises with our advanced Biometric Door Access Control system."
  }

  const water ={
    logo: waterImg,
    heading: "Purified Drinking Water",
    para: "We Provide purified Water on every floor"
  }
  const service ={
    logo: serviceImg,
    heading: "House Keeping Service",
    para: "Our services include regular housekeeping so you have hassle free living or enduring a dirty home are problems of the past"
  }
  const support ={
    logo: supportImg,
    heading: "Technical Support",
    para: "We have well trained repair and maintenance team who cares about your comfort"
  }
  return (
    <div>
      <img src={facilitiesImg} className='w-full h-[30em]' alt="not" />
      
      <div className='w-full h-auto bg-white'>
      <h2 className='text-center text-3xl font-bold text-blue-800 tracking-wide relative top-6'>Our Facilities</h2>
      <div className='ml-6 mt-20 align-center justify-center flex flex-wrap'>
        <FacilitiesBox allData={wifi} />
        <FacilitiesBox allData={machine} />
        <FacilitiesBox allData={door} />
        <FacilitiesBox allData={water} />
        <FacilitiesBox allData={service} />
        <FacilitiesBox allData={support}/>

      </div>
    </div>
    </div>
  )
}
