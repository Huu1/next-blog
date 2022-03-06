import React, { useCallback, useEffect, useState } from "react";

const THEME_KEY = "theme";

export const useToggle = (initialState: boolean = false) => {
  // Initialize the state
  const [state, setState] = useState<boolean>(initialState);

  // Define and memorize toggler function in case we pass down the comopnent,
  // This function change the boolean value to it's opposite value
  const toggle: any = useCallback(() => setState((state) => !state), []);

  return [state, toggle];
};

// const setItem = (key: string, value: any) => {
//   if (typeof window !== "undefined") {
//     localStorage.setItem(key, value);
//   }
// };
// const getItem = (key: string): any => {
//   if (typeof window !== "undefined") {
//     return localStorage.getItem(key);
//   }
// };

const initToggle = () => {
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  } else {
    return false;
  }
};

export const ThemeContext = React.createContext<any>(null);

function DarkContext(props: any) {
  const [isDark, changeDark] = useState(initToggle());
  const [ref, setRef] = useState<any>();
  
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(()=>{
    if(ref?.current) {
      if(isDark) {
        ref.current?.classList.add('markdown-body-dark')
      }else {
        ref.current?.classList.remove('markdown-body-dark')
      }
    }
  },[ref,isDark])

  return (
    <ThemeContext.Provider value={[isDark, changeDark,setRef]}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default DarkContext;
