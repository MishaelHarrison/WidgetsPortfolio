import React, { useState } from "react";

import "./index.css";
import "./tiles.css";
import Tile from "./Tile";
import TileStack from "./TileStack";
import Animator from "./Animator";
import Grid from "./Grid";

const leftIn = (count, onCompletion) => {
  return {
    subject: <Tile type="O" layer="1000" />,
    begin: { x: 20, y: -40 + count * 60 },
    end: { x: 140, y: 130 },
    onCompletion: onCompletion,
  };
};

const Main = () => {
  const [leftCount, setLeftCount] = useState(4);
  const [animation, setAnimation] = useState(null);
  const [leftActive, setLeftActive] = useState(true);
  const [animateing, setAnimateing] = useState(false);

  const animate = () => {
    setAnimateing(true);
    setLeftCount(leftCount - 1);
    setLeftActive(false);
    setAnimation(
      leftIn(leftCount, () => {
        setAnimateing(false);
        setAnimation(null);
        setLeftActive(true);
      })
    );
  };

  return (
    <div onClick={!animateing && leftCount > 0 ? animate : () => {}}>
      <Animator animation={animation} />
      <div className="tic-toe">
        <TileStack type="O" count={leftCount} />

        <div style={{ transform: "translate(0, 130px)" }}>
          {leftActive ? <Tile type="O" /> : null}
        </div>

        <div style={{ transform: "translate(0, 5px)" }}>
          <Grid
            content={[
              <Tile type="O" />,
              <Tile type="X" />,
              <Tile type="O" />,
              <Tile type="X" />,
              <Tile type="O" />,
              <Tile type="X" />,
              <Tile type="O" />,
              <Tile type="X" />,
              <Tile type="O" />,
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
