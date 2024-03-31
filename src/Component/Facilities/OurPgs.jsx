import React from 'react'
import PgBox from './PgBox';
import SliderOne from '../SlidersForPgSection/SliderOne';
import SliderTwo from '../SlidersForPgSection/SliderTwo';
import SliderThree from '../SlidersForPgSection/SliderThree';

export default function OurPgs() {
  return (
    <div>
        
  <h2 className='text-center text-3xl font-bold text-blue-800 tracking-wide my-4'>Our PG's</h2>

    <div className='px-20 py-4 gap-6 flex flex-wrap lg:flex justify-center items-center mt-6'>
  <PgBox slider={<SliderOne />} name="Amma Saraswathi" rent="5000" pg="male"/>
  <PgBox slider={<SliderTwo />} name="Amma Saraswathi" rent="5500" pg="female"/>
  <PgBox slider={<SliderThree />} name="Amma Saraswathi" rent="6600" pg="male"/>
  <PgBox slider={<SliderTwo />} name="Amma Saraswathi" rent="7500" pg="female"/>
</div>
    </div>
  )
}
