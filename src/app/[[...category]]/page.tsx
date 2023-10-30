import HomeContainer from "@/containers/home";

const API_URL = `https://api.themoviedb.org/3`;
const getCategories = async () => {
  const res = await fetch(
    `${API_URL}/genre/movie/list?api_key=${process.env.API_KEY}&page=1`
  );
  if (res.status >= 400) throw new Error("Error fetching data");

  const { genres } = await res.json();
  return genres;
};
const getPopularMovies = async () => {
  const res = await fetch(
    `${API_URL}/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  if (res.status >= 400) throw new Error("Error fetching data");

  const { results } = await res.json();
  return results;
};
const getTopRatedMovies = async () => {
  const res = await fetch(
    `${API_URL}/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  if (res.status >= 400) throw new Error("Error fetching data");

  const { results } = await res.json();
  return results;
};
export default async function Home() {
  const [topRatedMovies, popularMovies, categories] = await Promise.all([
    getTopRatedMovies(),
    getPopularMovies(),
    getCategories(),
  ]);
  console.log(categories);
  return (
    <HomeContainer
      genres={categories}
      topRated={topRatedMovies}
      popularMovies={popularMovies}
    />
  );
}
