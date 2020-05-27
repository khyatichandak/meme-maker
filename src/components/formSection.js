import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const FormSection = (props) => {
  return (
    <Col md={{ span: 4 }} className="pull-right">
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
      <Form>
        <div className="mb-3">
          <Form.File id="formcheck-api-custom" custom>
            <Form.File.Input isValid accept=".jpg, .jpeg, .png" />
            <Form.File.Label data-browse="Upload Image">
              .jpg, .jpeg, .png
            </Form.File.Label>
          </Form.File>
        </div>
      </Form>
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
      {/* </div> */}
    </Col>
  );
};

export default FormSection;
