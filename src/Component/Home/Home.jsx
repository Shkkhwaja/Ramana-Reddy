import React from 'react'
import { Link } from 'react-router-dom';
import Slider from './Slider/Slider';
import WelcomeBox from '../WelcomeBox/WelcomeBox';
import Facilities from '../Facilities/Facilities';

export default function Home() {
    return (
      <div >
      <Slider />
      <WelcomeBox />
      <Facilities />
      </div>
    );
}

