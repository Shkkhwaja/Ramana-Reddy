import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fold-out-animation.css"; 
import img1 from "../../Component/Images/Slider/Slider-3/img-1.jpg"
import img2 from "../../Component/Images/Slider/Slider-3/img-2.jpg"
import img3 from "../../Component/Images/Slider/Slider-3/img-3.jpg"



const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function SliderThree() {
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



    </AutoplaySlider>
    </div>

  );
}
