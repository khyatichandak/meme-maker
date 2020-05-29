import React from "react";
import Draggable from "react-draggable";

const ImageSection = (props) => {
  // var background = {
  //   backgroundImage: `url(${props.activeImage})`,
  // };

  return (
    <div className="content" ref={props.contentContainerRef}>
      <img src={props.activeImage}></img>
      <Draggable bounds="parent">
        <h1 className="top-text">{props.topText}</h1>
      </Draggable>
      <Draggable bounds="parent">
        <h1 className="bottom-text">{props.bottomText}</h1>
      </Draggable>
    </div>
  );
};

export default ImageSection;
