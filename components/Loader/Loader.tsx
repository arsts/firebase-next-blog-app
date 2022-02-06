import React, { FC } from "react";
import styles from "./Loader.module.css";

interface IProps {
  show: boolean;
}

const Loader: FC<IProps> = ({ show }) => {
  return show ? <div className={styles.loader} /> : null;
};

export default Loader;
