import React, { useContext, useEffect, useRef, useState } from "react";
import { API } from "../../config";
import { musicContext } from "../../context/musicContext";
const prefix = `${'http://1.116.75.166:3000/'}/public/music/`;
function getRandomNumberByRange(start: number, end: number): number {
  return Math.floor(Math.random() * (end - start) + start);
}
const urlList = [`${prefix}a.mp3`, `${prefix}b.mp3`, `${prefix}t.mp3`];

let audio: HTMLAudioElement | null;

const useMusic = () => {
  const [_, setMusicRef] = useContext<any>(musicContext);
  const [audio, setAudio] = useState(false);
  useEffect(() => {
    const audio = new Audio(urlList[getRandomNumberByRange(0, urlList.length)]);
    setMusicRef(audio);

    function play() {
      audio?.play();
      document.removeEventListener("click", play);
    }
    document.addEventListener("click", play);
  }, [setMusicRef]);
  return (<></>);
};
export default useMusic;
