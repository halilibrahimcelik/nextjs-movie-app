import React from "react";

import styles from "./skeleton.module.scss";

type Props = {
  width?: number | string;
  height?: number | string;
};

const Skeleton = ({ width, height }: Props) => {
  return <div className={styles.skeleton} style={{ width, height }}></div>;
};

export default Skeleton;
