import React from "react";
import { useSelector } from "react-redux";
import Style from "../styles/header.module.scss";
import { MetaData } from "./meta";

export const Header = () => {
  const getData = useSelector((state) => state.CartReducer.cart);
  return (
    <div>
      <MetaData />
      <div style={{ backgroundColor: "red" }} className={Style.herderMainDiv}>
        <a href="/">
          <h2>home </h2>
        </a>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <a href="./single-card">
            <h2>SingleCard : {getData !== undefined ? getData.length : ""} </h2>
          </a>
          <a href="./new-data" style={{ marginLeft: "10px" }}>
            <h2>NewData</h2>
          </a>
        </div>
      </div>
    </div>
  );
};
