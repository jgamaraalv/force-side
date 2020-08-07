import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchPeople } from "../../store/modules/home/actions";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

  return <></>;
};

export default Home;
