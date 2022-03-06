import React, { useCallback, useEffect, useState } from "react";


export const musicContext = React.createContext<any>(null);

function MusicContext(props: any) {
  const [musicRef, setMusicRef] = useState();

  return (
    <musicContext.Provider value={[musicRef, setMusicRef]}>
      {props.children}
    </musicContext.Provider>
  );
}

export default MusicContext;
