import { FC } from "react";
import "@splidejs/react-splide/css/core";

import { projects } from "../../data/projects";
import { PROJECTS, SCREEN_PATH } from "../../App";
import { Technologies } from "../Technologies";
import { Screen } from "./Screen";

import styles from "./content.module.scss";

interface Props {
  selectedProject: (selectedProject: PROJECTS) => void;
}

export const Screens: FC<Props> = ({ selectedProject }) => {
  return (
    <div className={styles.projects_container}>
      {projects.map((project) => (
        <div className={`${styles.projects_container_content} projects_splide`}>
          <div className={styles.projects_container_texts}>
            <img
              src={`${SCREEN_PATH}${project.title}/${project.path}`}
              alt={project.title}
              style={{
                width: `${project.width}rem`,
              }}
            />
            <p>{project.desc}</p>
            {project && <Technologies data={project} />}

            <br />
            <button onClick={() => selectedProject(project.title)}>
              View Project
            </button>
          </div>
          <div className={styles.projects_container_screens}>
            {project && <Screen data={project} screens={project.screens} />}
          </div>
        </div>
      ))}
    </div>
  );
};
