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
  tvSeries: [];
  searchParams: { [key: string]: string };
};

const HomeContainer = ({
  topRated,
  popularMovies,
  genres,
  selectedCategory,
  tvSeries,
  searchParams,
}: Props) => {
  if (
    topRated.length === 0 ||
    popularMovies.length === 0 ||
    genres.length === 0
  )
    return null;
  console.log(searchParams.series);

  return (
    <section className="container">
      {searchParams.series === "true" ? (
        <>
          {" "}
          <FeaturedMovie
            styles={styles}
            movies={tvSeries?.length > 0 ? tvSeries?.[0] : topRated?.[0]}
          />
        </>
      ) : (
        <FeaturedMovie
          styles={styles}
          movies={
            selectedCategory.movies?.length > 0
              ? selectedCategory.movies?.[0]
              : topRated?.[0]
          }
        />
      )}

      <Categories styles={styles} categories={genres} />
      {selectedCategory.movies?.length > 0 && searchParams.series === "true" ? (
        <MoviesSection
          title={selectedCategory.title}
          styles={styles}
          movies={selectedCategory.movies}
        />
      ) : (
        <MoviesSection title={"TV Series"} styles={styles} movies={tvSeries} />
      )}
      <MoviesSection styles={styles} title="Top Rated" movies={topRated} />
      <MoviesSection
        styles={styles}
        title="Popular Movies"
        movies={popularMovies}
      />
    </section>
  );
};
export default HomeContainer;
