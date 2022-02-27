import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { API } from "../config";
const prefix = `${API}/public/music/`;
function getRandomNumberByRange(start: number, end: number): number {
  return Math.floor(Math.random() * (end - start) + start);
}
const urlList = [`${prefix}a.mp3`, `${prefix}b.mp3`, `${prefix}t.mp3`];

let audio:HTMLAudioElement | null;

const Music = () => {
  const audioStyle= useRef<any>();
  const [isPlay,setPlay]=useState(false);
  useEffect(() => {
    audio = new Audio(urlList[getRandomNumberByRange(0, urlList.length)]);
    function play() {
      audio?.play();
      setPlay(true);
      document.removeEventListener("click", play);
    }
    document.addEventListener("click", play);

    return () => {
      audio?.pause();
      setPlay(false);
    };
  }, []);
  const clickHandle=()=>{
    if(audio) {
      if(audio.paused) {
        audio.play();
        setPlay(true);
      }else {
        audio.pause();
        setPlay(false)
      }
    }
  }
  return (
    <>
      <div  className={`${isPlay ? '': ''} music-wrap`} onClick={clickHandle} >
          <div className={`${!isPlay ? 'play': 'pause'} button`} ref={audioStyle}></div>
      </div>
    </>
  );
};
export default Music;
