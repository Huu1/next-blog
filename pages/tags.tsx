import * as React from "react";
import Page from "../components/Page";
import TagCardList from "../components/TagCardList";
import { API } from "../config";

export async function getStaticProps() {
  const res = await fetch(`${API}/tag`);
  const tags = await res.json();
  return { props: { data: tags.data || [] }, revalidate: 60 };
}

export default function Tag({ data }: any) {
  return (
    <Page>
      <>
        <div className=" pb-2  mb-4  ">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 ">
            {"标签"}
          </h1>
        </div>
        <TagCardList data={data} />
      </>
    </Page>
  );
}
