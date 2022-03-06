import Link from "next/link";
import * as React from "react";
import { API } from "../config";
import ListLayout from "../Layout/ListLayout";

export async function getStaticProps() {
  const res = await fetch(`${API}/classic/tagCount`);
  const tags = await res.json();

  return { props: { data: tags?.data || [] } };
}

export default function label({ data }: any) {
  const prop = {
    title: "分类",
    data,
    type: "label",
  };
  return <ListLayout {...prop} />;
}
