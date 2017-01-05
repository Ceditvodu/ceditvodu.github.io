import React from 'react';
import ReactDOM from 'react-dom';
import CharacterContainer from './characterContainer/characterContainer.jsx';
 
class App extends React.Component {

  constructor(props) {
    super(props);
  }
 
  render() {
    return (<div className="app">
	    				<CharacterContainer/>
	    			</div>)
  }
}
 
ReactDOM.render(<App />, document.getElementById('main'));