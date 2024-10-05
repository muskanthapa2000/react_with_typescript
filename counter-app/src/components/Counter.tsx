import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography } from '@mui/material';
import { increment, decrement } from '../Store/action';
import { RootState } from '../Store/store'; // Assuming you define RootState in store.ts

const Counter: React.FC = () => {
    const dispatch = useDispatch();
    const count = useSelector((state: RootState) => state.count); // Adjust this based on your state shape

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <Typography variant="h4">Counter: {count}</Typography>
            <Button variant="contained" color="primary" onClick={() => dispatch(increment())}>
                Increment
            </Button>
            <Button variant="contained" color="secondary" onClick={() => dispatch(decrement())}>
                Decrement
            </Button>
        </div>
    );
};

export default Counter;
