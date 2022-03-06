import React, { useState } from "react";
import Article from "../../components/Article";
import { API } from "../../config";
import SearchLayout from "../../Layout/SearchLayout";
import { IArticle } from "../../types";

export async function getStaticPaths() {
  // 调用外部 API 获取博文列表
  const res = await fetch(`${API}/classic/allLabel`);
  const labelList = await res.json();

  // 据博文列表生成所有需要预渲染的路径
  const paths = Array.isArray(labelList.data) ? labelList.data.map(({ labelId: id }: any) => ({
    params: { id },
  })) : [];

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }: any) {
  // params 包含此片博文的 `id` 信息。
  // 如果路由是 /posts/1，那么 params.id 就是 1
  const res = await fetch(`${API}/classic/label/${params.id}`);
  const posts = await res.json();

  // 通过 props 参数向页面传递博文的数据
  return { props: { posts: posts.data } };
}

export default function Tags({posts}: { posts:{title: string; article: IArticle[]} }) {
  
  return <SearchLayout posts={posts} />
}
