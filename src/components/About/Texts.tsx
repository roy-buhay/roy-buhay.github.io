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
          href="/assets/docs/roy-buhay-resume.pdf"
          className={styles.resume}
          target="_blank"
          title="Roy Jose Buhay Resume Link"
        >
          View Resume
          <ReactSVG src="./src/assets/svg/newtab.svg" wrapper="span" />
        </a>
      </p>

      <br />
      <br />

      <article>
        <small className={styles.date}> Present</small>
        <p>
          <strong className={styles.title}> Avazoo</strong>
          <small> UI Designer & Full-stack Developer</small>
          Designed and developed web application using Laravel, ReactJS and
          MySQL along with a mobile application using Expo (React Native).
        </p>
      </article>
      <article>
        <small className={styles.date}> Apr 2018 - Sept 2021</small>
        <p>
          <strong className={styles.title}> Apptech Gateway</strong>
          <small> UI Designer & Full-stack Developer</small>
          Developed mostly the frontend for a web application using Laravel,
          ReactJS, MySQL and a mobile centric "match-it" game using ReactJS.
        </p>
      </article>
      <article>
        <small className={styles.date}> Apr 2018 - Sept 2021</small>
        <p>
          <strong className={styles.title}> Entinux LTD.</strong>
          <small> UI Designer & Front-end Developer</small>
          Designed and developed various websites, web apps and mobile apps
          using AngularJS, Ionic Framework and Wordpress for CMS.
        </p>
      </article>
      <article>
        <small className={styles.date}> Dec 2021 - Dec 2022</small>
        <p>
          <strong className={styles.title}> Crateclub</strong>
          <small> UI Designer & Front-end Developer</small>
          Designed and developed web application and front facing web pages
          using Laravel with mostly vanilla JS and CSS.
        </p>
      </article>
      <article>
        <small className={styles.date}> Dec 2015 - Feb 2018</small>
        <p>
          <strong className={styles.title}> Nexusbond Asia Inc.</strong>
          <small> Senior Developer / Designer</small>
          Initiates project planning and brainstorming. Manages junior
          developers for fast production of marketing pages and graphic assets.
        </p>
      </article>
    </div>
  );
};
