import React from "react";
import SecondUserTable from "./SecondUserTable";
import SwitchUserButton from "./SwitchUserButton";
const SecondDash = () => {

  const userList = ["Aviral", "Sanjeev", "Anuj"];
  return (
    <>
      <SwitchUserButton userList={userList} />
      <SecondUserTable  />
    </>
  );
};

export default SecondDash;
