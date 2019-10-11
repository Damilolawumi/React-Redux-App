import * as types from '../state/actionTypes';

const initialValue = 0;

export function countReducer(count = initialValue, action) {
    switch (action.type) {
        case types.INCREMENT:
            return count + 1;
        case types.DECREMENT:
            return count - 1;
        case types.RESET:
            return 0;
        default:
            return count;
    }
}

const initialData = {};
export function podReducer(state = initialData, action) {
    switch (action.type) {
        case types.NASA_POD:
            return action.payload;
        default:
            return state;
    }
}