import React from 'react';
import ReactDOM from 'react-dom';
 
export default class Character extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {value: props.emotion};
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleChange(event){
  	this.setState({value: event.target.value})
  }


  handleFocus(event){
    this.setState(prevState=>({disabled: false}))
  }
 
  render() {
    return (
    	<input type="text" value={this.state.value} onChange={this.handleChange} onFocus={this.handleFocus} />
    );
  }
}
 
//ReactDOM.render(<Character type="anger"/>, document.getElementById('main'));