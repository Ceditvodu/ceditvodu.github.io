import React, {Component} from 'react';
import {connect} from 'react-redux'; 
import ReactDOM from 'react-dom';
import {validation, 
        isNotEmpty, 
        isNotContainNumbers, 
        isNotContainSpaces, 
        isNotMoreThenHundred, 
        isNotLessThenZero} from '../lib/validation.js';

import style from '../styles/inputs.css';

class Controls extends Component{

  constructor(props){
    super(props);
    this.charaItemName = new Array();
    this.charaItemValue = new Array();
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
        this.charaInputName.className = style.chara_add_name;
      }else{
        this.charaInputName.className = [style.chara_add_name, style.chara_invalid].join(" ");
      }

      if(value_is_valid){
        this.charaInputValue.className = style.chara_add_value;
      }else{
        this.charaInputName.className = [style.chara_add_name, style.chara_invalid].join(" ");
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
      this.charaInputName.className = style.chara_add_name;
    }else{
      this.charaInputName.className = [style.chara_add_name, style.chara_invalid].join(" ");
    }

    if(value_is_valid){
      this.charaInputValue.className = style.chara_add_value;
    }else{
      this.charaInputName.className = [style.chara_add_name, style.chara_invalid].join(" ");
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
      this.charaInputName.className = style.chara_add_name;
    }else{
      this.charaInputName.className = [style.chara_add_name, style.chara_invalid].join(" ");
    }

    if(value_is_valid){
      this.charaInputValue.className = style.chara_add_value;
    }else{
      this.charaInputName.className = [style.chara_add_name, style.chara_invalid].join(" ");
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
      this.charaInputName.className = style.chara_add_name;
    }else{
      this.charaInputName.className = [style.chara_add_name, style.chara_invalid].join(" ");
    }

    if(value_is_valid){
      this.charaInputValue.className = style.chara_add_value;
    }else{
      this.charaInputValue.className = [style.chara_add_value, style.chara_invalid].join(" ");
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
  	return(
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
)(Controls);