import React from 'react';
import SliderOne from '../SlidersForPgSection/SliderOne';
import { MapPin } from 'lucide-react';
import Button from '../Button/Button';

export default function PgBox({ slider, name, rent, pg }) {
  return (
    <>
    <div className='w-[90vw] lg:w-[40vw] xl:w-[38vw] px-4 mb-8'>
      <div className='h-auto bg-slate-200 p-6 rounded-lg relative'>
        <div className='h-40 md:h-64 lg:h-48 w-full overflow-hidden rounded-xl border-4 border-black mb-6'>
          {slider}
        </div>
        <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-2'>{name ? name : "Name is pending"}</h2>
        <div className='flex items-center mb-4 text-slate-500'>
          <MapPin size={24} />
          <p className='ml-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='mb-4'>
          <h2 className='text-lg font-semibold text-slate-500'>Rent</h2>
          <h1 className='text-xl md:text-3xl font-bold text-slate-800'>₹{rent}</h1>
        </div>
        <div className='ml-[9em] xl:-mt-[5em] xl:ml-[20em] -mt-[4.5em]'>
          <h2 className='text-lg font-semibold text-slate-500'>PG for</h2>
          <h1 className='text-xl md:text-3xl font-bold text-slate-800'>{pg}</h1>
        </div>
        <div className='flex justify-between mt-8 gap-5 xl:mt-7'>
          <Button label="Contact Us" />
          <Button label="Visit Now" />
        </div>
      </div>
    </div>
    </>
  );
}
