import Link from "next/link";
import React, { useContext, useEffect, useRef } from "react";
import { ArticleHeader } from "../../components/Article";
import UserInfo from "../../components/UserInfo";
import { API } from "../../config";
import { ThemeContext } from "../../context/themeContext";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark as codeStyle } from "react-syntax-highlighter/dist/cjs/styles/prism";

// 此函数在构建时被调用
export async function getStaticPaths() {
  // 调用外部 API 获取博文列表
  const res = await fetch(
    `${API}/article/queryAllPublish?current=1&pageSize=999`
  );
  const data = await res.json();

  // 据博文列表生成所有需要预渲染的路径
  const paths = data.data.list.map((post: any) => ({
    params: { id: post.articleId },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: "blocking" };
}

// 在构建时也会被调用
export async function getStaticProps({ params }: any) {
  // params 包含此片博文的 `id` 信息。
  // 如果路由是 /posts/1，那么 params.id 就是 1
  const res = await fetch(`${API}/article/${params.id}`);
  const post = await res.json();

  // 通过 props 参数向页面传递博文的数据
  return { props: { post: post.data } };
}

enum LINK_TYPE {
  TAG = "tagId",
  LABEL = "labelId",
}

const TagLink = ({
  name,
  value,
  type,
}: {
  name: string;
  value: string;
  type: LINK_TYPE;
}) => {
  const url = `/?${type}=${value}`;
  return (
    <Link href={url}>
      <a className="text-base	font-medium text-pink-800 dark:text-pink-300 underline">
        {type !== LINK_TYPE.TAG ? "#" : ""}
        {name}
      </a>
    </Link>
  );
};

const TagList = ({ data, type }: { data: any[]; type: LINK_TYPE }) => {
  return (
    <>
      {data
        .filter((i: any) => i.status === "on")
        .map(({ labelId, title }, index: number, array) => {
          return (
            <React.Fragment key={labelId}>
              <TagLink key={labelId} value={labelId} name={title} type={type} />
              <div className="mr-2 inline-block"></div>
            </React.Fragment>
          );
        })}
    </>
  );
};

const Post = ({ post }: any) => {
  const [isDark] = useContext(ThemeContext);

  return (
    <>
      <ArticleHeader
        articleId={post?.articleId}
        title={post?.title}
        readTime={post?.readTime}
        time={post?.publishTime}
      >
        {post?.tag ? (
          <span className="text-sm text-gray-500 font-mono dark:text-gray-300 mt-1.5">
            <span>&nbsp;• &nbsp;</span>
            <TagLink
              value={post?.tag.tagId}
              name={post?.tag.title}
              type={LINK_TYPE.TAG}
            />
          </span>
        ) : (
          <></>
        )}
      </ArticleHeader>

      <div className="mt-10">
        {/* <div className={`${isDark? 'markdown-body-dark':'markdown-body'} `} ref={dom}></div> */}
        <ReactMarkdown
          className={`${isDark? 'markdown-body-dark':'markdown-body'} `}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "js");
              return !inline && match ? (
                <SyntaxHighlighter
                  style={codeStyle}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {post?.content?.content}
        </ReactMarkdown>
        ,
        {post?.label && post?.label.length > 0 && (
          <div className="text-base mt-10 dark:text-gray-400">
            标签：
            <TagList data={post?.label || []} type={LINK_TYPE.LABEL} />
          </div>
        )}
      </div>
      <div className="my-18 mt-12">
        <UserInfo />
      </div>
      <div className="my-8 mt-7 text-red-400 text-lg underline p-3 flex-wrap flex justify-between	">
        <div className="mb-3">
          {post?.previous && (
            <Link href={`/post/${post?.previous.articleId}`} passHref>
              <span className="text-pink-800 dark:text-pink-300 ">
                👈{post?.previous.title}
              </span>
            </Link>
          )}
        </div>
        {post?.next && (
          <Link href={`/post/${post?.next.articleId}`} passHref>
            <span className="text-pink-800 dark:text-pink-300 ">
              {post?.next.title}👉👉
            </span>
          </Link>
        )}
      </div>
    </>
  );
};

export default Post;
