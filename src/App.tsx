import style from "./app.module.scss";

import { Card as MainCard } from "./components/Main/Card";
import { Card as AboutCard } from "./components/About";
import { Card as ProjectstCard } from "./components/Projects/Card";

import { Modal } from "./components/Modal";
import { AboutModal } from "./components/About/Modal";
import { ProjectsModal } from "./components/Projects";
import { useModal } from "./context/ModalContext";
import { projects } from "./data/projects";

export type PROJECTS = (typeof projects)[number]["title"];
export type PROJECT = (typeof projects)[number];
export enum PAGE_TYPE {
  ABOUT = "about",
  PROJECTS = "projects",
}

export const SCREEN_PATH = "../../src/assets/images/";
export const SVG_PATH = "../../src/assets/svg/";

export default function App() {
  const { isOpen, type } = useModal();

  const renderModalContent = () => {
    switch (type) {
      case "about":
        return <AboutModal />;
      case "projects":
        return <ProjectsModal />;
      default:
        return null;
    }
  };
  return (
    <>
      <div className="wrapper">
        <main className={`${isOpen && "scale_down"} ${style.main}`}>
          <MainCard />
          <AboutCard />
          <ProjectstCard />
        </main>
      </div>
      <footer>Made with ❤️ from the Philippines. &copy; 2025</footer>
      <Modal>{renderModalContent()}</Modal>
    </>
  );
}
