import React from "react";
import Image from "next/image";
import Link from "next/link";
type Props = {
  movies:
    | {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
      }
    | undefined;
  styles: any;
  isLong?: boolean;
};

const FeaturedMovie = ({ movies, styles, isLong = false }: Props) => {
  if (!movies) return <div>404 No Movie was found</div>;
  return (
    <div className={"py-20" + ` ${isLong ? "min-h-screen" : ""}`}>
      <div className={` ${styles.movieWrapper}`}>
        <h1 className={styles.header}>{movies.title} </h1>
        <p
          className={`${styles.text} ${styles.overview}  ${
            !isLong ? styles.shortOverview : ""
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
    </div>
  );
};

export default FeaturedMovie;
