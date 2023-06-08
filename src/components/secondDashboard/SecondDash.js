import React from "react";
import { useEffect, useState} from "react";
import SecondUserTable from "./SecondUserTable";
import SwitchUserButton from "./SwitchUserButton";
import axios from "axios";
const SecondDash = () => {
 
  

  return (
    <>
      <SwitchUserButton />
      <SecondUserTable  />
    </>
  );
};

export default SecondDash;
