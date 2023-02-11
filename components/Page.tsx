import React from "react";
import classNames from "classnames";

const Page = (props: { children: React.ReactElement; className?: string }) => {
  const { children } = props;
  const className = classNames(
    "max-w-3xl m-auto py-8 px-3 pb-0 sm:px-0",
    props.className
  );
  

  return <div className={className}>{children}</div>;
};

export default Page;
