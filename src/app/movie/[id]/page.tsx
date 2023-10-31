import InnerMovieContainer from "@/containers/innerPage";
import React from "react";

type Props = {
  params: {
    id: string | number | string[] | undefined;
  };
  searchParams: { [key: string]: any };
};

const InnerPage = async ({ params, searchParams }: Props) => {
  if (searchParams.error === "true") {
    throw new Error("Error occured");
  }
  return <InnerMovieContainer id={params.id} />;
};

export default InnerPage;
