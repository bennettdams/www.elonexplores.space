import React from "react";

interface BackgroundProps {
  backgroundImage?: any;
}

const Background: React.FC<BackgroundProps> = props => {
  return (
    <div
      className="background h-full w-full bg-cover"
      style={{ backgroundImage: "url(" + props.backgroundImage + ")" }}
    >
      {props.children}
    </div>
  );
};

export default Background;
