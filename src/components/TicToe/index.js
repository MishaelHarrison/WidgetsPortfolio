import React, { useEffect, useRef, useState } from "react";

import "./index.css";
import "./tiles.css";
import Tile from "./Tile";
import TileStack from "./TileStack";
import Animator from "./Animator";
import Grid from "./Grid";

const leftIn = (count, onCompletion) => {
  return {
    subject: <Tile type="O" layer="1000" />,
    begin: { x: 10, y: -50 + count * 60 },
    end: { x: 140, y: 130 },
    onCompletion,
  };
};

const Main = () => {
  const [leftCount, setLeftCount] = useState(5);
  const [animation, setAnimation] = useState(null);
  const [leftActive, setLeftActive] = useState(false);
  const [animateing, setAnimateing] = useState(false);
  const [mouseLocation, setMouseLocation] = useState({ x: 0, y: 0 });

  const [mainDiv, mouseFollower] = [useRef(null), useRef(null)];

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

  useEffect(() => {
    const eventProps = [
      "mousemove",
      (e) => {
        setMouseLocation({ x: e.clientX, y: e.clientY });
      },
    ];
    if (mainDiv.current) mainDiv.current.addEventListener(...eventProps);
  }, [mainDiv]);

  return (
    <div
      onClick={!animateing && leftCount > 0 ? animate : () => {}}
      ref={mainDiv}
    >
      <div
        ref={mouseFollower}
        style={{
          transform: `translate(${mouseLocation.x - 55}px, ${
            mouseLocation.y - 55
          }px)`,
        }}
        className="cursor"
      >
        <Tile type="O" />
      </div>
      <Animator animation={animation} />
      <div className="tic-toe">
        <TileStack type="O" count={leftCount} />

        <div style={{ transform: "translate(0, 130px)" }}>
          {leftActive ? <Tile type="O" /> : null}
        </div>

        <div style={{ transform: "translate(0, 5px)" }}>
          <Grid content={[null, null, "X", "O"]} />
        </div>
      </div>
    </div>
  );
};

export default Main;
