import React, { useContext } from "react";
import Style from "../styles/header.module.scss";

export const Header = () => {
  return (
    <div style={{ backgroundColor: "red" }} className={Style.herderMainDiv}>
      <a href="/">
        <h2>home </h2>
      </a>
      <a href="./singleCard">{/* <h2>SingleCard {cart.length} </h2> */}</a>
    </div>
  );
};
