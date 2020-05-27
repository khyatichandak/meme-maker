import React from "react";
import FormSection from "./formSection";
import ImageSection from "./imageSection";
import Result from "./result";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Content = (props) => {
  return (
    <Row>
      <Col md={{ span: 8 }}>
        <ImageSection
          contentContainerRef={props.contentContainerRef}
          activeImage={props.activeImage}
          topText={props.topText}
          bottomText={props.bottomText}
        />
      </Col>
      <Col md={{ span: 4 }}>
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
        <Result resultContainerRef={props.resultContainerRef} />
      </Col>
    </Row>
  );
};
export default Content;
