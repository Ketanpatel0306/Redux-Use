import * as Action from "../type"
const initialState ={cart:[],};

export const CartReducer = (state=initialState,action) =>{
switch (action.type) {
    case Action.ADD_CARD:
        return{
            ...state,
            cart:[...state.cart,action.payload]
        }

    default:
return state;
}

}




