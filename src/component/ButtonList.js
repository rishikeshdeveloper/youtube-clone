import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="all" />
      <Button name="JavaScript" />
      <Button name="Music" />
      <Button name="BigBossOTT" />
      <Button name="Web Development" />
      <Button name="Software" />
    </div>
  );
};

export default ButtonList;
