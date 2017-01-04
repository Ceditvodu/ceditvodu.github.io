import React from 'react';
import ReactDOM from 'react-dom';
 
export default class Character extends React.Component {
  
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <h1>Character {this.props.type}</h1>
    );
  }
}
 
//ReactDOM.render(<Character type="anger"/>, document.getElementById('main'));