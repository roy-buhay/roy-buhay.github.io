import { FC, RefObject } from "react";
import "@splidejs/react-splide/css/core";

import { projects } from "../../data/projects";
import { SCREEN_PATH } from "../../App";
import { Technologies } from "../Technologies";
import { Screen } from "./Screen";
import { Close } from "../Close";

import styles from "./content.module.scss";

interface Props {
  ref: RefObject<HTMLDivElement | null>;
  project: string | null;
  back: () => void;
}

export const Details: FC<Props> = ({ ref, project, back }) => {
  const data = projects.find((proj) => proj.title === project);

  return (
    <div ref={ref} className={styles.projects_details}>
      <Close close={back} />

      <div className={styles.projects_details_content}>
        <img
          src={`${SCREEN_PATH}${data?.title}/${data?.path}`}
          alt={data?.title}
          style={{
            width: `${data?.pageWidth}rem`,
          }}
        />
        <p>{data?.desc}</p>
        <a href={data?.url}>{data?.urlText}</a>

        {/* {data && <Technologies data={data} />} */}
      </div>

      {data && <Screen data={data} screens={data.screenshots} />}
    </div>
  );
};
