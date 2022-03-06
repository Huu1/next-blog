import * as React from 'react';
import Article from '../components/Article';
import { IArticle } from '../types';


export default function SearchLayout({posts}: { posts:{title: string; article: IArticle[]} }) {
  
  const [result, setResult] = React.useState<IArticle[]>([...posts.article]);

  const setSearchValue = (title: string) => {
    if (title) {
      setResult(
        posts.article.filter((article) => article.title.includes(title))
      );
    } else {
      setResult([...posts.article]);
    }
  };

  return (
    <>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
          {posts.title}
        </h1>
        <div className="relative max-w-lg">
          <input
            aria-label="搜文章"
            type="text"
            onChange={(e) => setSearchValue(e.target.value.trim())}
            placeholder="搜文章"
            className="block w-full dark:bg-gray-50 dark:text-gray-700	 rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
          />
          <svg
            className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      {Array.isArray(result) && result.map((article: IArticle) => {
        return <Article key={article.articleId} article={article} />;
      })}
    </>
  );
}