import React, { useState } from "react";

import "./index.css";
import "./tiles.css";
import Tile from "./Tile";
import TileStack from "./TileStack";
import Animator from "./Animator";

const leftIn = (count, onCompletion) => {
  return {
    subject: <Tile type="O" layer="1000" />,
    begin: { x: 20, y: -40 + count * 60 },
    end: { x: 140, y: 120 },
    onCompletion: onCompletion,
  };
};

const Main = () => {
  const [leftCount, setLeftCount] = useState(5);
  const [animation, setAnimation] = useState(null);
  const [leftActive, setLeftActive] = useState(false);
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
        {leftActive ? (
          <div style={{ transform: "translate(30px, 120px)" }}>
            <Tile type="O" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Main;
