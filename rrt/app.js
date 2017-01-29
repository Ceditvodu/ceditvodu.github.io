import React, {Component} from 'react';
import {connect} from 'react-redux'; 
import ReactDOM from 'react-dom';
import {getValuePosition, 
        getIndicators, 
        getPoints, 
        getAnchor, 
        getBaseline} from './lib/main.js';
import {validation, 
        isNotEmpty, 
        isNotContainNumbers, 
        isNotContainSpaces, 
        isNotMoreThenHundred, 
        isNotLessThenZero} from './lib/validation.js';

import style from './styles/app.css';
 

class App extends Component{

  constructor(props){
    super(props);
    this.charaItemName = new Array();
    this.charaItemValue = new Array();

    this.height = 200;
    this.width = 320;

    this.centerX = this.width/2;
    this.centerY = this.height/2;
    this.radius = this.height/2;

    this.points_count = this.props.characters.length;

  }

  addChara(event){
    if(event.key == 'Enter') { 

      let name_is_valid = validation(this.charaInputName.value, 
                                          isNotEmpty, 
                                          isNotContainNumbers, 
                                          isNotContainSpaces);
      let value_is_valid = validation(this.charaInputValue.value, 
                                          isNotMoreThenHundred, 
                                          isNotLessThenZero, 
                                          isNotEmpty);

      if(name_is_valid){
        this.charaInputName.classList.remove = ' invalid';
      }else{
        this.charaInputName.classList.add = ' invalid';
      }

      if(value_is_valid){
        this.charaInputValue.classList.remove = ' invalid';
      }else{
        this.charaInputValue.classList.add = ' invalid';
      }

      if((name_is_valid)&&(value_is_valid)){
        this.props.onAddChara(this.charaInputName.value, this.charaInputValue.value);
        this.charaInputName.value = '';
        this.charaInputValue.value = '';
      }
    }
  }

  addCharaB(){
    let name_is_valid = validation(this.charaInputName.value, 
                                        isNotEmpty, 
                                        isNotContainNumbers, 
                                        isNotContainSpaces);
    let value_is_valid = validation(this.charaInputValue.value, 
                                        isNotMoreThenHundred, 
                                        isNotLessThenZero, 
                                        isNotEmpty);

    if(name_is_valid){
      this.charaInputName.classList.remove = ' invalid';
    }else{
      this.charaInputName.classList.add = ' invalid';
    }

    if(value_is_valid){
      this.charaInputValue.classList.remove = ' invalid';
    }else{
      this.charaInputValue.classList.add = ' invalid';
    }

    if((name_is_valid)&&(value_is_valid)){
      this.props.onAddChara(this.charaInputName.value, this.charaInputValue.value);
      this.charaInputName.value = '';
      this.charaInputValue.value = '';
    }
  }

  blurChara(index, event){

    let name_is_valid = validation(this.charaInputName.value, 
                                        isNotContainNumbers, 
                                        isNotContainSpaces);
    let value_is_valid = validation(this.charaInputValue.value, 
                                        isNotMoreThenHundred, 
                                        isNotLessThenZero);

    if(name_is_valid){
      this.charaInputName.classList.remove = ' invalid';
    }else{
      this.charaInputName.classList.add = ' invalid';
    }

    if(value_is_valid){
      this.charaInputValue.classList.remove = ' invalid';
    }else{
      this.charaInputValue.classList.add = ' invalid';
    }

  }

  changeInput(){
    let name_is_valid = validation(this.charaInputName.value,  
                                        isNotContainNumbers, 
                                        isNotContainSpaces);
    let value_is_valid = validation(this.charaInputValue.value, 
                                        isNotMoreThenHundred, 
                                        isNotLessThenZero);

    if(name_is_valid){
      this.charaInputName.classList.remove = ' invalid';
    }else{
      this.charaInputName.classList.add = ' invalid';
    }

    if(value_is_valid){
      this.charaInputValue.classList.remove = ' invalid';
    }else{
      this.charaInputValue.classList.add = ' invalid';
    }

  }

  editChara(index, event){
    if(event.key == 'Enter') {

      let name_is_valid = validation(this.charaItemName[index].value, 
                                          isNotEmpty, 
                                          isNotContainNumbers, 
                                          isNotContainSpaces);
      let value_is_valid = validation(this.charaItemValue[index].value, 
                                          isNotMoreThenHundred, 
                                          isNotLessThenZero, 
                                          isNotEmpty);

      if(name_is_valid){
        this.charaItemName[index].classList.remove = ' invalid';
      }else{
        this.charaItemName[index].classList.add = ' invalid';
      }

      if(value_is_valid){
        this.charaItemValue[index].classList.remove = ' invalid';
      }else{
        this.charaItemValue[index].classList.add = ' invalid';
      }

      if((name_is_valid)&&(value_is_valid)){
        this.props.onEditChara(this.charaItemName[index].value, this.charaItemValue[index].value, index);
      }

    }
  }

