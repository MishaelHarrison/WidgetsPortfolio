import React from "react";

const Animator = (props) => {
  if (!props.animation) return <div />;

  const { begin, end } = props.animation;

  return (
    <div>
      <style>
        {`@keyframes animation {
          from, 15% { transform: translate(${begin.x}px, ${begin.y}px); }
          85%, to { transform: translate(${end.x}px, ${end.y}px); }}`}
      </style>
      <div
        className="animation"
        style={{
          animationName: "animation",
          animationDuration: "0.75s",
          animationFillMode: "forwards",
        }}
        onAnimationEnd={props.animation.onCompletion}
      >
        {props.animation.subject}
      </div>
    </div>
  );
};

export default Animator;
