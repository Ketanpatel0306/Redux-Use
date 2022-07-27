import React from "react";
import { useSelector } from "react-redux";
import { CardHome } from "./cardHome";

export const CartDetail = () => {
  const getData = useSelector((state) => state.CartReducer.cart);
  return (
    <div>
      {getData.map((item, index) => {
        return (
          <div
            key={index + "detailKey"}
            style={{
              height: "100vh",
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardHome item={item} key={index + "cartDetail"} />;
          </div>
        );
      })}
    </div>
  );
};
