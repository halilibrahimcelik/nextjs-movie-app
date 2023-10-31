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
const getSingleCategory = async (id: number | string) => {
  const res = await fetch(
    `${API_URL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=${id}`
  );
  if (res.status >= 400) throw new Error("Error fetching data");

  const { results } = await res.json();
  return results;
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

type Props = {
  params: {
    category: string;
  };
  [key: string]: any;
};
export default async function Home({ params }: Props) {
  let selectedCategory: { title: string; movies: [] } = {
    title: "",
    movies: [],
  };
  const [topRatedMovies, popularMovies, categories] = await Promise.all([
    getTopRatedMovies(),
    getPopularMovies(),
    getCategories(),
  ]);

  if (params.category?.length > 0) {
    const selectedCategoryArray = await getSingleCategory(params.category);
    const title = categories.find(
      (category: any) => category.id === Number(params.category)
    );
    console.log(title.name);
    selectedCategory = {
      title: title.name,
      movies: selectedCategoryArray,
    };
  }
  return (
    <HomeContainer
      genres={categories}
      topRated={topRatedMovies}
      popularMovies={popularMovies}
      selectedCategory={selectedCategory}
    />
  );
}