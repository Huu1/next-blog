import Link from "next/link";
import React from "react";
import { IArticle, Series } from "../types";
import Card from "./Card";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { coffeeNum } from "../utils";
dayjs.locale("zh-cn");
dayjs.extend(relativeTime);

const PostCard = (props: { list: IArticle[] }) => {
  return (
    <>
      {props.list?.map((article: IArticle) => {
        return (
          <Card key={article.articleId} background={article.background}>
            <>
              <Link
                href={
                  `${article.series?.name ? article.series.name : "/post"}/${article.articleId}`
                }
                passHref
              >
                <h3 className="text-2xl mb-2 font-black  cursor-pointer text-light-title dark:text-dark-title">
                  {article.title}
                </h3>
              </Link>
              <p className="mb-7 select-none	 text-base mt-1 text-light-text dark:text-dark-text">
                {article.brief}
              </p>
              <small className="text-sm select-none	  text-light-text dark:text-dark-text tracking-wide">
                {dayjs(article.time).format("MMM D, YYYY")}{" "}
                {coffeeNum(article.readTime)} {article.readTime} mins read
              </small>
            </>
          </Card>
        );
      })}
    </>
  );
};

export default PostCard;
