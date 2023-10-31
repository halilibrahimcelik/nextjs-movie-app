import React from "react";
import styles from "../../containers/home/home.module.scss";
import Skeleton from "../skeleton";

type Props = {};

const MovieSectionSkeleton = (props: Props) => {
  return (
    <div className="container">
      <div className="my-4">
        <Skeleton height={40} width={150} />
      </div>
      <ul className={styles.movieSection}>
        {Array(6)
          .fill(null)
          .map((_, index) => {
            return (
              <li key={index} className={styles.movieWrapper}>
                <Skeleton height={300} width={200} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieSectionSkeleton;
