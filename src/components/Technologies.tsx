import { FC } from "react";
import { ReactSVG } from "react-svg";
import { PROJECT, SVG_PATH } from "../App";

import style from "../app.module.scss";

interface Props {
  data: PROJECT;
}

export const Technologies: FC<Props> = ({ data }) => {
  return (
    <div className={style.technologies}>
      {data?.technologies.map((tech) => (
        <div className={style.technologies_tech}>
          <ReactSVG src={`${SVG_PATH}${tech}.svg`} wrapper="span" />
          {tech}
        </div>
      ))}
    </div>
  );
};
