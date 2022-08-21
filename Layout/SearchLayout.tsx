import * as React from "react";
import PostCard from "../components/postCard";
import { IArticle } from "../types";

export default function SearchLayout({
  posts,
}: {
  posts: { title: string; article: IArticle[] };
}) {
  return (
    <>
      <div className="space-y-2 pt-4 pb-6 md:space-y-5">
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 ">
          {posts.title}
        </h1>
      </div>
      {<PostCard list={posts.article} />}
    </>
  );
}
