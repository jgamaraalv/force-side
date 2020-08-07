import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { Normalize } from "styled-normalize";

import Home from "./views/Home";
import store from "./store";
import GlobalStyle from "./styles/global";

const App: React.FC = () => {
  return (
    <>
      <Normalize />

      <GlobalStyle />

      <ReduxProvider store={store}>
        <Home />
      </ReduxProvider>
    </>
  );
};

export default App;
