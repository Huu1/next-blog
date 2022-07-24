import SocialIcon from "../components/social-icons";
import Image from "../components/Image";
import { siteMetadata } from "../siteMetadata";
import avatar from "../public/img.jpg";
import ReactMarkdown from "react-markdown";
import { ThemeContext } from "../context/themeContext";
import { useContext } from "react";
const { author, occupation, email, github, selfIntroduction, TStack } =
  siteMetadata;

export default function About() {
  const [isDark] = useContext(ThemeContext);

  return (
    <>
      <div className="divide-y">
        <div className="space-y-2 pt-10 pb-2 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 ">
            关于我
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            {/* <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full"
            /> */}
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 dark:text-gray-100 tracking-tight">
              {author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">
              岗位：{occupation}
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              技术栈：{TStack}
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              邮箱：{email}
            </div>
            <div className="flex space-x-3 pt-6 dark:text-gray-100">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
            <article className="prose prose-slate    max-w-none overflow-hidden dark:prose-invert md:prose-lg lg:prose-xl">
              <ReactMarkdown>{selfIntroduction}</ReactMarkdown>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