  changeChara(index, event){

      let name_is_valid = validation(this.charaItemName[index].value, 
                                          isNotEmpty, 
                                          isNotContainNumbers, 
                                          isNotContainSpaces);
      let value_is_valid = validation(this.charaItemValue[index].value, 
                                          isNotMoreThenHundred, 
                                          isNotLessThenZero, 
                                          isNotEmpty);

      if((name_is_valid)&&(value_is_valid)){
        this.props.onEditChara(this.charaItemName[index].value, this.charaItemValue[index].value, index);
      }

  }

  onMoveUpChara(index){
    this.props.onMoveUpChara(index);
  }

  onMoveDownChara(index){
    this.props.onMoveDownChara(index);
  }

  deleteChara(index){

    this.props.onDeleteChara(index);

  }


  render(){
    //console.log(this.props)
    return (
      <div>
        <svg width={this.width} height={this.height} ref={(svg)=>{}}>
          <g>
            getIndicators = (count, cx, cy, index, value)
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
                      fontFamily="Verdana" 
                      fontSize="16px" 
                      fontWeight="bold" 
                      stroke="#fff" 
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
        <ul className={style.chara_items}>
          {this.props.characters.map((chara, index)=>
            <li key={index} className={style.chara_item}>
              <button className={style.chara_up} onClick={this.onMoveUpChara.bind(this, index)} disabled={(index==0)? true : false}>^</button>
              <button className={style.chara_down} onClick={this.onMoveDownChara.bind(this, index)} disabled={(index==(this.props.characters.length-1))? true : false}>v</button>
              <input type="text" 
                        value={chara.name}
                        className={style.chara_name}
                        placeholder="Feature"
                        data-index={index} 
                        ref={(name)=>{this.charaItemName[index] = name;}} 
                        onKeyPress={this.editChara.bind(this, index)}
                        onChange={this.changeChara.bind(this, index)}/>
              <input type="number"
                        value={chara.value}
                        className={style.chara_value}
                        data-index={index} 
                        ref={(value)=>{this.charaItemValue[index] = value;}} 
                        onKeyPress={this.editChara.bind(this, index)}
                        onChange={this.changeChara.bind(this, index)}/>
              <button className={style.chara_del} onClick={this.deleteChara.bind(this, index)}>x</button>
            </li>
          )}
          <li className={style.chara_item}>
            <input type="text" 
              className={style.chara_add_name}
              ref={(input)=>{this.charaInputName = input}} 
              onKeyPress={this.addChara.bind(this)} 
              onBlur={this.blurChara.bind(this)}
              onChange={this.changeInput.bind(this)}/>
            <input type="number" max="100" 
              className={style.chara_add_value}
              ref={(input)=>{this.charaInputValue = input}} 
              onKeyPress={this.addChara.bind(this)} 
              onBlur={this.blurChara.bind(this)}
              onChange={this.changeInput.bind(this)}/>
            <button className={style.chara_add} onClick={this.addCharaB.bind(this)}>+</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    characters: state.characters
  }),
  dispatch => ({
    onAddChara: (charaInputName, charaInputValue) => {
      dispatch({type: 'ADD_CHARA', character_name: charaInputName, character_value: charaInputValue});
    },
    onEditChara: (charaName, charaValue, charaIndex) => {
      dispatch({type: 'EDIT_CHARA', character_name: charaName, character_value: charaValue, character_index: charaIndex});
    },
    onChangeChara: (charaName, charaValue, charaIndex) => {
      dispatch({type: 'CHANGE_CHARA', character_name: charaName, character_value: charaValue, character_index: charaIndex});
    },
    onDeleteChara: (charaIndex) => {
      dispatch({type: 'DELETE_CHARA', character_index: charaIndex});
    },
    onMoveUpChara: (charaIndex) =>{
      dispatch({type: 'MOVE_UP_CHARA', character_index: charaIndex});
    },
    onMoveDownChara: (charaIndex) =>{
      dispatch({type: 'MOVE_DOWN_CHARA', character_index: charaIndex});
    }
  })
)(App);