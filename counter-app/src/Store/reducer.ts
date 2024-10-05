import { INCREMENT, DECREMENT } from './actionType';

// Define the shape of the state
interface CounterState {
    count: number;
}

const initialState: CounterState = {
    count: 0,
};

// Reducer function
export default function reducer(
    state = initialState,
    action: { type: string }
): CounterState {
    switch (action.type) {
        case INCREMENT:
            return { count: state.count + 1 };
        case DECREMENT:
            return { count: state.count - 1 };
        default:
            return state;
    }
}
