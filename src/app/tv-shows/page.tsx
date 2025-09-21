import { redirect } from "next/navigation";
import { connection } from "next/server";
import Page from "@/components/pages/tv-shows/Page";
import fetchGenres from "@/components/ssr/fetchGenres";

export default async function TvShows() {
  const genres = await fetchGenres();
  if (!genres) redirect("/");
  await connection();
  return <Page genres={genres} />;
}
