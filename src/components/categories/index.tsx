"use client";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
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
  const [isClient, setIsClient] = useState(false);
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
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <ul className={styles.categories}>
        {displayedCategories.map((category) => (
          <li key={category.id}>
            <Button className={styles.category}>
              <Link href={`/${category.id}`}>{category.name}</Link>
            </Button>
          </li>
        ))}
      </ul>
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
