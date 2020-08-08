import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import DataDisplay from "../../components/DataDisplay";
import Modal from "../../components/Modal";

import ApplicationState from "../../store/State";
import { openModal } from "../../store/modal/actions";
import { fetchPeople } from "../../store/modules/home/actions";

import { StyledContainer, StyledStartButton } from "./styles";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const homeState = useSelector(
    (state: ApplicationState) => state.modules.home
  );
  const modalState = useSelector((state: ApplicationState) => state.modal);
  const loadingMaster = homeState.people.status === "loading";
  const errorInFetch = homeState.people.status === "error";

  const startButtonClickHandler = () => {
    dispatch(fetchPeople());
  };

  useEffect(() => {
    if (homeState.people.status === "loaded") {
      dispatch(openModal(<DataDisplay />));
    }
  }, [dispatch, homeState]);

  return (
    <StyledContainer>
      <h1 className="title">
        Welcome to <strong>iClinic</strong>
      </h1>

      <p className="description">Frontend challenge</p>

      <StyledStartButton
        disabled={loadingMaster}
        onClick={startButtonClickHandler}
      >
        {loadingMaster ? "..." : "Start"}
      </StyledStartButton>

      {errorInFetch && (
        <p>
          Ocorreu um erro na requisição. <br />
          Clique no botão <b>start</b> para tentar novamente.
        </p>
      )}

      {modalState.open && <Modal>{modalState.component}</Modal>}
    </StyledContainer>
  );
};

export default Home;
