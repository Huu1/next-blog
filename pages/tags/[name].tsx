import React from "react";
import Page from "../../components/Page";
import PostCard from "../../components/postCard";
import { API } from "../../config";

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
  return {
    props: { posts: posts.data?.list || [], tagName: params.name },
    revalidate: 60,
  };
}

export default function Tags({ posts, tagName }: any) {
  return (
    <>
      <Page>
        <div className="max-w-3xl m-auto">
          <div className="space-y-2 pb-6 md:space-y-5  ">
            <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 ">
              {"标签 -"} {tagName}
            </h1>
          </div>
        </div>
      </Page>
      {<PostCard list={posts} />}
    </>
  );
}
