import Link from "./Link";
import React from "react";
import MobileNav from "./MobileNav";
import ThemeSwitch from "./ThemeSwitch";
import { siteMetadata } from "../siteMetadata";
import { withRouter } from "next/router";
import Page from "./Page";

export const RouterList = [
  {
    title: "文章",
    href: "/",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></path>
        <polyline points="2.32 6.16 12 11 21.68 6.16"></polyline>
        <line x1="12" y1="22.76" x2="12" y2="11"></line>
      </svg>
    ),
  },
  {
    title: "系列",
    href: "/series",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      </svg>
    ),
  },
  {
    title: "标签",
    href: "/tags",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
        <line x1="7" y1="7" x2="7" y2="7"></line>
      </svg>
    ),
  },
  {
    title: "关于我",
    href: "/about",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-label="Go to speaking page"
      >
        <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
        <line x1="2" y1="20" x2="2" y2="20"></line>
      </svg>
    ),
  },
];

function Header(props: any) {
  const { router } = props;

  return (
    <div className=" w-full pt-0">
      <Page className="flex h-16 pt-0 justify-between items-center">
        <>
          <Link href="/">
            <h1 className="text-3xl font-black dark:text-white cursor-pointer ">
              {siteMetadata.headerTitle}
            </h1>
          </Link>
          <div className="flex items-center text-base ">
            <div className=" sm:flex hidden">
              {RouterList.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className={`p-1 font-medium  sm:p-4 flex fill-current ${
                    router.asPath === link.href
                      ? " text-light-active dark:text-dark-active"
                      : "text-light-text dark:text-dark-text"
                  }`}
                >
                  {link.svg}
                  <span className=" ml-2 inline-block">{link.title}</span>
                </Link>
              ))}
            </div>
            <MobileNav />
          </div>
        </>
      </Page>
    </div>
  );
}

export default withRouter(Header);
