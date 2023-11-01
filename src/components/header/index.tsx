import React from "react";
import styles from "./header.module.scss";
import { BiSolidMoviePlay } from "react-icons/bi";
import Link from "next/link";
import SearchForm from "../searchForm";
type Props = {};

function Header({}: Props) {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/" className="flex items-center">
          <span className={styles.icon}>
            <BiSolidMoviePlay />
          </span>

          <h1>Movie App</h1>
        </Link>

        <ul className="flex justify-center items-center gap-2">
          <li>
            <SearchForm />
          </li>
          <li>
            <Link href="/?series=true">Series</Link>
          </li>
          <li>
            <Link href="/?upcoming=true">Upcoming </Link>
          </li>
          <li>
            <Link href="/10751">Kids</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
