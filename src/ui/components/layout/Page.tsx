import React from "react";

interface PageProps {
  name: string;
}

const Page: React.FC<PageProps> = props => {
  return (
    <div
      className={
        props.name +
        " container mx-auto h-full flex justify-center items-center"
      }
    >
      {props.children}
    </div>
  );
};

export default Page;
