import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
  const response = await fetch(API_URL);
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return <h1>Movie {id}</h1>;
}
