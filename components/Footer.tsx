import Link from "next/link";
import { siteMetadata } from "../siteMetadata";
import SocialIcon from "./social-icons";
import Github from "../../public/github.svg";
import ThemeSwitch from "./ThemeSwitch";

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <SocialIcon kind="github" size={20} href={siteMetadata.github} />
          <div>{` • `}</div>

          <ThemeSwitch />
        </div>
      </div>
    </footer>
  )
}
