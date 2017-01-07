import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CharacterContainer from './components/characterContainer/characterContainer.jsx';
import characters from './reducers/characters.js';

let store = createStore(characters);
	
ReactDOM.render(	
	<Provider store={store}>
	  <CharacterContainer/>
	</Provider >, document.getElementById('main')
)
 
