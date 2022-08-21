import Image from "next/image";
import React, { useContext } from "react";
import { siteMetadata } from "../siteMetadata";
import avatar from "../public/img.jpg";
import Link from "next/link";

const imgWidth = 72;

const UserInfo = (props: any) => {
  return (
    <div className="flex justify-start items-center mb-10 mt-7 text-base">
      <div className="mr-4 play" >
        <Image
          objectFit="cover"
          width={imgWidth}
          className="rounded-full "
          height={imgWidth}
          src={avatar}
          alt="图片走丢了"
        />
      </div>
      <Link href={'/about'} passHref>
        <div className="info flex-1 tracking-wide break-all dark:text-white	cursor-pointer">
          <h4>
            {siteMetadata.title}
            <br />
            {siteMetadata.description}
          </h4>
        </div>
      </Link>
    </div>
  );
};

export default UserInfo;
