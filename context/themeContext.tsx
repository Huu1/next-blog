import React, { useCallback, useEffect, useState } from "react";

const THEME_KEY = "theme";
export const useToggle = (initialState: boolean = false) => {
  // Initialize the state
  const [state, setState] = useState<boolean>(initialState);
  const toggle: any = useCallback(() => setState((state) => !state), []);

  return [state, toggle];
};
const initToggle = () => {
  if (typeof window !== "undefined") {
    const isdark = localStorage.getItem(THEME_KEY) ==='dark';
    return isdark || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
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
      localStorage.setItem(THEME_KEY, "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem(THEME_KEY, "light");
    }
  }, [isDark]);

  useEffect(() => {
    if (ref?.current) {
      if (isDark) {
        ref.current?.classList.add("markdown-body-dark");
      } else {
        ref.current?.classList.remove("markdown-body-dark");
      }
    }
  }, [ref, isDark]);

  return (
    <ThemeContext.Provider value={[isDark, changeDark, setRef]}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default DarkContext;
