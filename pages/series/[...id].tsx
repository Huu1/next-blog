import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import PostPage from "../../components/PostPage";
import { API } from "../../config";
import { IArticle } from "../../types";

import Notfond from "../404";

export async function getStaticPaths() {
  // 调用外部 API 获取博文列表
  const res = await fetch(`${API}/series`);
  const result = await res.json();

  // // 据博文列表生成所有需要预渲染的路径
  const paths = Array.isArray(result.data)
    ? result.data.map(({ series_name }: any) => ({
        params: { id: [series_name] },
      }))
    : [];

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: any) {
  if (params?.id?.length > 2) {
    return { props: { post: [], noMatch: true }, revalidate: 60 };
  } else {
    const [seriesName, id] = params?.id;
    const res = await fetch(`${API}/series/${seriesName}/${id}`);
    const post = await res.json();

    // 通过 props 参数向页面传递博文的数据
    return { props: { post: post?.data, noMatch: false }, revalidate: 60 };
  }
}

export default function Index({
  post,
  noMatch,
}: {
  post: IArticle;
  noMatch?: boolean;
}) {
  return noMatch ? (
    <Notfond />
  ) : (
    <>
      <PostPage post={post} />
      {/* {post?.tag && (
        <div className="my-8 mt-7  text-lg  p-3 flex-wrap flex justify-between	item-center">
          {
            <span
              className={`${
                post?.previous
                  ? " cursor-pointer text-light-text dark:text-dark-text"
                  : "cursor-not-allowed	text-light-disabled dark:text-dark-disabled"
              }   inline-flex items-center`}
              onClick={() => {
                if (post?.previous) {
                  router.push(`/post/${post?.previous.articleId}`);
                }
              }}
            >
              {
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 8 8 12 12 16"></polyline>
                  <line x1="16" y1="12" x2="8" y2="12"></line>
                </svg>
              }
              {"Prev"}
            </span>
          }
          {
            <span className="flex text-light-text dark:text-dark-text items-center">
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
              <span className=" inline-block ml-2">{post?.tag?.title}</span>
            </span>
          }
          {
            <span
              onClick={() => {
                if (post?.next) {
                  router.push(`/post/${post?.next.articleId}`);
                }
              }}
              className={`${
                post?.next
                  ? " cursor-pointer text-light-text dark:text-dark-text"
                  : "cursor-not-allowed	text-light-disabled dark:text-dark-disabled"
              }   inline-flex items-center`}
            >
              {"Next"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 16 16 12 12 8"></polyline>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </span>
          }
        </div>
      )} */}
    </>
  );
}
