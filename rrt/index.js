import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import App from './App';

import characterList from './reducers'

const store = createStore(  combineReducers({
    characterList:characterList,
    router:routerReducer
  }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());




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