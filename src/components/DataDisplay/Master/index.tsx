import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ApplicationState from "../../../store/State";
import { closeModal } from "../../../store/modal/actions";
import { fetchPeople } from "../../../store/modules/home/actions";

import { DataDisplay as DataDisplayPalette } from "../../../styles/palette";
import { StyledContainer } from "./styles";

import BackIcon from "../../../assets/icons/BackIcon";
import DarthVaderImg from "../../../assets/images/darth-vader.png";
import LukeSkywalkerImg from "../../../assets/images/luke-skywalker.png";

const Master: React.FC = () => {
  const dispatch = useDispatch();
  const {
    people: { data },
  } = useSelector((state: ApplicationState) => state.modules.home);

  const chooseButtonClickHandler = () => {
    dispatch(fetchPeople());
  };

  const backButtonClickHandler = () => {
    dispatch(closeModal());
  };

  return (
    <StyledContainer paletteColors={DataDisplayPalette[data!.force]}>
      <div className="header">
        <button
          data-testid="back-button"
          className="back-button"
          onClick={backButtonClickHandler}
        >
          <BackIcon /> back
        </button>
      </div>

      <div className="content">
        <button className="choose-button" onClick={chooseButtonClickHandler}>
          coose your path again, Padawan
        </button>

        <div className="master-img">
          {data!.force === "light" ? (
            <img src={LukeSkywalkerImg} alt="Luke Skywalker" />
          ) : (
            <img src={DarthVaderImg} alt="Darth Vader" />
          )}
        </div>

        <h2 data-testid="master-name" className="master-name">
          Your master is <strong>{data!.name}</strong>
        </h2>
      </div>
    </StyledContainer>
  );
};

export default Master;
