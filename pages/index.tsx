import type { NextPage } from "next";
import { API } from "../config";
import SeriesCardList from "../components/SeriesCardList";
import PostCard from "../components/postCard";

// 此函数在构建时被调用
export async function getStaticProps() {
  // 调用外部 API 获取博文列表
  const res = await fetch(
    `${API}/article/post?pageSize=5&current=1`
  );
  const posts = await res.json();

  const series = await fetch(`${API}/series`);
  const seriesList = await series.json();

  // 通过返回 { props: { posts } } 对象，Blog 组件
  // 在构建时将接收到 `posts` 参数
  return {
    props: {
      posts: posts?.data?.list ?? [],
      seriesList: seriesList?.data ?? [],
    },
    revalidate: 10,
  };
}

const Home: NextPage = ({ posts, seriesList }: any) => {
  return (
    <>
      <div className=" my-7 pb-2  ">
        <span className=" text-lg  font-bold tracking-wide	text-light-text dark:text-dark-text">
          hi,欢迎来到我的博客
        </span>
      </div>
      <div className=" my-7 pb-2 border-gray-200 dark:border-gray-900 border-b	 ">
        <span className=" text-lg  font-bold tracking-wide	text-light-text dark:text-dark-text">
          最新文章
        </span>
      </div>
      <PostCard list={posts} />
      <div className=" my-7 pb-2 border-gray-200 dark:border-gray-900 border-b	 ">
        <span className=" text-lg  font-bold tracking-wide	text-light-text dark:text-dark-text">
          系列
        </span>
      </div>
      <SeriesCardList list={seriesList} />
    </>
  );
};

export default Home;
