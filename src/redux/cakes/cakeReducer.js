import { BUY_CAKE } from './cakeType';

const initialState = {
    numOfCakes : 10
}


const cakeReducer= (state = initialState, action) => {
    debugger
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes : state.numOfCakes - 1 
        }
      default : return state
    }
}


export default cakeReducer