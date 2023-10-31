"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Pagination, Autoplay } from "swiper/modules";

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
  return (
    <section className="py-2">
      <div className="container ">
        <h2 className="text-white my-4">{title}</h2>

        <ul className={styles.movieSection}>
          <Swiper
            style={{ padding: "60px 0px !important" }}
            slidesPerView={1}
            modules={[Navigation, A11y, Pagination, Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              991: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            pagination={{ clickable: true }}
          >
            {movies.map((movie) => (
              <SwiperSlide className={styles.swiperSlide} key={movie.id}>
                <li className={styles.movieCard}>
                  <Link
                    href={`/movie/${movie.id}?mediaType=${
                      movie?.media_type ? movie?.media_type : "movie"
                    }`}
                  >
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
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  );
}

export default MoviesSection;
