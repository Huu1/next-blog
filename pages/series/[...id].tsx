import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
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
  const res = await fetch(`${API}/article/${params.id?.[1]}`);
  const post = await res.json();

  // 通过 props 参数向页面传递博文的数据
  return { props: { post: post?.data }, revalidate: 10 };
}

export default function Index({ post }: { post: IArticle }) {
  return (
    <div>
      <article className="prose prose-slate    max-w-none overflow-hidden dark:prose-invert md:prose-lg lg:prose-xl">
        <ReactMarkdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>
          {post?.content?.content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
