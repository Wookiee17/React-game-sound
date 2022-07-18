import React from "react";
import ReactSlider from "react-slider";
import "../styles.css";
import "./slider.css";
const Slider = ({ onChange, currentIndex }) => {
  return (
    <div >
    <ReactSlider
      className="vertical-slider"
      markClassName="example-mark"
      onChange={onChange}
      trackClassName="example-track"
      defaultValue={0}
      value={currentIndex}
      min={0}
      max={7}
      marks
      renderMark={(props) => {
        if (props.key-1 < currentIndex) {
          props.className = "example-mark example-mark-completed";
        } else if (props.key-1 === currentIndex) {
          props.className = "example-mark example-mark-active";
        }
        return <span {...props} />;
      }}
      orientation="vertical"
    />
    </div>
  );
};

export default Slider;
