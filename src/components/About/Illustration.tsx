import { FC } from "react";

import man from "/images/man2.svg";
import truck from "/images/truck_2.svg";
import node from "/images/node-deer.svg";
import aws from "/images/aws-deer.svg";
import swift from "/images/swift-deer2.svg";

import styles from "./content.module.scss";

export const Illustration: FC = () => {
  return (
    <div className={styles.about__content}>
      <div className={styles.about__illustration}>
        <div className={styles.man}>
          <img src={man} alt="Man" draggable="false" />
        </div>
        <div className={styles.truck}>
          <img src={truck} alt="Truck" draggable="false" />
        </div>
        <div className={styles.tech}>
          {new Array(9).fill(null).map((_) => (
            <div>
              <span role="none" />
            </div>
          ))}
        </div>
        <div className={styles.deers}>
          <span role="none">
            <img src={node} alt="NodeJS" draggable="false" />
          </span>
          <span role="none">
            <img src={aws} alt="AWS" draggable="false" />
          </span>
          <span role="none">
            <img src={swift} alt="Swift" draggable="false" />
          </span>
        </div>
        <div className={styles.about__panel}>
          <div className={styles.noise} role="none" />
          {new Array(16).fill(null).map((_) => (
            <div className={styles.tree}>
              <span role="none" />
              <span role="none" />
              <span role="none" />
              <span role="none" />
              <span role="none" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
