import * as React from "react";
import Page from "../components/Page";
import SeriesCardList from "../components/SeriesCardList";
import { API } from "../config";

export async function getStaticProps() {
  const res = await fetch(`${API}/series`);
  const series = await res.json();
  return { props: { seriesList: series?.data || [] }, revalidate: 60 };
}

export default function label({ seriesList }: any) {
  return (
    <Page className=" pt-8">
      <SeriesCardList list={seriesList} />
    </Page>
  );
}
