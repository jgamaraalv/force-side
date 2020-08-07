import React from "react";
import { Normalize } from "styled-normalize";

import GlobalStyle from "./styles/global";

const App: React.FC = () => {
  return (
    <>
      <Normalize />

      <GlobalStyle />
    </>
  );
};

export default App;
