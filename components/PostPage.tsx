import dayjs from "dayjs";
import { useRouter, withRouter } from "next/router";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { IArticle } from "../types";
import Tag from "./Tag";

const PostPage = ({
  post,
  children,
}: {
  post: IArticle;
  children?: React.ReactChildren;
}) => {
  const router = useRouter();
  return (
    <div className="mt-6 mb-10 max-w-3xl m-auto ">
      <div className="px-4 sm:px-0">
        <div className=" text-2xl font-semibold	 mb-1 text-black dark:text-white ">
          {post.title}
        </div>
        <small className=" text-sm select-none tracking-widest	  text-light-text dark:text-dark-text 	">
          发布于{dayjs(post.time).format("YYYY年MM月DD日")} · 预计阅读时间{" "}
          {post.readTime}
          分钟
        </small>
        <article className="prose prose-slate mt-8  max-w-none overflow-hidden dark:prose-invert ">
          <ReactMarkdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
            {post?.content?.content}
          </ReactMarkdown>
        </article>

        <div className="flex items-center  text-light-text dark:text-dark-text mt-12">
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
            className=" "
          >
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
            <line x1="7" y1="7" x2="7" y2="7"></line>
          </svg>
          <span className=" inline-block ml-1">标签</span>
        </div>
        <div className="text-base flex-wrap flex dark:text-gray-400 items-center mt-4">
          {post?.tag.map(({ id, title }: any) => {
            return (
              <Tag className="mr-3 mb-2" key={id} url={`/tags/${title}`}>
                {title}
              </Tag>
            );
          })}
        </div>

        <div
          onClick={() => {
            router.back();
          }}
          className="mt-10 p-2 px-4 inline-block bg-black text-lime-50 rounded-md text-xs shadow-md cursor-pointer"
        >
          ← 返回博客
        </div>
        {children}
      </div>
    </div>
  );
};

export default PostPage;
