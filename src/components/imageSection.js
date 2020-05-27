import React from "react";
import Col from "react-bootstrap/Col";

const ImageSection = (props) => {
  var background = {
    backgroundImage: `url(${props.activeImage})`,
  };
  return (
    <Col md={{ span: 8 }}>
      <div
        className="content"
        ref={props.contentContainerRef}
        style={background}
      >
        {/* <img src={props.activeImage} alt="meme"></img> */}
        <h1 className="top-text">{props.topText}</h1>
        <h1 className="bottom-text">{props.bottomText}</h1>
      </div>
    </Col>
  );
};

export default ImageSection;
