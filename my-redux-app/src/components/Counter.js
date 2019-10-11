import React from 'react';
import * as actionCreator from '../state/actionCreator';
import { connect } from 'react-redux';

export function Counter({increment, decrement, reset, count}) {

    return (
        <div>
            The Count is {count}
            <button onClick={increment}>Addition</button>
            <button onClick={decrement}>Subtraction</button>
            <button onClick={reset}>Clear</button>
        </div>
    )
}

export default connect(
    state => state,
    actionCreator,
)(Counter);