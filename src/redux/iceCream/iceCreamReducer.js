import { BUY_ICE_CREAM } from "./iceCreamType";

const initialState = {
  numberOfIceCream: 20 
}

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM: return {
      ...state,
      numberOfIceCream: state.numberOfIceCream -1
    }
    default: return state
  }
}

export default iceCreamReducer