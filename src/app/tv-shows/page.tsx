import { connection } from "next/server";
import Page from "@/components/pages/tv-shows/Page";
import fetchGenres from "@/components/ssr/fetchGenres";

export default async function TvShows() {
  const genres = await fetchGenres();
  await connection();
  return <Page genres={genres} />;
}
