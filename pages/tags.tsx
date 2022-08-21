import * as React from "react";
import TagCardList from "../components/TagCardList";
import { API } from "../config";

export async function getStaticProps() {
  const res = await fetch(`${API}/tag`);
  const tags = await res.json();
  return { props: { data: tags.data || [] }, revalidate: 10 };
}

export default function Tag({ data }: any) {
  return (
    <div>
      <div className=" pt-4  pb-2  mb-4">
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 ">
          {"Tags"}
        </h1>
      </div>
      <TagCardList data={data} />
    </div>
  );
}
