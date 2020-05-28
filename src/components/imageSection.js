import React from "react";
// import Draggable from "react-draggable";

const ImageSection = (props) => {
  var background = {
    backgroundImage: `url(${props.activeImage})`,
  };
  // let DraggableEventHandler = (e: Event, data: DraggableData) => void | false;
  return (
    <div className="content" ref={props.contentContainerRef} style={background}>
      <h1 className="top-text" draggable>
        {props.topText}
      </h1>
      <h1 className="bottom-text">{props.bottomText}</h1>

      {/* <Draggable
        axis="x"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        scale={1}
        // onStart={DraggableEventHandler}
        // onDrag={DraggableEventHandler}
        // onStop={DraggableEventHandler}
      >
        <div>
          <div>
            <h1 className="">{props.topText}</h1>
          </div>
          <h1 className="">{props.bottomText}</h1>
        </div>
      </Draggable> */}
    </div>
  );
};

export default ImageSection;
