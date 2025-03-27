import { FC } from "react";
import { PAGE_TYPE, useModal } from "../../context/ModalContext";

import css from "/images/tech/css.svg";
import aws from "/images/tech/aws.svg";
import expo from "/images/tech/expo.svg";
import html from "/images/tech/html.svg";
import js from "/images/tech/js.svg";
import next from "/images/tech/next.svg";
import react_native from "/images/tech/react_native.svg";
import react from "/images/tech/react.svg";
import tailwind from "/images/tech/tailwind.svg";
import ts from "/images/tech/ts.svg";
import graphql from "/images/tech/graphql.svg";
import node from "/images/tech/node.svg";
import express from "/images/tech/express.svg";

import appStyle from "../../app.module.scss";
import styles from "./about.module.scss";

export const Card: FC = () => {
  const { openModal } = useModal();
  const stacks = [
    css,
    html,
    js,
    ts,
    react,
    next,
    react_native,
    tailwind,
    graphql,
    aws,
    node,
    express
  ]
  return (
    <button
      className={`${appStyle.card} ${appStyle.card_about}`}
      onClick={() => openModal(PAGE_TYPE.ABOUT)}
    >
      <div className={appStyle.card__content}>
        <h2>About</h2>
        <p>A bit of background and what I'm studying</p>
        {/* <div className={styles.illustration}>
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
        </div> */}
        <div className={styles.stacks}>
          {stacks.map(stack => (
            <span className={styles.stacks__img}>
              <img src={stack} alt="CSS" />
            </span>
          ))}
        </div>
      </div>
    </button>
  );
};
