import React from "react";

const Tile = (props) => {
  return (
    <div
      className={`tile ${props.type}`}
      style={props.layer ? { zIndex: props.layer } : null}
    >
      <div className={props.type === "O" ? "circle" : "cross"} />
    </div>
  );
};

export default Tile;
