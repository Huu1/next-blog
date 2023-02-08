import * as React from "react";
import Image from "next/image";

import Mail from "../../public/mail.svg";
import Github from "../../public/github.svg";

const components: any = {
  mail: Mail,
  github: Github,
};

const SocialIcon = function ({ kind, href, size = 26 }: any) {
  if (
    !href ||
    (kind === "mail" &&
      !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href))
  )
    return <></>;
  const SocialSvg = components[kind];

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <Image src={SocialSvg} alt="图片丢了" width={size} height={size} />
    </a>
  );
};

export default SocialIcon;
