import React from 'react';
import ReactDOM from 'react-dom';
import Character from '../character/character.jsx';
 
export default class CharacterContainer extends React.Component {
  
  constructor(props) {
    super(props);

    this.store = props.store;
  }
 
  render() {
    return (
      <fieldset>
        <Character emotion="anger" />
        <Character emotion="" />
      </fieldset>
    );
  }
}
 
//ReactDOM.render(<Character type="anger"/>, document.getElementById('main'));