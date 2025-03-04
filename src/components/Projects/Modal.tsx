import { FC, useEffect, useRef, useState } from "react";
import { Loader } from "../Loader";
import { Screens } from "./Screens";
import { Details } from "./Details";

import type { PROJECTS } from "../../App";

enum DIRECTION {
  OPEN = "open",
  CLOSE = "close",
}

export const ProjectsModal: FC = () => {
  const projectRef = useRef<HTMLDivElement | null>(null);
  const [modalState, setModalState] = useState<{
    isVisible: boolean;
    selectedProject: PROJECTS | null;
    direction: DIRECTION | null;
  }>({
    isVisible: false,
    selectedProject: null,
    direction: null,
  });

  const handleProjectSelection = (project: PROJECTS) => {
    setModalState({
      isVisible: true,
      selectedProject: project,
      direction: DIRECTION.OPEN,
    });
  };

  const handleClose = () => {
    setModalState((prev) => ({
      ...prev,
      isVisible: false,
      direction: DIRECTION.CLOSE,
    }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (projectRef.current) {
        projectRef.current.style.display = modalState.isVisible
          ? "block"
          : "none";
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [modalState.isVisible]);

  return (
    <>
      <Loader open={modalState.isVisible} direction={modalState.direction} />

      <Details
        ref={projectRef}
        project={modalState.selectedProject}
        back={handleClose}
      />

      <Screens selectedProject={handleProjectSelection} />
    </>
  );
};
