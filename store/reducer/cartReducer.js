import * as Action from "../type";
const initialState = { cart: [] };

export const CartReducer = (state = initialState, action) => {
  //   console.log("action", action);
  switch (action.type) {
    case Action.ADD_CARD:
      //   console.log("state", state);
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case Action.DELETE_ITEM:
      const deleteItem = state.cart.filter((elm) => elm.id != action.payload);
      return {
        ...state,
        cart: deleteItem,
      };
    default:
      return state;
  }
};
