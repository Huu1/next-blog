import { withRouter } from "next/router";
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
  return (
    <div className="mt-10 mb-14">
      <article className="prose prose-slate    max-w-none overflow-hidden dark:prose-invert md:prose-base lg:prose-lg">
        <ReactMarkdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
          {post?.content?.content}
        </ReactMarkdown>
      </article>

      <div className="flex items-center mt-14 text-light-text dark:text-dark-text">
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
        <span className=" inline-block ml-1">Tags</span>
      </div>
      <div className="text-base flex-wrap mt-4 flex dark:text-gray-400">
        {post?.tag
          .map(({ id, title }: any) => {
            return (
              <Tag className="mr-3 mb-2" key={id} url={`/tags/${title}`}>
                {title}
              </Tag>
            );
          })}
      </div>
      {children}
    </div>
  );
};

export default PostPage;
