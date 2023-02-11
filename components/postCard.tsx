import Link from "next/link";
import React from "react";
import { IArticle, Series } from "../types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Tag from "./Tag";
require("dayjs/locale/zh-cn");
dayjs.locale("zh-cn");
dayjs.extend(relativeTime);

const PostCard = (props: { list: IArticle[] }) => {
  return (
    <>
      {props.list?.map((article: IArticle, index) => {
        return (
          <div
            key={article.articleId}
            className=" transition-all duration-500 article-card "
          >
            <div className="max-w-3xl m-auto py-8 px-3 sm:px-0">
              <Link href={`/post/${article.articleId}`} passHref>
                <h3 className="text-2xl cursor-pointer  mt-0 font-black   dark:text-dark-title">
                  {article.title}
                </h3>
              </Link>
              <div className=" mt-2 mb-6 text-sm  tracking-tight	  text-light-text dark:text-dark-text 	">
                {dayjs(article.time).format("YYYY 年 MM 月 DD 日")}
                &nbsp; {` ( ${dayjs(article.publishTime).fromNow()} )`}
              </div>
              <Link href={`/post/${article.articleId}`} passHref>
                <span
                  className="cursor-pointer text-light-readmore p-2  rounded-lg hover:bg-light-readmoreBg dark:text-dark-title"
                  style={{ marginLeft: "-.5rem" }}
                >
                  阅读更多 →
                </span>
              </Link>
              {/* <span>
                {article?.tag.map(({ id, title }: any) => {
                  return (
                    <Tag className="mr-3" key={id} url={`/tags/${title}`}>
                      {title}
                    </Tag>
                  );
                })}
              </span> */}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PostCard;
