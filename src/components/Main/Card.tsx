import { CSSProperties, FC } from "react";

import styles from "./main.module.scss";

export const Card: FC = () => {
  return (
    <div className={styles.main_card}>
      <div className="content content-intro">
        <h1>Software Developer</h1>
        <p>
          Hi, I'm Roy. I like to craft solid and scalable frontend products with
          great user experiences.
        </p>
        <div className={styles.panel_container}>
          <div className={`float`}>
            <div className={styles.panel}>
              <div className={styles.panel_header}>
                <span className={styles.button}></span>
                <span className={styles.button}></span>
                <span className={styles.button}></span>
                <small className={styles.noise}></small>
              </div>
              <div className={styles.panel_content}>
                <div className={styles.panel_left}>
                  <div className={styles.audio}>
                    <div className={styles.audio_cover}></div>
                    <h2 className={styles.audio_title}>Roy Jose Buhay</h2>
                    <small className={styles.audio_artist}>
                      Software Developer
                    </small>
                    <div className={styles.audio_controls}>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 5.625C9.62132 5.625 10.125 5.12132 10.125 4.5C10.125 3.87868 9.62132 3.375 9 3.375C8.37868 3.375 7.875 3.87868 7.875 4.5C7.875 5.12132 8.37868 5.625 9 5.625Z"
                          fill="white"
                        ></path>
                        <path
                          d="M9 10.125C9.62132 10.125 10.125 9.62132 10.125 9C10.125 8.37868 9.62132 7.875 9 7.875C8.37868 7.875 7.875 8.37868 7.875 9C7.875 9.62132 8.37868 10.125 9 10.125Z"
                          fill="white"
                        ></path>
                        <path
                          d="M9 14.625C9.62132 14.625 10.125 14.1213 10.125 13.5C10.125 12.8787 9.62132 12.375 9 12.375C8.37868 12.375 7.875 12.8787 7.875 13.5C7.875 14.1213 8.37868 14.625 9 14.625Z"
                          fill="white"
                        ></path>
                      </svg>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 12.4481C15 12.8368 14.576 13.0768 14.2428 12.8769L8.49583 9.4287C8.17216 9.2345 8.17216 8.76541 8.49583 8.5712L14.2428 5.12305C14.576 4.92309 15 5.16315 15 5.5518V12.4481ZM7.78125 12.4481C7.78125 12.8368 7.35726 13.0768 7.024 12.8769L1.27708 9.4287C0.953408 9.2345 0.953408 8.76541 1.27708 8.5712L7.024 5.12305C7.35726 4.92309 7.78125 5.16315 7.78125 5.5518V12.4481Z"
                          fill="white"
                        ></path>
                      </svg>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5 14.25V3.75H13.5V14.25H10.5ZM4.5 14.25V3.75H7.5V14.25H4.5Z"
                          fill="white"
                        ></path>
                      </svg>
                      <div className={styles.audio_bar}></div>
                    </div>
                    <div className={styles.audio_equalizer}></div>
                  </div>
                  <small className={styles.noise}></small>
                </div>
                <div className={styles.panel_right}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <small className={styles.noise}></small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
