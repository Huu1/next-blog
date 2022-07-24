import React from "react";
import { API } from "../../config";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Tag from "../../components/Tag";
import { withRouter } from "next/router";

// 此函数在构建时被调用
export async function getStaticPaths() {
  // 调用外部 API 获取博文列表
  const res = await fetch(
    `${API}/article/queryAllPublish?current=1&pageSize=999`
  );
  const data = await res.json();

  // 据博文列表生成所有需要预渲染的路径
  const paths = data.data.list.map((post: any) => ({
    params: { id: post.articleId },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: "blocking" };
}

// 在构建时也会被调用
export async function getStaticProps({ params }: any) {
  // params 包含此片博文的 `id` 信息。
  // 如果路由是 /posts/1，那么 params.id 就是 1
  const res = await fetch(`${API}/article/${params.id}`);
  const post = await res.json();

  // 通过 props 参数向页面传递博文的数据
  return { props: { posts: post.data }, revalidate: 10 };
}

const Post = ({ posts: post, router }: any) => {
  return (
    <div className="mt-10 mb-14">
      <article className="prose prose-slate    max-w-none overflow-hidden dark:prose-invert md:prose-lg lg:prose-xl">
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
      <div className="text-base mt-4 flex dark:text-gray-400">
        {post?.label
          ?.filter((i: any) => i.status === "on")
          .map(({ labelId, title }: any) => {
            return (
              <Tag className="mr-3" key={labelId} url={`/tags/${title}`}>
                {title}
              </Tag>
            );
          })}
      </div>
      {post?.tag && (
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
      )}
    </div>
  );
};

export default withRouter(Post);
