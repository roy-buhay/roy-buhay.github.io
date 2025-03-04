import { FC } from "react";
import { PAGE_TYPE, useModal } from "../../context/ModalContext";

import man from "../../assets/images/man.svg";
import node from "../../assets/images/node-deer.svg";
import aws from "../../assets/images/aws-deer.svg";
import swift from "../../assets/images/swift-deer.svg";

import appStyle from "../../app.module.scss";
import styles from "./about.module.scss";

export const Card: FC = () => {
  const { openModal } = useModal();

  return (
    <button
      className={`${appStyle.card} ${appStyle.card_about}`}
      onClick={() => openModal(PAGE_TYPE.ABOUT)}
    >
      <div className={appStyle.card__content}>
        <h2>About Me</h2>
        <p>A bit of background and what I'm studying</p>
        <div className={styles.illustration}>
          <div className={styles.man}>
            <img src={man} alt="Man" />
          </div>
          <div className={styles.tech}>
            {new Array(9).fill(null).map((_, index) => (
              <div key={index}>
                <span role="none" />
              </div>
            ))}
          </div>
          <div className={styles.deers}>
            <span role="none">
              <img src={node} alt="NodeJS" />
            </span>
            <span role="none">
              <img src={aws} alt="AWS" />
            </span>
            <span role="none">
              <img src={swift} alt="Swift" />
            </span>
          </div>
          <div className={styles.panel}>
            <div className={styles.noise} role="none"></div>
            {new Array(16).fill(null).map((_, index) => (
              <div key={index} className={styles.tree}>
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
    </button>
  );
};
