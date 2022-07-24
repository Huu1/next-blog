import * as React from "react";
import SeriesCard from "../components/SeriesCard";
import { API } from "../config";

export async function getStaticProps() {
  const res = await fetch(`${API}/classic/tagCount`);
  const series = await res.json();
  return { props: { seriesList: series?.data || [] }, revalidate: 10 };
}

export default function label({ seriesList }: any) {
  return (
    <div className="pt-8">
      <SeriesCard list={seriesList} />
    </div>
  );
}
