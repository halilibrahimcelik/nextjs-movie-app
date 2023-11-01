import FeaturedMovie from "@/components/featuredMovie";
import React from "react";
import styles from "./home.module.scss";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movieSection";
type Props = {
  topRated: [];
  popularMovies: [];
  genres: [];
  upComing: [];
  selectedCategory: { movies: []; title: string };
  tvSeries: [];
  searchParams: { [key: string]: string | string[] | undefined };
};

const HomeContainer = ({
  topRated,
  popularMovies,
  genres,
  selectedCategory,
  tvSeries,
  searchParams,
  upComing,
}: Props) => {
  if (
    topRated.length === 0 ||
    popularMovies.length === 0 ||
    genres.length === 0
  )
    return null;

  return (
    <section className="container">
      {searchParams.series === "true" ? (
        <>
          {" "}
          <FeaturedMovie
            styles={styles}
            movies={
              tvSeries?.length > 0 ? (tvSeries as any)[0] : (topRated as any)[9]
            }
          />
        </>
      ) : searchParams.upcoming === "true" ? (
        <>
          {" "}
          <FeaturedMovie
            styles={styles}
            movies={
              upComing?.length > 0 ? (upComing as any)[0] : (topRated as any)[9]
            }
          />
        </>
      ) : (
        <FeaturedMovie
          styles={styles}
          movies={
            selectedCategory.movies?.length > 0
              ? (selectedCategory.movies as any)?.[0]
              : (topRated as any)[9]
          }
        />
      )}

      <Categories styles={styles} categories={genres} />
      {selectedCategory.movies?.length > 0 && searchParams.series !== "true" ? (
        <MoviesSection
          title={selectedCategory.title}
          styles={styles}
          movies={selectedCategory.movies}
        />
      ) : searchParams.upcoming === "true" ? (
        <MoviesSection
          title={"Upcoming Movies"}
          styles={styles}
          movies={upComing}
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
