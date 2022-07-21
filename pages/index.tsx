import type { NextPage } from "next";
import { useContext } from "react";
import Article from "../components/Article";
import UserInfo from "../components/UserInfo";
import { API } from "../config";
import { ThemeContext } from "../context/themeContext";
import { IArticle } from "../types";

// 此函数在构建时被调用
export async function getStaticProps() {
  // 调用外部 API 获取博文列表
  const res = await fetch(
    `${API}/article/queryAllPublish?current=1&pageSize=999`
  );
  const posts = await res.json();

  // 通过返回 { props: { posts } } 对象，Blog 组件
  // 在构建时将接收到 `posts` 参数

  return {
    props: {
      posts: posts?.data?.list ?? [],
    },
    revalidate: 10,
  };
}

const Home: NextPage = ({ posts }: any) => {
  return (
    <div className=" mt-5">
      {posts.map((article: IArticle) => {
        return <Article key={article.articleId} article={article} />;
      })}
    </div>
  );
};

export default Home;
