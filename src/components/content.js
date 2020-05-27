import React from "react";
import FormSection from "./formSection";
import ImageSection from "./imageSection";
import Row from "react-bootstrap/Row";

const Content = (props) => {
  return (
    <Row>
      <ImageSection
        contentContainerRef={props.contentContainerRef}
        activeImage={props.activeImage}
        topText={props.topText}
        bottomText={props.bottomText}
      />
      <FormSection
        handleInputChange={props.handleInputChange}
        handleImageChange={props.handleImageChange}
        handleMemeGeneration={props.handleMemeGeneration}
        handleImageInputChange={props.handleImageInputChange}
        handleMemeReset={props.handleMemeReset}
        isMemeGenerated={props.isMemeGenerated}
        topText={props.topText}
        bottomText={props.bottomText}
      />
    </Row>
  );
};
export default Content;
