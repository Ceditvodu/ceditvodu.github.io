import React, {Component} from 'react';
import {connect} from 'react-redux'; 
import ReactDOM from 'react-dom';
import { Link } from 'react-router'
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
        <Link to={`/app/`} activeClassName="current">go</Link>
      </div>
    )
  }
}

export default App;