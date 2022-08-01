import Link from "next/link";
import React from "react";
import { Series } from "../types";
import Card from "./Card";

const SeriesCard = (props: { list: Series[] }) => {
  return (
    <>
      {props.list?.map((series: Series,index) => {
        return (
          <Card key={index} background={series.series_background}>
            <>
              <Link href={"/series/" + series.series_name} passHref>
                <h3 className="text-2xl mb-2 font-black  cursor-pointer text-light-title dark:text-dark-title">
                  {series.series_title}
                </h3>
              </Link>
              <p className="mb-7 select-none	 text-base mt-1 text-light-text dark:text-dark-text">
                {series.series_description}
              </p>
              <small className="text-sm select-none	  text-light-text dark:text-dark-text tracking-wide">
                共{` ${series.count} `}篇文章
              </small>
            </>
          </Card>
        );
      })}
    </>
  );
};

export default SeriesCard;
