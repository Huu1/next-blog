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
        className={`${props.className} cursor-pointer  px-2 border rounded border-light-link  dark:border-dark-link text-light-link dark:text-dark-link`}
      >
        {props.children}
      </span>
    </Link>
  );
};

export default Tag;
