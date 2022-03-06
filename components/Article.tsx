import { useCallback } from "react";
import { IArticle } from "../types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
dayjs.locale("zh-cn");
dayjs.extend(relativeTime);

export const ArticleHeader = (props: {
  articleId: string;
  title?: string;
  time?: number | string;
  readTime?: number;
  style?: any;
  children?: React.ReactNode;
}) => {
  const { title, time, readTime = 1, articleId } = props;
  
  const coffeeNum = useCallback((number: number = 0) => {
    if (!number || number <= 5) return <>☕️</>;
    if (number <= 25) return <>☕️☕️</>;
    return <>☕️☕️☕️</>;
  }, []);
  return (
    <header>
      <Link href={"/post/" + articleId}  passHref>
        <h3
          className="text-2xl mb-2	mt-10 font-black text-pink-800 dark:text-pink-300 cursor-pointer"
          style={{ ...props.style }}
        >
          {title}
        </h3>
      </Link>
      <small className="text-sm text-gray-500 font-mono dark:text-gray-300">
        {dayjs(time).format("MMM D, YYYY")} • {coffeeNum(readTime)} {readTime}{" "}
        min read
      </small>
      {props.children}
    </header>
  );
};

const Article = (props: { article: IArticle }) => {
  const { article } = props;
  const headerProps = {
    title: article.title,
    time: article.publishTime,
    readTime: article.readTime,
    articleId: article.articleId,
  };
  return (
    <div className="article">
      <ArticleHeader {...headerProps} />
      <p className="mb-7 text-base mt-1 dark:text-gray-400">{article.brief}</p>
    </div>
  );
};

export default Article;
