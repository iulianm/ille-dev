import { CHECK_PARAGRAPH_CONTENT } from '../actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case CHECK_PARAGRAPH_CONTENT:
            console.log('CHECK_PARAGRAPH_CONTENT reducer -> PAYLOAD is -->>', action.payload);
            return action.payload;
        default:
            return state;
    }
}