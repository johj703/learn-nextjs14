export const metadata = {
  title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export default function Page() {
  return <div>{JSON.stringify(movies)}</div>;
}
