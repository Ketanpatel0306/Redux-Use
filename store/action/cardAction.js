import * as Action from "../type"

export const AddToCard = (item) =>{
    return {
        type:Action.ADD_CARD,
        payload:item,
    }
}