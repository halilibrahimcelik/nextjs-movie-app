"use client";
import React from "react";
import { MoonLoader } from "react-spinners";

type Props = {};

const Loading = (props: Props) => {
  return (
    <section className="min-h-[70vh] flex justify-center items-center">
      <MoonLoader size={60} color="#bbbbbb" />
    </section>
  );
};

export default Loading;
