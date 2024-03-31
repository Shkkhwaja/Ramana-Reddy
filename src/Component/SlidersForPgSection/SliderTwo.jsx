import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fold-out-animation.css"; 
import img1 from "../../Component/Images/Slider/Slider-2/img-1.jpg"
import img2 from "../../Component/Images/Slider/Slider-2/img-2.jpg"
import img3 from "../../Component/Images/Slider/Slider-2/img-3.jpg"
import img4 from "../../Component/Images/Slider/Slider-2/img-4.jpg"
import img5 from "../../Component/Images/Slider/Slider-2/img-5.jpg"
import img6 from "../../Component/Images/Slider/Slider-2/img-6.jpg"


const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function SliderTwo() {
  return (
    <div className="rounded-lg">

    <AutoplaySlider
      play={true}
      cancelOnInteraction={false}
      interval={1500}
      bullets={false}
      organicArrows={true}
      
    >
      <div data-src={img1} />
      <div data-src={img2} />
      <div data-src={img3} />
      <div data-src={img4} />
      <div data-src={img5} />
      <div data-src={img6} />


    </AutoplaySlider>
    </div>

  );
}
