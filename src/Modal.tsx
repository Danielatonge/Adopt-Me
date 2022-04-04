import { FunctionComponent, MutableRefObject, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

let modalRoot: HTMLElement;

const Modal: FunctionComponent = ({ children }) => {
  modalRoot = modalRoot
    ? modalRoot
    : (document.getElementById("modal") as HTMLElement);
  const elRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    if (!modalRoot || !elRef.current) {
      return;
    }
    modalRoot.appendChild(elRef.current);

    return () => {
      if (elRef.current) {
        modalRoot.removeChild(elRef.current);
      }
    };
  }, []);

  return createPortal(children, elRef.current);
};

export default Modal;
