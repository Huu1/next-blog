import Link from "next/link";
import * as React from "react";


export default function ListLayout({
  title,
  data,
  type,
}: {
  title: string;
  data: any[];
  type: string;
}) {
  return (
    <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
      <div className="space-y-2 pt-10 pb-2 md:space-y-5">
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
          {title}
        </h1>
      </div>
      <div className="flex max-w-lg flex-wrap">
        {Object.keys(data).length === 0 && `No ${type} found.`}
        {data.map((t: any) => {
          return (
            <div key={t.id} className="mt-2 mb-2 mr-5 cursor-pointer">
              <Link href={`/${type}/${t.id}`} passHref>
                <div>
                  <a className="mr-3 text-1xl font-medium pointer uppercase dark:text-gray-300 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                    {t.title.split(" ").join("-")}
                  </a>
                  <a className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300">
                    {` (${t.count})`}
                  </a>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
