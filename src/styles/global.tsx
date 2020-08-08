import { createGlobalStyle } from "styled-components";

import { rules } from "./breakpoints";

const StyledGlobal = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    line-height: normal;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
  }

  @media ${rules.smOnly} {
    html, body, #root {
      height: 100%;
    }
  }
`;

export default StyledGlobal;
