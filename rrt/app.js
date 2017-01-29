import React, {Component} from 'react';
import {connect} from 'react-redux'; 
import ReactDOM from 'react-dom';
import Chart from './components/chart.js';
import Controls from './components/controls.js'; 

class App extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Chart width="320" height="200" />
        <Controls />
      </div>
    )
  }
}

export default App;