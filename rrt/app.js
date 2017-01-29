import React, {Component} from 'react';
import {connect} from 'react-redux'; 
import ReactDOM from 'react-dom';
import Chart from './components/chart.js'
import Controls from './components/controls.js'
import {validation, 
        isNotEmpty, 
        isNotContainNumbers, 
        isNotContainSpaces, 
        isNotMoreThenHundred, 
        isNotLessThenZero} from './lib/validation.js';


import style from './styles/inputs.css';
 

class App extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Chart />
        <Controls />
      </div>
    )
  }
}

export default App;