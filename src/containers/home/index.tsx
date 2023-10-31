import FeaturedMovie from "@/components/featuredMovie";
import React from "react";
import styles from "./home.module.scss";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movieSection";
type Props = {
  topRated: [];
  popularMovies: [];
  genres: [];
  selectedCategory: { movies: []; title: string };
};

const HomeContainer = ({
  topRated,
  popularMovies,
  genres,
  selectedCategory,
}: Props) => {
  if (
    topRated.length === 0 ||
    popularMovies.length === 0 ||
    genres.length === 0
  )
    return null;
  return (
    <section className="container">
      <FeaturedMovie
        styles={styles}
        movies={
          selectedCategory.movies?.length > 0
            ? selectedCategory.movies?.[0]
            : topRated?.[0]
        }
      />
      <Categories styles={styles} categories={genres} />
      {selectedCategory.movies?.length > 0 && (
        <MoviesSection
          title={selectedCategory.title}
          styles={styles}
          movies={selectedCategory.movies?.slice(0, 6)}
        />
      )}
      <MoviesSection
        styles={styles}
        title="Top Rated"
        movies={topRated?.slice(0, 6)}
      />
      <MoviesSection
        styles={styles}
        title="Popular Movies"
        movies={popularMovies.slice(0, 6)}
      />
    </section>
  );
};
export default HomeContainer;
