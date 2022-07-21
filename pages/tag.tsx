import * as React from "react";
import ListLayout from "../Layout/ListLayout";
import { API } from "../config";

export async function getStaticProps() {
  const res = await fetch(`${API}/classic/labelCount`);
  const tags = await res.json();

  return { props: { data: tags.data || [] } ,revalidate: 10};
}

export default function Tag({ data }: any) {
  const prop = {
    title: "标签",
    data,
    type: "tag",
  };
  return <ListLayout {...prop} />;
}
