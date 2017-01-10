import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const initialState = [
	{name:'Love', value: 100},
	{name:'Anger', value: 0}
]

function characterList (state = initialState, action) {
	if(action.type === 'ADD_CHARA'){
		return [
			...state,
			{name:action.character_name,name:action.character_value}
		]
	}
	else if(action.type === 'EDIT_CHARA'){
		state[action.character_index].name = action.character_name;
		state[action.character_index].value = action.character_value;
		console.log(state)
		return state;
	}
	else if(action.type === 'CHANGE_CHARA'){
		state[action.character_index].name = action.character_name;
		state[action.character_index].value = action.character_value;
		console.log(state)
		let newstate = state.slice()
		return newstate;
	}
	else if(action.type === 'DELETE_CHARA'){
		state.splice(action.character_index,1)
		let newstate = state.slice();
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