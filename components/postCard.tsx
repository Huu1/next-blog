import Link from "next/link";
import React from "react";
import { IArticle, Series } from "../types";
import Card from "./Card";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
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
              <Link
                href={
                  article.series?.name
                    ? `/series/${article.series.name}/${article.articleId}`
                    : `/post/${article.articleId}`
                }
                passHref
              >
                <div>
                  <h3 className="text-xl mb-3 ml-1 mt-0 font-black  cursor-pointer text-light-title dark:text-dark-title">
                    {article.title}
                  </h3>
                  <p className="mb-7 select-none ml-1	 text-base mt-1 text-light-text dark:text-dark-text">
                    {article.brief}
                  </p>
                </div>
              </Link>
              <div className="  mt-auto flex justify-between items-center">
                <small className=" text-xs select-none tracking-widest	  text-light-text dark:text-dark-text 	">
                  📅 发布于{dayjs(article.time).format("YYYY·MM·DD")}
                </small>
                <span>
                  {article?.tag.map(({ id, title }: any) => {
                    return (
                      <Tag className="mr-3" key={id} url={`/tags/${title}`}>
                        {title}
                      </Tag>
                    );
                  })}
                </span>
              </div>
            </>
          </Card>
        );
      })}
    </>
  );
};

export default PostCard;
