import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { StyledContainer } from "./styles";

const Modal: React.FC = ({ children }) => {
  const rootElement = useRef(document.createElement("div"));

  useEffect(() => {
    const element = rootElement.current;
    document.body.appendChild(element);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.removeChild(element);
      document.body.style.overflow = "auto";
    };
  }, []);

  return createPortal(
    <StyledContainer data-testid="modal">{children}</StyledContainer>,
    rootElement.current
  );
};

export default Modal;
