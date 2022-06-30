import { INCREMENT, DECREMENT } from './actions'

export const intitialState = {
    count: 0
}

export function reducer(state = intitialState, action){
    switch(action.type){
        case INCREMENT:
            return{
                count: state.count + 1
            };
        case DECREMENT:
            return{
                count: state.count - 1
            };
        default:
            return state;
    }
}