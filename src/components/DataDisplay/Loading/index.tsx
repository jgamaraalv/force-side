import React from "react";

import { StyledContainer } from "./styles";

const Loading: React.FC = () => {
  return (
    <StyledContainer>
      <p className="loading-title">Carregando...</p>
    </StyledContainer>
  );
};

export default Loading;
