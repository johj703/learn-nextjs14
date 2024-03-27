import { API_URL } from "../../../(home)/page";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  return <h1>{movie.title}</h1>;
}
