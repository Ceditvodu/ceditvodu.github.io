import React, {Component} from 'react';
import {connect} from 'react-redux'; 
import ReactDOM from 'react-dom';
import {getValuePosition, 
        getIndicators, 
        getPoints, 
        getAnchor, 
        getBaseline} from '../lib/main.js';

import style from '../styles/inputs.css';

class Chart extends Component {
	constructor(props){
		super(props);

    this.height = 200;
    this.width = 320;

    this.centerX = this.width/2;
    this.centerY = this.height/2;
    this.radius = this.height/2;

    this.points_count = this.props.characters.length;
	}

	render(){
    return(
        <svg width={this.width} height={this.height} ref={(svg)=>{}}>
          <g>
            <path d={
              this.props.characters.reduce((prev, chara, index)=>{
                  let polygon = "M8 48 L56 48 L32 12 Z";
                  // console.log(this.props.characters.length, index);
                  if(index == 0){
                    return prev+"M "+getIndicators(this.props.characters.length, this.width/2, this.height/2, index, chara.value).x
                              +" "+getIndicators(this.props.characters.length, this.width/2, this.height/2, index, chara.value).y
                              +" ";
                  }else if(index == (this.props.characters.length-1)){
                    return prev+"L "+getIndicators(this.props.characters.length, this.width/2, this.height/2, index, chara.value).x
                              +" "+getIndicators(this.props.characters.length, this.width/2, this.height/2, index, chara.value).y
                              +" Z";
                  }else{
                    return prev+"L "+getIndicators(this.props.characters.length, this.width/2, this.height/2, index, chara.value).x
                              +" "+getIndicators(this.props.characters.length, this.width/2, this.height/2, index, chara.value).y
                              +" "; 
                  }
                  return prev+"";
                }, ""

              )
            } style={{fill:"rgba(100,0,100,0.5)", stroke:"rgba(100,100,0,1)" }}></path>
          </g>
          <g>
            <path d={
              this.props.characters.reduce((prev, chara, index)=>{
                  let polygon = "M8 48 L56 48 L32 12 Z";
                  // console.log(this.props.characters.length, index);
                  if(index == 0){
                    return prev+"M "+getPoints(this.props.characters.length, this.width/2, this.height/2)[index].x
                              +" "+getPoints(this.props.characters.length, this.width/2, this.height/2)[index].y
                              +" ";
                  }else if(index == (this.props.characters.length-1)){
                    return prev+"L "+getPoints(this.props.characters.length, this.width/2, this.height/2)[index].x
                              +" "+getPoints(this.props.characters.length, this.width/2, this.height/2)[index].y
                              +" Z";
                  }else{
                    return prev+"L "+getPoints(this.props.characters.length, this.width/2, this.height/2)[index].x
                              +" "+getPoints(this.props.characters.length, this.width/2, this.height/2)[index].y
                              +" "; 
                  }
                  return prev+"";
                }, ""

              )
            } style={{fill:"rgba(100,0,100,0.5)", stroke:"rgba(100,0,100,1)" }}></path>
          </g>
          <g>
            {this.props.characters.map((chara, index)=>
              <line x1={this.width/2} 
                    y1={this.height/2} 
                    x2={getPoints(this.props.characters.length, this.width/2, this.height/2)[index].x}
                    y2={getPoints(this.props.characters.length, this.width/2, this.height/2)[index].y} 
                    style={{stroke:"rgba(100,0,100,1)"}}></line>
            )}
          </g>
          {this.props.characters.map((chara, index)=>
            <g key={index}>
              <circle cx={getIndicators(this.props.characters.length, this.width/2, this.height/2, index, chara.value).x} 
                      cy={getIndicators(this.props.characters.length, this.width/2, this.height/2, index, chara.value).y} 
                      r="2" stroke="green" strokeWidth="1" fill="blue" />
            </g>
            )
          }
          {this.props.characters.map((chara, index)=>{
              let x = getIndicators(this.props.characters.length, this.width/2, this.height/2, index, "100").x;
              let y = getIndicators(this.props.characters.length, this.width/2, this.height/2, index, "100").y;
                return <g key={index} >
                    <text 
                      x={x} 
                      y={y} 
                      fontFamily="Passion One" 
                      fontSize="24px"
                      fill="#fff" 
                      // fontWeight="bold" 
                      stroke="#000" 
                      strokeWidth="0.5" 
                      textAnchor={getAnchor(this.width/2,x)} 
                      alignmentBaseline={getBaseline(this.height/2,y)} 
                      > 
                      {chara.name}
                    </text>
                  </g>
              }
            
            )
          }
          {this.props.characters.map((chara, index)=>
            <g key={index}>
              <circle cx={getPoints(this.props.characters.length, this.width/2, this.height/2)[index].x} 
                      cy={getPoints(this.props.characters.length, this.width/2, this.height/2)[index].y} 
                      r="2" stroke="green" strokeWidth="1" fill="yellow" />
            </g>
            )
          }
          <g>
            <circle cx={this.width/2} cy={this.height/2}  r="5" stroke="green" strokeWidth="1" fill="black" />
          </g>
        </svg>

    )
	}
}


export default connect(
  state => ({
    characters: state.characters
  })
)(Chart);