import React from "react";

import Tile from "./Tile";

const TileStack = (props) => {
  const tileset = () => {
    const render = [];
    for (let i = 1; i <= props.count; i++)
      render.push(
        <React.Fragment key={i}>
          <Tile type={props.type} layer={i} />
        </React.Fragment>
      );
    return render;
  };

  return <div className="tile-shelf">{tileset()}</div>;
};

export default TileStack;
