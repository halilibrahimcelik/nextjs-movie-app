import React from "react";
import styles from "../../containers/home/home.module.scss";
import Skeleton from "../skeleton";

type Props = {};

const CategoriesLoading = (props: Props) => {
  return (
    <div className="container">
      <div className={`${styles.categories}`}>
        {Array(5)
          .fill(null)
          .map((_, index) => {
            return <Skeleton key={index} height={40} width={130} />;
          })}
      </div>
    </div>
  );
};

export default CategoriesLoading;
