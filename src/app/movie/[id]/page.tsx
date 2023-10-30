import InnerMovieContainer from "@/containers/innerPage";
import React from "react";

type Props = {
  params: {
    id: string | number | string[] | undefined;
  };
  searchParams: { [key: string]: any };
};

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const InnerPage = async ({ params, searchParams }: Props) => {
  await delay(1000);
  if (searchParams.error === "true") {
    throw new Error("Error occured");
  }
  return <InnerMovieContainer id={params.id} />;
};

export default InnerPage;
