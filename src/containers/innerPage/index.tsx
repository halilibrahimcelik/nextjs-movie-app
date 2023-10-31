import FeaturedMovie from "@/components/featuredMovie";
import React from "react";
import styles from "../home/home.module.scss";
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
  searchParams: { [key: string]: string };
};

const API_URL = `https://api.themoviedb.org/3`;
const getMovie = async (
  movieId: string | number | any,
  movieType = "movie"
) => {
  const res = await fetch(
    `${API_URL}/${movieType}/${movieId}?api_key=${process.env.API_KEY}`
  );
  if (res.status >= 400) throw new Error("Error fetching data");

  const data = await res.json();
  return data;
};

const InnerMovieContainer = async ({ id, searchParams }: Props) => {
  const { mediaType } = searchParams;
  const movieDetail = await getMovie(id, mediaType);

  if (!movieDetail) {
    notFound();
  }
  return (
    <div className="container">
      <FeaturedMovie
        styles={styles}
        isLong={true}
        movies={
          movieDetail && {
            ...movieDetail,
            backdrop_path: movieDetail.backdrop_path || "",
            poster_path: movieDetail.poster_path || "",
          }
        }
      />
    </div>
  );
};

export default InnerMovieContainer;
