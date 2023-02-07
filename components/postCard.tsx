import Link from "next/link";
import React from "react";
import { IArticle, Series } from "../types";
import Card from "./Card";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { coffeeNum } from "../utils";
import TagCardList from "./TagCardList";
import Tag from "./Tag";
dayjs.locale("zh-cn");
dayjs.extend(relativeTime);

const PostCard = (props: { list: IArticle[] }) => {
  return (
    <>
      {props.list?.map((article: IArticle, index) => {
        return (
          <Card
            key={article.articleId}
            background={article.media?.url}
            index={index}
          >
            <>
              <small className="text-sm select-none	  text-light-text dark:text-dark-text tracking-wide 	">
                🕒 发布于{dayjs(article.time).format("YYYY-MM-DD HH:mm:ss")}{" "}
              </small>
              <Link
                href={
                  article.series?.name
                    ? `/series/${article.series.name}/${article.articleId}`
                    : `/post/${article.articleId}`
                }
                passHref
              >
                <h3 className="text-xl mb-3 ml-1 mt-4 font-black  cursor-pointer text-light-title dark:text-dark-title">
                  {article.title}
                </h3>
              </Link>
              <p className="mb-7 select-none ml-1	 text-base mt-1 text-light-text dark:text-dark-text">
                {article.brief}
              </p>
              <div
                className="  mt-auto"
                style={{
                  textAlign: index % 2 === 0 ? "left" : "right",
                }}
              >
                {article?.tag.map(({ id, title }: any) => {
                  return (
                    <Tag className="mr-3 mb-2" key={id} url={`/tags/${title}`}>
                      {title}
                    </Tag>
                  );
                })}
              </div>
            </>
          </Card>
        );
      })}
    </>
  );
};

export default PostCard;
