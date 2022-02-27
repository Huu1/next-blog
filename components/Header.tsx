import Link from "next/link";
import React, { useContext } from "react";
import Music from "./Musice";
// import { ThemeContext } from '@/context/theme';
// import { withRouter } from 'react-router';

function Header() {
  // const [isDark, changeDark] = useContext(ThemeContext);

  return (
    <div className="mb-10 flex justify-between items-center">
      <Link href={'/'} passHref >
        <h1 className="text-4xl font-black dark:text-white cursor-pointer">
          踏遍青山人未老，
        </h1>
      </Link>
      <Music />
    </div>
  );
}

export default Header;
