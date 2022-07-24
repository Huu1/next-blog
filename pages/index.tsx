import type { NextPage } from "next";
import { API } from "../config";
import SeriesCard from "../components/SeriesCard";
import PostCard from "../components/postCard";

// 此函数在构建时被调用
export async function getStaticProps() {
  // 调用外部 API 获取博文列表
  const res = await fetch(
    `${API}/article/queryAllPublish?notag=true&current=1&pageSize=5`
  );
  const posts = await res.json();

  const series = await fetch(`${API}/classic/tagCount`);
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
        {/* <span className=" text-lg  font-bold tracking-wide	text-light-text dark:text-dark-text">
          hi,欢迎来到我的博客
        </span> */}
      </div>
      <div className=" my-7 pb-2 border-gray-200 dark:border-gray-900 border-b	 ">
        <span className=" text-lg  font-bold tracking-wide	text-light-text dark:text-dark-text">
          Latest Posts
        </span>
      </div>
      <PostCard list={posts} />
      <div className=" my-7 pb-2 border-gray-200 dark:border-gray-900 border-b	 ">
        <span className=" text-lg  font-bold tracking-wide	text-light-text dark:text-dark-text">
          Series
        </span>
      </div>
      <SeriesCard list={seriesList} />
    </>
  );
};

export default Home;
