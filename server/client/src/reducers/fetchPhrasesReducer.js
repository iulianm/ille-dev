import { FETCH_PHRASES } from '../actions/types';

export default function (state = false, action) {
    switch (action.type) {
        case FETCH_PHRASES:
            console.log('FETCH_PHRASES REDUCER -> PAYLOAD is -->>', action.payload);
            return action.payload;
        default:
            return state;
    }
}