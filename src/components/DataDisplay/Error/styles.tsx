import styled from "styled-components";

import { Default } from "../../../styles/palette";

export const StyledContainer = styled.div`
  align-items: center;
  background-color: ${Default.white.regular};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  .error-title {
    font-size: 28px;
    font-weight: 700;
    margin: 0;
  }

  .try-again-button {
    background: ${Default.blue.regular};
    border: 0;
    border-radius: 10px;
    color: ${Default.white.regular};
    cursor: pointer;
    font-weight: 700;
    height: 56px;
    margin: 32px 0;
    width: 347px;

    &:disabled {
      opacity: 0.5;
    }
  }
`;
