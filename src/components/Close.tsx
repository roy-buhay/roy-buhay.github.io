import { FC } from "react";

interface Props {
  close: () => void;
}

export const Close: FC<Props> = ({ close }) => {
  return (
    <button data-close-modal className="modal__btn" onClick={() => close()}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 7L17 17M7 17L17 7"
          stroke="var(--close-text-color)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
