import styled from "styled-components";

import { rules } from "../../../styles/breakpoints";
import { ThemeProps } from "../../../styles/palette";

export interface StyledContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  paletteColors: ThemeProps;
}

export const StyledContainer = styled.div<StyledContainerProps>`
  background: ${(props) => props.paletteColors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  padding: 35px 20px;

  * {
    color: ${(props) => props.paletteColors.textColor};
  }

  .content {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
  }

  .choose-button {
    background: ${(props) => props.paletteColors.buttonColor};
    border: 0;
    border-radius: 10px;
    color: ${(props) => props.paletteColors.buttonTextColor};
    cursor: pointer;
    font-weight: 700;
    height: 56px;
    max-width: 347px;
    order: 3;
    width: 100%;

    &:disabled {
      opacity: 0.5;
    }
  }

  .back-button {
    align-items: center;
    background: transparent;
    border: 0;
    cursor: pointer;
    display: flex;
    font-size: 18px;
    font-weight: 300;
    height: 47px;
    width: 120px;

    svg {
      margin-right: 20px;
    }
  }

  .master-img {
    align-items: center;
    display: flex;
    height: 285px;

    img {
      border-radius: 50%;
      max-height: 100%;
      max-width: 100%;
    }
  }

  .master-name {
    align-items: center;
    display: flex;
    font-size: 36px;
    font-weight: 300;
    flex-direction: column;
    height: 103px;
    margin: 34px 0;
    text-align: center;

    strong {
      font-weight: 700;
    }
  }

  @media ${rules.md} {
    padding: 35px 52px;

    .choose-button {
      order: 0;
      margin-bottom: 7vh;
    }

    .master-img {
      height: 417px;
    }

    .master-name {
      flex-direction: row;
      margin: 0;

      strong {
        margin-left: 10px;
      }
    }
  }
`;
