import React from 'react';
import { connect} from 'react-redux';
import * as actionCreators from '../state/actionCreator';

function NasaImage () {

    return (
        <div>
            <h1>NasaImage</h1>
            </div>
    )
}

export default connect (
    state => state,
    actionCreators,
) (NasaImage);