import InnerMovieContainer from "@/containers/innerPage";
import React from "react";
import { serialize } from "v8";

type Props = {
  params: {
    id: string | number | string[] | undefined;
  };
  searchParams: { [key: string]: any };
};

const InnerPage = async ({ params, searchParams }: Props) => {
  console.log(searchParams);
  if (searchParams.error === "true") {
    throw new Error("Error occured");
  }
  return <InnerMovieContainer id={params.id} searchParams={searchParams} />;
};

export default InnerPage;
