import CategoriesLoading from "@/components/categories/loading";
import FeatureMovieLoading from "@/components/featuredMovie/loading";
import MovieSectionSkeleton from "@/components/movieSection/loading";
import React from "react";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div>
      <FeatureMovieLoading />
      <CategoriesLoading />
      <MovieSectionSkeleton />
      <MovieSectionSkeleton />
      <MovieSectionSkeleton />
    </div>
  );
};

export default Loading;
