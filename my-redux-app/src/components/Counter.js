import React from 'react';
import * as actionCreator from '../state/actionCreator';
import { connect } from 'react-redux';

export function Counter(props) {
    return (
        <div>
            Counter
        </div>
    )
}

export default connect(
    state => state,
    actionCreator,
)(Counter);