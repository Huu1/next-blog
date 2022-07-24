import Link from "next/link";
import * as React from "react";
import Card from "../components/Card";

export default function ListLayout({ data }: { data: any[] }) {
  return (
    <>
      <div className=" pt-4  pb-2  mb-4">
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 ">
          {"Tags"}
        </h1>
      </div>
      <div className="flex flex-wrap justify-start flex-1">
        {data?.map((t: any) => {
          return (
            <Card
              style={{ maxWidth: 'none' }}
              key={t.id}
              className="  mr-2 flex-auto "
            >
              <>
                <Link href={`/tags/${t.title}`} passHref>
                  <div>
                    <a className="mr-3 text-2xl font-semibold  cursor-pointer text-gray-600 dark:text-gray-300 ">
                      {t.title.split(" ").join("-")}
                    </a>
                  </div>
                </Link>
                <a className="text-sm  inline-block mt-3 ">
                  {`${t.count} 篇文章`}
                </a>
              </>
            </Card>
          );
        })}
      </div>
    </>
  );
}
