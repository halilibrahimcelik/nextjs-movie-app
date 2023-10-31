import React from "react";
import styles from "../../containers/home/home.module.scss";
import Loading from "../loading/Loading";

type Props = {};

const FeatureMovieLoading = (props: Props) => {
  return (
    <div className={styles.movieWrapper}>
      <Loading />
    </div>
  );
};

export default FeatureMovieLoading;
