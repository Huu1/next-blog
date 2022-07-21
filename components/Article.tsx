import { useCallback } from "react";
import { IArticle } from "../types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
import Image from "next/image";
import { API } from "../config";
dayjs.locale("zh-cn");
dayjs.extend(relativeTime);

const myLoader = ({ src }: any) => {
  return `${API}/${src}`;
};
const coffeeNum = (number: number = 0) => {
  if (!number || number <= 5) return <>☕️</>;
  if (number <= 25) return <>☕️☕️</>;
  return <>☕️☕️☕️</>;
};

const Article = (props: { article: IArticle }) => {
  const {
    title,
    time,
    readTime = 1,
    articleId,
    background,
    brief,
  } = props.article;
  return (
    <div
      style={{ maxWidth: 620 }}
      className="bg-light-card_bg dark:bg-dark-card_bg my-0 m-auto mb-5 shadow-lg  rounded-lg overflow-hidden"
    >
      {background && (
        <div className=" w-full h-80 relative  ">
          <Image
            loader={myLoader}
            src={`${background}`}
            alt="图片丢了"
            layout="fill"
          />
        </div>
      )}
      <div className="p-3 select-none	">
        <Link href={"/post/" + articleId} passHref>
          <h3 className="text-2xl mb-2 font-black  cursor-pointer text-light-title dark:text-dark-title">
            {title}
          </h3>
        </Link>

        <p className="mb-7 select-none	 text-base mt-1 text-light-text dark:text-dark-text">
          {brief}
        </p>

        <small className="text-sm select-none	  text-light-text dark:text-dark-text tracking-wide">
          {dayjs(time).format("MMM D, YYYY")} {coffeeNum(readTime)} {readTime}{" "}
          mins read
        </small>
      </div>
    </div>
  );
};

export default Article;
