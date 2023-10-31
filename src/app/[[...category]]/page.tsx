import HomeContainer from "@/containers/home";
import {
  getCategories,
  getPopularMovies,
  getSingleCategory,
  getTopRatedMovies,
} from "@/services/movieServices";
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
    />
  );
}
