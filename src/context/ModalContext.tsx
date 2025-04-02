import { createContext, useContext, useState } from "react";

export enum PAGE_TYPE {
  ABOUT = "about",
  PROJECTS = "projects",
}

type ModalContextType = {
  isOpen: boolean;
  type: PAGE_TYPE | null;
  openModal: (type: PAGE_TYPE) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("ModalProvider not set.");
  }

  return context;
};

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<PAGE_TYPE | null>(null);

  const openModal = (type: PAGE_TYPE) => {
    setIsOpen(true);
    setType(type);
  };

  const closeModal = () => {
    setIsOpen(false);
    setType(null);
  };

  return (
    <ModalContext.Provider value={{ isOpen, type, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
