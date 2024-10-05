import { INCREMENT, DECREMENT } from './actionType';

// Action creators
export const increment = () => ({
    type: INCREMENT,
});

export const decrement = () => ({
    type: DECREMENT,
});

// Async action using Thunk (optional, just for demonstration)
export const incrementAsync = () => {
    return (dispatch: any) => {
        setTimeout(() => {
            dispatch(increment());
        }, 1000);
    };
};
