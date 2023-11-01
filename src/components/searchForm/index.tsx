"use client";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";

import InputBase from "@mui/material/InputBase";

import { MdOutlineSavedSearch as SearchIcon } from "react-icons/md";
import { searchMovie } from "@/services/movieServices";

type Props = {};
const Search = styled("form")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "14ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchForm = (props: Props) => {
  const searchedText = React.useRef<HTMLInputElement>(null);
  const form = React.useRef<HTMLFormElement>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = searchedText.current?.value;
    console.log(process.env.API_KEY);
    if (text !== undefined && text !== null && text !== "") {
      const data = await searchMovie(text);
      console.log(data);
      // window.location.href = `/search/${text}`;
    }
    form.current?.reset();
  };

  return (
    <>
      <Search ref={form} onSubmit={handleSubmit}>
        <SearchIconWrapper>
          <span className="text-2xl">
            <SearchIcon />
          </span>
        </SearchIconWrapper>
        <StyledInputBase
          ref={searchedText}
          onChange={(e) => {
            if (searchedText.current) {
              searchedText.current.value = e.target.value;
            }
          }}
          placeholder="Search a movie…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </>
  );
};

export default SearchForm;
