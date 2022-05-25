import React from "react";
import Tile from "./Tile";

const Grid = (props) => {
  const renderedContent = () => {
    return props.content
      ? props.content.map((x, i) => {
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                transform: `translate(${(i % 3) * 125}px, ${
                  Math.floor(i / 3) * 125
                }px)`,
              }}
            >
              {x ? <Tile type={x} /> : null}
            </div>
          );
        })
      : null;
  };
  return (
    <div>
      <div
        className="grid-line-horizantal"
        style={{ transform: "translate(0,115px)" }}
      />
      <div
        className="grid-line-horizantal"
        style={{ transform: "translate(0,240px)" }}
      />
      <div
        className="grid-line-vertical"
        style={{ transform: "translate(115px,0)" }}
      />
      <div
        className="grid-line-vertical"
        style={{ transform: "translate(240px,0)" }}
      />
      {renderedContent()}
    </div>
  );
};

export default Grid;
