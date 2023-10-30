import FeaturedMovie from "@/components/featuredMovie";
import React from "react";
import Movies from "@/mock/movies.json";
import Genres from "@/mock/genres.json";
import styles from "./home.module.scss";
import Categories from "@/components/categories";
type Props = {};

const HomeContainer = (props: Props) => {
  return (
    <section className="container">
      <FeaturedMovie styles={styles} movies={Movies.results[0]} />
      <Categories styles={styles} categories={Genres.genres} />
    </section>
  );
};
export default HomeContainer;
