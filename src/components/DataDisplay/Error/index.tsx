import React from "react";
import { useDispatch } from "react-redux";

import { fetchPeople } from "../../../store/modules/home/actions";

import { StyledContainer } from "./styles";

const Error: React.FC = () => {
  const dispatch = useDispatch();

  const tryAgainButtonClickHandler = () => {
    dispatch(fetchPeople());
  };

  return (
    <StyledContainer>
      <p className="error-title">
        Ops! Algo de errado não está certo...
        <span role="img" aria-label="Sad emoji">
          😥
        </span>
      </p>

      <button className="try-again-button" onClick={tryAgainButtonClickHandler}>
        tentar novamente
      </button>
    </StyledContainer>
  );
};

export default Error;
