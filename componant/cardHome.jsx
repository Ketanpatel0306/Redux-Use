import React from "react";
import Style from "../styles/cardHome.module.scss";
import { AddToCard, DeleteToCard } from "../store/action/index";
import { useDispatch, useSelector } from "react-redux";

export const CardHome = ({ item }) => {
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
      <div className={Style.innerDiv}>
        <img src={item.img} />
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
