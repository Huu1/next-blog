import Link from "./Link";
import React, { useContext } from "react";
import Music from "./Musice";
import MobileNav from "./MobileNav";
import { headerNavLinks } from "../config";
import ThemeSwitch from "./ThemeSwitch";
import { siteMetadata } from "../siteMetadata";
// import { ThemeContext } from '@/context/theme';
// import { withRouter } from 'react-router';

function Header() {
  // const [isDark, changeDark] = useContext(ThemeContext);

  return (
    <div className="mb-10 flex justify-between items-center">
      <Link href='/'>
        <h1 className="text-3xl font-black dark:text-white cursor-pointer">
          {siteMetadata.headerTitle}
        </h1>
      </Link>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <ThemeSwitch />
        <MobileNav />
      </div>
      {/* <Music /> */}
    </div>
  );
}

export default Header;
