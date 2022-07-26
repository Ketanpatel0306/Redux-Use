import React from "react";
import Style from "../styles/cardHome.module.scss";
import { AddToCard, DeleteToCard } from "../store/action/index";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

export const CardHome = ({ item }) => {
  const router = useRouter();
  const getData = useSelector((state) => state.CartReducer.cart);
  const dispatch = useDispatch();
  const addToCardClick = (item) => {
    dispatch(AddToCard(item));
  };
  const removeToCardClick = (item) => {
    dispatch(DeleteToCard(item));
  };
  return (
    <div>
      <div
        className={Style.innerDiv}
        // onClick={() => router.push(`/product/${item.id}`)}
      >
        <img
          src={item.image}
          style={{ width: "200px", height: "200px", objectFit: "contain" }}
        />
        <h5>Name: {item.name} </h5>
        <h6>Price: {item.price} </h6>
        {/* {getData.length ? ( */}
        <button onClick={() => removeToCardClick(item.id)}>
          Remove Form Cart
        </button>
        {/* ) : ( */}
        <button onClick={() => addToCardClick(item)}>Add to Cart</button>
        {/* )} */}
      </div>
    </div>
  );
};
