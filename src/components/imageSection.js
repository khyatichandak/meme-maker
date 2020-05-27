import React from "react";
import Col from "react-bootstrap/Col";

const ImageSection = (props) => {
  var background = {
    backgroundImage: `url(${props.activeImage})`,
  };
  return (
    <div className="content" ref={props.contentContainerRef} style={background}>
      <h1 className="top-text" draggable>
        {props.topText}
      </h1>
      <h1 className="bottom-text">{props.bottomText}</h1>
    </div>
  );
};

export default ImageSection;
