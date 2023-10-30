"use client";
import Link from "next/link";
import React from "react";

type Props = {};

function Error({}: Props) {
  return (
    <section className="min-h-screen container flex   items-center flex-col">
      <h2 className="text-white mt-20">
        {" "}
        We are unable to find what you looking for
      </h2>
      <Link
        className="text-white block underline underline-offset-3"
        href={"/"}
      >
        Go back to home page
      </Link>
    </section>
  );
}

export default Error;
