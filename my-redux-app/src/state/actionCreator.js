import * as types from '../state/actionTypes';



export function increment() {
    return { type: types.INCREMENT };
  }
  
 export function decrement() {
    return { type: types.DECREMENT };
  }

export function reset () {
    return { type: types.RESET };
}

"https://api.nasa.gov/planetary/apod?api_key=YoeP5szYbSrnFTE4KUqS2aUbANxWq7flop3fbkBb"