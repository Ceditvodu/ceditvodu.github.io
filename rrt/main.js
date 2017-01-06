import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import characterContainer from './view/characterContainer/characterContainer.jsx';
import characters from './reducers/characters.js';

let store = createStore(characters);
	
render(	
	<Provider store={store}>
	    <CharacterContainer/>
	  </Provider >, document.getElementById('main')
)
 
