import HomeContainer from "@/containers/home";
import {
  getCategories,
  getPopularMovies,
  getSingleCategory,
  getTopRatedMovies,
  getTVSeries,
  getUpcomingMovies,
} from "@/services/movieServices";

type Props = {
  params: {
    category: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};
export default async function Home({ params, searchParams }: Props) {
  let selectedCategory: { title: string; movies: [] } = {
    title: "",
    movies: [],
  };
  const [topRatedMovies, popularMovies, categories, tvSeries, upcoming] =
    await Promise.all([
      getTopRatedMovies(),
      getPopularMovies(),
      getCategories(),
      getTVSeries(),
      getUpcomingMovies(),
    ]);

  if (params.category?.length > 0) {
    const selectedCategoryArray = await getSingleCategory(params.category);
    const title = categories.find(
      (category: any) => category.id === Number(params.category)
    );
    selectedCategory = {
      title: title?.name,
      movies: selectedCategoryArray,
    };
  }
  return (
    <HomeContainer
      genres={categories}
      topRated={topRatedMovies}
      popularMovies={popularMovies}
      selectedCategory={selectedCategory}
      upComing={upcoming}
      tvSeries={tvSeries}
      searchParams={searchParams}
    />
  );
}
