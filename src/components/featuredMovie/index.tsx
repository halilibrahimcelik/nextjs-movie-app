import React from "react";
import Image from "next/image";
import Link from "next/link";
type Props = {
  movies: {
    poster_path: string;
    title: string;
    overview: string;
    id: number;
    [key: string]: any;
  };
  styles: any;
  isLong?: boolean;
};

const FeaturedMovie = ({ movies, styles, isLong = true }: Props) => {
  return (
    <>
      <div className={` ${styles.movieWrapper}`}>
        <h1 className={styles.header}>{movies.title} </h1>
        <p
          className={`${styles.text} ${styles.overview}  ${
            isLong ? styles.shortOverview : ""
          }`}
        >
          {movies.overview}
        </p>
        <Link
          className={styles.btnCta}
          target="_blank"
          href={`/movie/${movies.id}`}
        >
          Play
        </Link>
      </div>

      <div className={styles.moviePoster}>
        <div className={styles.overlayPoster}></div>
        <Image
          unoptimized
          src={`https://image.tmdb.org/t/p/original${movies.poster_path}`}
          alt={movies.title}
          fill
        />
      </div>
    </>
  );
};

export default FeaturedMovie;
