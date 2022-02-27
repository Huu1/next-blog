import Image from 'next/image';
import React, { useContext, useEffect } from 'react';

const imgWidth = 56;

import avatar from "../public/img.jpg";
import Music from './Musice';

const UserInfo = (props:any) => {
  
  return (
    <div className='flex justify-start items-center mb-10 text-base'>
      <div className='mr-4'>
        <Image  
        objectFit='cover'
        width={imgWidth}
        className='rounded-full '
        height={imgWidth}
        src={avatar} alt="图片走丢了" />
      </div>
      <div className='info flex-1 tracking-wide break-all dark:text-white	'>
        <h4>
          hy的个人博客~
          <br />
          记录一些记不住的事情。
        </h4>
      </div>
    </div>
  );
};

export default UserInfo;