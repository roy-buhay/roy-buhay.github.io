import { FC, useEffect, useRef } from "react";

import style from "../app.module.scss";

interface Props {
  open: boolean | undefined;
  direction: "open" | "close" | null;
}

export const Loader: FC<Props> = ({ open, direction }) => {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loaderRef.current) return;

    if (direction === "open") {
      loaderRef.current.style.transform = "translateX(0%)";
      const timer = setTimeout(() => {
        if (loaderRef.current) {
          loaderRef.current.style.transform = "translateX(-100%)";
        }
      }, 800);
      return () => clearTimeout(timer);
    } else if (direction === "close") {
      loaderRef.current.style.transform = "translateX(0%)";
      const timer = setTimeout(() => {
        if (loaderRef.current) {
          loaderRef.current.style.transform = "translateX(100%)";
        }
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [open, direction]);

  return <div ref={loaderRef} className={style.loader} />;
};
