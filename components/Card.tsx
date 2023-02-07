import React from "react";
import Image from "next/image";
import { myLoader } from "../utils";
import { isMobile } from "react-device-detect";

import dynamic from "next/dynamic";

const CardWrap = dynamic(() => import("./lazyCard"), {
  ssr: false,
});

const Content = (props: any) => {
  return <div className="p-4 pt-5 select-none flex-1 flex flex-col" style={{flex:'50% 1 1'}}>{props.children}</div>;
};

const MyImage = ({
  background,
  isMobile = false,
}: {
  background: string;
  isMobile?: boolean;
}) => {
  return (
    <div className=" flex-1  relative  " style={{flex:'50% 1 1'}}>
      <Image
        unoptimized
        loader={myLoader}
        src={`${background}`}
        alt="图片丢了"
        width={"100%"}
        height={ isMobile ? 50: 70}
        className=" transition-all	 duration-300	"
        onMouseEnter={({ target }) => {
          (target as HTMLImageElement).style.transform = "scale(1.2)";
        }}
        onMouseLeave={({ target }) => {
          (target as HTMLImageElement).style.transform = "scale(1)";
        }}
        layout="responsive"
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
  const { background, className, style, index=0, children } = props;
  const classStyle = {
    className,
    style,
  };

  if (isMobile) {
    return (
      <CardWrap
        {...classStyle}
        style={{ ...style, display: isMobile ? "block" : "flex" }}
      >
        {background && <MyImage isMobile background={background} />}
        <Content>{children}</Content>
      </CardWrap>
    );
  }

  if (!background) {
    return (
      <CardWrap {...classStyle}>
        <Content>{children}</Content>
      </CardWrap>
    );
  }

  if (index % 2 === 0) {
    return (
      <CardWrap {...classStyle}>
        <Content>{children}</Content>
        <MyImage background={background} />
      </CardWrap>
    );
  }

  return (
    <CardWrap {...classStyle}>
      <MyImage background={background} />
      <Content>{children}</Content>
    </CardWrap>
  );
};

export default Card;
