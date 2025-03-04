import { FC } from "react";
import { PAGE_TYPE, useModal } from "../../context/ModalContext";

import avatar1 from "../../assets/images/avatar-1.svg";
import avatar2 from "../../assets/images/avatar-2.svg";
import avatar3 from "../../assets/images/avatar-3.svg";

import appStyle from "../../app.module.scss";
import styles from "./content.module.scss";

export const Card: FC = () => {
  const { openModal } = useModal();

  return (
    <button
      className={`${appStyle.card} ${appStyle.card_projects}`}
      onClick={() => openModal(PAGE_TYPE.PROJECTS)}
    >
      <div className={appStyle.card__content}>
        <h2>Featured Works</h2>
        <p>Here are a few projects I've worked on</p>
        <span className={styles.phone}>
          <span className={styles.phone_camera} />
          <span className={styles.phone_speaker} />
          <span className={styles.phone_img}>
            <span className={styles.phone_search} />
            <span className={styles.phone_message}>
              <img src={avatar1} alt="Avatar 1" />
              <span>
                <p>新木優子</p>
                <small> 美味しい染みる…</small>
              </span>
            </span>
            <span className={styles.phone_message}>
              <img src={avatar2} alt="Avatar 2" />
              <span>
                <p>Yui Aragaki</p>
                <small> Are you free tonight?</small>
              </span>
            </span>
            <span className={styles.phone_message}>
              <img src={avatar3} alt="Avatar 3" />
              <span>
                <p>石田百合子</p>
                <small> 🤔やろうと意識してやってるこ...</small>
              </span>
            </span>
          </span>
        </span>
      </div>
    </button>
  );
};
