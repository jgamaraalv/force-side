import styled from "styled-components";

import { rules } from "../../styles/breakpoints";
import { Default } from "../../styles/palette";

export const StyledContainer = styled.div`
  color: ${Default.blue.regular};
  flex-direction: column;
  text-align: center;
  padding: 32px 20px;

  .title {
    font-size: 42px;
    font-weight: 300;
    margin: 0 0 7px;

    strong {
      font-weight: 700;
    }
  }

  .description {
    font-size: 14px;
    letter-spacing: 0.35em;
    margin: 0 0 62px;
    text-transform: uppercase;
  }

  @media ${rules.smOnly} {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
  }

  @media ${rules.md} {
    padding: 210px 20px 0;

    .description {
      margin: 0 0 162px;
    }

    .title {
      font-size: 72px;
    }
  }
`;

export const StyledStartButton = styled.button`
  background: ${Default.blue.regular};
  border: 0;
  border-radius: 10px;
  color: ${Default.white.regular};
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  height: 56px;
  letter-spacing: 0.35em;

  text-transform: uppercase;
  width: 189px;

  &:last-child {
    margin-bottom: 32px;
  }

  &:disabled {
    cursor: initial;
    opacity: 0.5;
  }
`;
