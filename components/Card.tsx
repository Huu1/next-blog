import React from "react";
import Image from "next/image";
import { myLoader } from "../utils";

const Card = (props: {
  children: React.ReactElement;
  background?: string;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const { background, className, style } = props;
  return (
    <div
      style={{ maxWidth: 620, ...style }}
      className={`${className} bg-light-card_bg dark:bg-dark-card_bg my-0 m-auto mb-5 shadow-lg  rounded-lg overflow-hidden`}
    >
      {background && (
        <div className=" w-full h-80 relative  ">
          <Image
            loader={myLoader}
            src={`${background}`}
            alt="图片丢了"
            layout="fill"
          />
        </div>
      )}
      <div className="p-4 select-none	">{props.children}</div>
    </div>
  );
};

export default Card;
