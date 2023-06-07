import React, { useEffect, useState } from "react";
import FetchTable from "./FetchTable";
import axios from "axios";

function MainFetchTable() {
  const dataFechHandler = () => {
    axios
      .get("http://172.16.1.24:3000/")
      .then((res) => {
        console.log(res.data);
        const transformedData = Object.entries(res.data).map(([id, value]) => ({
          id,
          ...value,
        }));
        console.log(transformedData[10]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    dataFechHandler();
  }, []);

  return <FetchTable />;
}

export default MainFetchTable;
