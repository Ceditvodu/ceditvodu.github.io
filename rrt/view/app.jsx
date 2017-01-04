import React from 'react';
import ReactDOM from 'react-dom';
import Character from './character.jsx';
 
class App extends React.Component {

  constructor(props) {
    super(props);
  }
 
  render() {
    return (<div className="app">
    				<Character type="anger" />
    				<Character type="love" />
    				<Character type="hate" />
    			</div>)
  }
}
 
ReactDOM.render(<App />, document.getElementById('main'));