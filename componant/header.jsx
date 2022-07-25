import React from "react";
import { useSelector } from "react-redux";
import Style from "../styles/header.module.scss";

export const Header = () => {
  const getData = useSelector((state) => state.CartReducer.cart);
  return (
    <div style={{ backgroundColor: "red" }} className={Style.herderMainDiv}>
      <a href="/">
        <h2>home </h2>
      </a>
      <a href="./single-card">
        <h2>SingleCard : {getData.length} </h2>
      </a>
    </div>
  );
};
