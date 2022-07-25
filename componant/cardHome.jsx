import React, { useContext, useState } from "react";
import Style from "../styles/cardHome.module.scss";

export const CardHome = ({ item }) => {
  // const getData = useSelector((state) => state.CartReducer.cart);
  // const dispatch = useDispatch();
  // console.log("getData", getData);
  return (
    <div>
      <div className={Style.innerDiv}>
        <img src={item.img} />
        <h5>Name: {item.name} </h5>
        <h6>Price: {item.price} </h6>
        {/* {cart.includes(item) ? (
          <button onClick={() => setCart(cart.filter((c) => c.id !== item.id))}>
            Remove Form Cart
          </button>
        ) : (
          <button onClick={() => setCart([...cart, item])}>Add to Cart</button>
        )} */}
      </div>
    </div>
  );
};
