import FeaturedMovie from "@/components/featuredMovie";
import React from "react";
import Movies from "@/mock/movies.json";
import Genres from "@/mock/genres.json";
import styles from "./home.module.scss";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movieSection";
type Props = {};

const HomeContainer = (props: Props) => {
  return (
    <section className="container">
      <FeaturedMovie
        styles={styles}
        movies={
          Movies.results[0] && {
            ...Movies.results[0],
            backdrop_path: Movies.results[0].backdrop_path || "",
            poster_path: Movies.results[0].poster_path || "",
          }
        }
      />
      <Categories styles={styles} categories={Genres.genres} />
      <MoviesSection
        styles={styles}
        title="Popular Films"
        movies={Movies.results.slice(0, 6)}
      />
      <MoviesSection
        styles={styles}
        title="Your Favorites"
        movies={Movies.results.slice(6, 13)}
      />
    </section>
  );
};
export default HomeContainer;
