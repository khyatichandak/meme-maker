import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Result from "./result";
const FormSection = (props) => {
  return (
    <>
      Drag Text to reset position
      <div className="form__inputs">
        <Form.Group>
          <Form.Control
            type="text"
            name="top-text"
            placeholder="Top text"
            onChange={props.handleInputChange}
            value={props.topText}
          />
          <br />
          <Form.Control
            type="text"
            name="bottom-text"
            placeholder="Bottom text"
            onChange={props.handleInputChange}
            value={props.bottomText}
          />
        </Form.Group>
      </div>
      <label variant="light" htmlFor="fileInput" className="btn btn-light">
        Upload Image
        <input
          id="fileInput"
          name="fileInput"
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={props.handleImageInputChange}
          hidden
        />
      </label>{" "}
      (.jpg, .jpeg, .png)
      <br></br>
      <br></br>
      <Button variant="success" onClick={props.handleImageChange}>
        Change Image
      </Button>
      <Button variant="info" onClick={props.handleMemeGeneration}>
        Generate Meme
      </Button>
      <Button
        variant="danger"
        onClick={props.handleMemeReset}
        disabled={!props.isMemeGenerated}
      >
        Reset
      </Button>
      <Result resultContainerRef={props.resultContainerRef} />
    </>
  );
};

export default FormSection;
