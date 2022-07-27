import * as Action from "../type";

export const AddToCard = (item) => {
  //   console.log("item", item);
  return {
    type: Action.ADD_CARD,
    payload: item,
  };
};
export const DeleteToCard = (id) => {
  return {
    type: Action.DELETE_ITEM,
    payload: id,
  };
};
