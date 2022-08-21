import React from "react";
import PostCard from "../../components/postCard";
import { API } from "../../config";
import { IArticle } from "../../types";

export async function getStaticPaths() {
  // 调用外部 API 获取博文列表
  const res = await fetch(`${API}/tag`);
  const tags = await res.json();

  // 据博文列表生成所有需要预渲染的路径
  const paths = Array.isArray(tags.data)
    ? tags.data.map(({ tag_name: name }: any) => ({
        params: { name },
      }))
    : [];

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }: any) {
  // params 包含此片博文的 `id` 信息。
  // 如果路由是 /posts/1，那么 params.id 就是 1
  const res = await fetch(`${API}/tag/${params.name}`);
  const posts = await res.json();

  // 通过 props 参数向页面传递博文的数据
  return { props: { posts: posts.data?.list || []}, revalidate: 10 };
}

export default function Tags({ posts }:any) {
  return (
    <>
      <>
        <div className="space-y-2 pt-4 pb-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 ">
            {/* {"Tag /"} {posts.title} */}
            Tag
          </h1>
        </div>
        {<PostCard list={posts} />}
      </>
    </>
  );
}
