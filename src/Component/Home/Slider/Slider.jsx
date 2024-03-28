import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fold-out-animation.css"; 
import img1 from "../../Images/Slider/img-1.jpeg";
import img2 from "../../Images/Slider/img-2.jpeg";
import img3 from "../../Images/Slider/img-3.jpeg";
import img4 from "../../Images/Slider/img-5.jpeg";
import img5 from "../../Images/Slider/img-4.jpeg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function Slider() {
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false}
      interval={1000}
      bullets={false}
      organicArrows={false}
      
    >
      <div data-src={img1} />
      <div data-src={img2} />
      <div data-src={img3} />
      <div data-src={img4} />
      <div data-src={img5} />

    </AutoplaySlider>
  );
}
