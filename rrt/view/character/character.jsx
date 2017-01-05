import React from 'react';
import ReactDOM from 'react-dom';
 
export default class Character extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {value: props.emotion, disabled: true};
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event){
  	this.setState({value: event.target.value})
  }

  handleClick(event){
  	this.setState({disabled: false})
  }
 
  render() {
    return (
    	<input type="text" value={this.state.value} disabled={this.state.disabled} onClick={this.handleClick} onChange={this.handleChange} />
    );
  }
}
 
//ReactDOM.render(<Character type="anger"/>, document.getElementById('main'));