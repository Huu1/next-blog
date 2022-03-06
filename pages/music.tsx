import React, { useContext, useEffect, useRef, useState } from "react";
import { musicContext } from "../context/musicContext";

const Music = () => {
  const [audioRef] = useContext<any>(musicContext);
  useEffect(()=>{
    console.log(audioRef);
    
  },[audioRef])
  return (<div>
    你好啊
  </div>);
};
export default Music;
