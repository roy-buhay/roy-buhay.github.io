import { FC } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { PROJECT, SCREEN_PATH } from "../../App";

interface Props {
  data: PROJECT;
  screens: {
    path: string;
    class?: string;
  }[];
}

export const Screen: FC<Props> = ({ data, screens }) => {
  const config = {
    type: "slide",
    arrows: false,
    pagination: false,
    autoWidth: true,
  };

  return (
    <Splide aria-label="Images" options={{ ...config }}>
      {screens.map((screen) => (
        <SplideSlide className={`${screen.class}`}>
          <img
            src={`${SCREEN_PATH}${data.title}/${screen.path}`}
            alt={data.title}
            loading="lazy"
            decoding="async"
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};
