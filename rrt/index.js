import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const initialState = [
	'Love',
	'Anger'
]

function characterList (state = initialState, action) {
	if(action.type === 'ADD_CHARA'){
		return [
			...state,
			action.character_name
		]
	}
	else if(action.type === 'EDIT_CHARA'){
		state[action.character_index] = action.character_name;
		console.log(state)
		return state;
	}
	else if(action.type === 'CHANGE_CHARA'){
		state[action.character_index] = action.character_name;
		console.log(state)
		let newstate = state.slice()
		return newstate;
	}
	return state;
}

const store = createStore(characterList, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</ Provider>,
	document.getElementsByClassName('root')[0]
)

// store.subscribe(() => {
// 	console.log('subscribe', store.getState());
// })

// const addTrackBtn = document.getElementsByClassName('addTrack')[0];
// addTrackBtn.addEventListener('click', ()=>{
// 	const trackName = document.getElementsByClassName('trackInput')[0].value;
// 	console.log('trackName', trackName);
// 	store.dispatch({type: 'ADD_TRACK', characterList: trackName});
// })