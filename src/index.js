import React from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Rect } from "react-konva";

const App = () => {
  const handelMouseOver = (e) => {
    const container = e.target.getStage().container();
    container.style.cursor = "pointer";
  };
  const handelMouseLeave = (e) => {
    const container = e.target.getStage().container();
    container.style.cursor = "default";
  };
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect
          x={200}
          y={100}
          width={100}
          height={50}
          fill={"#00D2FF"}
          stroke={"black"}
          strokeWidth={4}
          draggable
          onMouseEnter={handelMouseOver}
          onMouseLeave={handelMouseLeave}
        />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
