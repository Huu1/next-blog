import React from "react";
import Image from "next/image";
import { myLoader } from "../utils";

import dynamic from "next/dynamic";

const CardWrap = dynamic(() => import("./lazyCard"), {
  ssr: false,
});

const Content = (props: any) => {
  return (
    <div className="p-4 pt-5 select-none flex-1 flex flex-col">
      {props.children}
    </div>
  );
};

const MyImage = ({
  background,
  isMobile = false,
}: {
  background: string;
  isMobile?: boolean;
}) => {
  return (
    <div className=" flex-1  relative  ">
      <Image
        unoptimized
        loader={myLoader}
        src={`${background}`}
        alt="图片丢了"
        width={"100%"}
        height={45}
        className=" transition-all	 duration-500	"
        onMouseEnter={({ target }) => {
          (target as HTMLImageElement).style.transform = "scale(1.2)";
        }}
        onMouseLeave={({ target }) => {
          (target as HTMLImageElement).style.transform = "scale(1)";
        }}
        layout="responsive"
        priority
      />
    </div>
  );
};

const Card = (props: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  background?: string;
  index?: number;
}) => {
  const { background, className, style, children } = props;
  const classStyle = {
    className,
    style,
  };

  return (
    <CardWrap {...classStyle}>
      {background && <MyImage isMobile background={background} />}
      <Content>{children}</Content>
    </CardWrap>
  );
};

export default Card;
