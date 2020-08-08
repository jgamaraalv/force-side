import React from "react";
import { useSelector } from "react-redux";

import Error from "./Error";
import Loading from "./Loading";
import Master from "./Master";

import ApplicationState from "../../store/State";

const DataDisplay: React.FC = () => {
  const homeState = useSelector(
    (state: ApplicationState) => state.modules.home
  );

  let contentRender: JSX.Element | null = null;
  if (homeState.people.status === "loaded") {
    contentRender = <Master />;
  } else if (homeState.people.status === "loading") {
    contentRender = <Loading />;
  } else if (homeState.people.status === "error") {
    contentRender = <Error />;
  }

  return contentRender;
};

export default DataDisplay;
