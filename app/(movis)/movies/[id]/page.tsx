import { API_URL } from "../../../(home)/page";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return <h1>{movie.title}</h1>;
}
