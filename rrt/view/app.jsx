import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import character from './characterContainer/characterContainer.jsx';
import characterReducer from '../reducers/character.js';

let store = createStore(characterReducer);
 
class App extends React.Component {

  constructor(props) {
    super(props);

    
  }
 
  render() {
    return (<div className="app" >
	    				<CharacterContainer store={store} />
	    			</div>)
  }
}
 
ReactDOM.render(<App />, document.getElementById('main'));