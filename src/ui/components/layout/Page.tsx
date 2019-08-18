import React from "react";
import Background from "../layout/Background";

interface PageProps {
  name: string;
  backgroundImage?: any;
}

const Page: React.FC<PageProps> = props => {
  return (
    <Background backgroundImage={props.backgroundImage}>
      <div
        className={
          props.name +
          " container mx-auto h-full flex justify-center items-center"
        }
      >
        {props.children}
      </div>
    </Background>
  );
};

export default Page;
