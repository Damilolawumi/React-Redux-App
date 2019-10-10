import * as types from '../state/actionTypes';
import axios from 'axios';


const nasaApi = "https://api.nasa.gov/planetary/apod?api_key=YoeP5szYbSrnFTE4KUqS2aUbANxWq7flop3fbkBb";

export function increment() {
    return { type: types.INCREMENT };
}

export function decrement() {
    return { type: types.DECREMENT };
}

export function reset() {
    return { type: types.RESET };
}

export function getNasaPod(data) {
    return {
        type: types.NASA_POD,
        payload: data
    };
}

export const fetchApi = () => dispatch => {
    axios
        .get(nasaApi)
        .then(response => {
          const data = response.data;
          dispatch(getNasaPod(data));
        })
        .catch(error => {
            // error.data
        })
}