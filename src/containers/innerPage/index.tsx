import FeaturedMovie from "@/components/featuredMovie";
import React from "react";
import styles from "../home/home.module.scss";
import Movies from "@/mock/movies.json";
import { notFound } from "next/navigation";
type Movie = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type Props = {
  id: string | number | string[] | undefined;
};

const InnerMovieContainer = ({ id }: Props) => {
  const movie: Movie | undefined = Movies.results.find(
    (movie) => movie.id === Number(id)
  );

  if (!movie) {
    notFound();
  }
  return (
    <div className="container">
      <FeaturedMovie
        styles={styles}
        isLong={true}
        movies={
          movie && {
            ...movie,
            backdrop_path: movie.backdrop_path || "",
            poster_path: movie.poster_path || "",
          }
        }
      />
    </div>
  );
};

export default InnerMovieContainer;
