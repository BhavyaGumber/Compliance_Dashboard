import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import MainTable from "./MainTable";
import axios from "axios";

const MainDash = () => {
  const { BackEnd_Data, Second_Data } = useSelector((state) => ({
    BackEnd_Data: state.BackEnd_Data,
    Second_Data: state.Second_Data,
  }));
  useEffect(() => {
    axios
      .put(
        "https://dashboard-2d985-default-rtdb.firebaseio.com/BackEnd_Data/.json",
        BackEnd_Data
      )
      .then()
      .catch();
  }, [BackEnd_Data]);
  useEffect(() => {
    axios
      .put(
        "https://dashboard-2d985-default-rtdb.firebaseio.com/Second_Data/.json",
        Second_Data
      )
      .then()
      .catch();
  }, [Second_Data]);

  return (
    <>
      <MainTable />
    </>
  );
};

export default MainDash;
