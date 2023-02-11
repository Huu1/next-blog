import type { NextPage } from "next";
import PostCard from "../components/postCard";
import { API } from "../config";

// 此函数在构建时被调用
export async function getStaticProps() {
  // 调用外部 API 获取博文列表
  const res = await fetch(`${API}/article/post`);
  const posts = await res.json();
  // 通过返回 { props: { posts } } 对象，Blog 组件
  // 在构建时将接收到 `posts` 参数
  return {
    props: {
      posts: posts?.data?.list ?? [],
    },
    revalidate: 60,
  };
}
const Home: NextPage = ({ posts }: any) => {
  return <PostCard list={posts} />;
};

export default Home;
