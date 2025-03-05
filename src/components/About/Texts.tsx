import { FC } from "react";
import { ReactSVG } from "react-svg";
import styles from "./content.module.scss";

export const Texts: FC = () => {
  return (
    <div className={styles.about__texts}>
      <h3>About me</h3>
      <p className={styles.desc}>
        I'm a frontend developer, UI designer from the Philippines.
      </p>
      <p className={styles.desc}>
        I've worked in various areas of UI/UX design, including frontend and
        some backend development.
      </p>
      <p className={styles.desc}>
        These days, I'm focusing on building mobile applications utilizing Expo
        (React Native), Swift/Kotlin and delving more into the backend using
        Node.js along with cloud services like AWS.
      </p>

      <small className={styles.date}> </small>
      <p>
        <a
          href="roy-buhay-resume.pdf"
          className={styles.resume}
          target="_blank"
          title="Roy Jose Buhay Resume Link"
        >
          View Resume
          <ReactSVG src="images/svg/newtab.svg" wrapper="span" />
        </a>
      </p>

      <br />
      <br />

      <article>
        <small className={styles.date}> Present</small>
        <div>
          <p>
            <a href="https://avazoo.com/" target="_blank">
              <strong className={styles.title}>
                <span>
                  <img src="images/avazoo-logo.png" />
                </span>
                Avazoo Worldwide, LTD
              </strong>
            </a>
            <span> UI Designer & Full-stack Developer</span>
            Designed and developed web application using Laravel, ReactJS and
            MySQL along with a mobile application using Expo (React Native).
          </p>
          <ul>
            <li> Tasks - </li>
            <li> Mobile </li>
            <li> Dashboard </li>
            <li> Ticket Gallery </li>
            <li> Internal Tools </li>
            <li> API Integrations </li>
          </ul>
        </div>
      </article>
      <article>
        <small className={styles.date}> 2018 - 2021</small>
        <div>
          <p>
            <a
              href="https://bz.linkedin.com/company/apptechgateway"
              target="_blank"
            >
              <strong className={styles.title}>
                <span>
                  <img src="images/apptech-logo.png" />
                </span>
                AppTech Gateway{" "}
              </strong>
            </a>
            <span> UI Designer & Full-stack Developer</span>
            Developed mostly the frontend for a web application using Laravel,
            ReactJS, MySQL and a mobile centric "match-it" game using ReactJS.
          </p>
          <ul>
            <li> Tasks - </li>
            <li> Match-It Game </li>
            <li> Dashboard </li>
            <li> UI/Graphic Design </li>
            <li> Marketing Pages </li>
          </ul>
        </div>
      </article>
      <article>
        <small className={styles.date}> 2018 - 2021</small>
        <div>
          <p>
            <a href="https://hk.entinux.com/" target="_blank">
              <strong className={styles.title}>
                <span>
                  <img src="images/entinux-logo.png" />
                </span>
                Entinux LTD.{" "}
              </strong>
            </a>
            <span> UI Designer & Front-end Developer</span>
            Designed and developed various websites, web apps and mobile apps
            using AngularJS, Ionic Framework and Wordpress for CMS.
          </p>
          <ul>
            <li> Projects - </li>
            <li> Portal </li>
            <li> SmartMX </li>
            <li> Mission Pick </li>
            <li> Zeiton </li>
            <li> Perfect Match </li>
            <li> HK PolyU </li>
            <li> HK Consumer Council </li>
          </ul>
        </div>
      </article>
      <article>
        <small className={styles.date}> 2021 - 2022 </small>
        <div>
          <p>
            <a href="https://crateclub.com/" target="_blank">
              <strong className={styles.title}>
                <span>
                  <img src="images/cc-logo.png" />
                </span>
                CrateClub{" "}
              </strong>
            </a>
            <span> UI Designer & Front-end Developer</span>
            Designed and developed web application and front facing web pages
            using Laravel with mostly vanilla JS and CSS.
          </p>
          <ul>
            <li> Tasks - </li>
            <li> Dashboard </li>
            <li> UI/Graphic Design </li>
            <li> Marketing Pages </li>
            <li> API Integrations </li>
          </ul>
        </div>
      </article>
      <article>
        <small className={styles.date}> 2015 - 2018</small>
        <div>
          <p>
            <a href="https://nexusbond.com" target="_blank">
              <strong className={styles.title}>
                <span>
                  <img src="images/nb-logo.png" />
                </span>
                NexusBond Asia Inc.
              </strong>
            </a>
            <span> Senior Developer / Designer</span>
            Initiates project planning and brainstorming. Manages junior
            developers for fast production of marketing pages and graphic
            assets.
          </p>
          <ul>
            <li> Projects - </li>
            <li> Orto </li>
            <li> Ocadido </li>
            <li> William Hill </li>
            <li> Betfred </li>
            <li> SusanWins </li>
          </ul>
        </div>
      </article>
    </div>
  );
};
