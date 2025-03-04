import { CSSProperties, FC, ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { useModal } from "../context/ModalContext";
import { Close } from "./Close";

interface Props {
  children: ReactNode;
  customStyle?: CSSProperties | string | {};
}

export const Modal: FC<Props> = ({ children, customStyle, ...rest }) => {
  const { isOpen, closeModal } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      const timer = setTimeout(() => {
        modalRef.current?.querySelector(".modal")?.classList.add("modal__open");
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      {...rest}
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="card"
      tabIndex={-1}
      className="modal__wrapper"
      onClick={() => closeModal()}
    >
      <div className={`modal ${customStyle}`}>
        <Close close={closeModal} />
        {children}
      </div>
    </div>,
    document.body
  );
};
