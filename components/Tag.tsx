import Link from "next/link";
import React from "react";

const Tag = (props: {
  children: React.ReactElement;
  url: string;
  className?: string;
}) => {
  return (
    <Link href={props.url} passHref>
      <span
        className={`${props.className} text-sm rounded cursor-pointer pb-1   px-2 border  `}
        style={{ background: "#eee" ,color: "#797979" }}
      >
       {props.children}
      </span>
    </Link>
  );
};

export default Tag;
