import { FC } from "react";

import { Illustration } from "./Illustration";
import { Texts } from "./Texts";

import styles from "./content.module.scss";

export const AboutModal: FC = () => {
  return (
    <div className={styles.about__container}>
      <Illustration />
      <Texts />
    </div>
  );
};
