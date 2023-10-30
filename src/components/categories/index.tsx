"use client";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider, styled, Box } from "@mui/material";
import { start } from "repl";
type Props = {
  categories: { id: number; name: string }[];
  styles: any;
};

function Categories({ styles, categories }: Props) {
  const [displayedMovies, setDisplayedMovies] = useState(1);
  const itemsPerPage = 5;
  const startIndex = (displayedMovies - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCategories = categories.slice(startIndex, endIndex);
  const theme = useMemo(
    () =>
      createTheme({
        components: {
          MuiPaginationItem: {
            styleOverrides: {
              root: {
                color: "#fff",
              },
              page: {
                color: "#fff",
              },
            },
          },
        },
        palette: {
          primary: {
            main: "#fff",
          },
          background: {
            default: "#000",
          },
        },
      }),
    []
  );
  if (categories.length === 0) return <div>loading...</div>;
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.categories}>
        {displayedCategories.map((category) => (
          <Link key={category.id} href={`/${category.id}`}>
            <Button className={styles.category}>{category.name}</Button>
          </Link>
        ))}
      </div>
      <Pagination
        onChange={(e, value) => setDisplayedMovies(value)}
        className={styles.pagination}
        count={Math.floor(categories.length / 4)}
        variant="outlined"
        color="primary"
        siblingCount={0}
      />
    </ThemeProvider>
  );
}

export default Categories;
