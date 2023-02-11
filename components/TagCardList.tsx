import Link from "next/link";
import * as React from "react";
import Card from "./Card";

export default function TagCardList({ data }: { data: any[] }) {
  return (
    <div className="">
      <div className="flex flex-wrap justify-start flex-1">
        {data?.map((t: any) => {
          return (
            <Card
              style={{ maxWidth: 'none' }}
              key={t.tag_id}
              className="  mr-2 flex-auto "
            >
              <>
                <Link href={`/tags/${t.tag_name}`} passHref>
                  <div>
                    <a className="mr-3 text-2xl font-semibold  cursor-pointer text-gray-600 dark:text-gray-300 ">
                      {t.tag_title}
                    </a>
                  </div>
                </Link>
                <a className="text-sm  inline-block mt-3  dark:text-gray-400">
                  {`${t.count} 篇文章`}
                </a>
              </>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
