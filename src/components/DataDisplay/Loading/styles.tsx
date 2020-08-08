import styled from "styled-components";

import { Default } from "../../../styles/palette";

export const StyledContainer = styled.div`
  align-items: center;
  background-color: ${Default.white.regular};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  .loading-title {
    font-size: 36px;
    font-weight: 700;
    margin: 0;
  }
`;
