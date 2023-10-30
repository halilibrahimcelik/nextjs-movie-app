import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  movies: {
    poster_path: string;
    title: string;
    overview: string;
    id: number;
    [key: string]: any;
  }[];
  styles?: any;
};

function MoviesSection({ title, movies, styles }: Props) {
  console.log(movies[0]);
  return (
    <section className="py-10">
      <div className="container ">
        <h2 className="text-white my-4">{title}</h2>
        <ul className={styles.movieSection}>
          {movies.map((movie) => (
            <li key={movie.id} className={styles.movieCard}>
              <Link href={`/movie/${movie.id}`}>
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                  fill
                  unoptimized
                />
                <div className={styles.movieInfo}>
                  <h3 className={styles.movieTitle}>{movie.title}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default MoviesSection;
