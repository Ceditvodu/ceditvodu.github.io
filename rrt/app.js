import React, {Component} from 'react';
import {connect} from 'react-redux'; 
import ReactDOM from 'react-dom';


class App extends Component{

  constructor(props){
    super(props);
    this.charaItemName = new Array();
    this.charaItemValue = new Array();
    this.valueDefault = 0;

    this.validation = function (strip, ...validators) {

      return validators.reduce((a, b)=>{
        return a && b(strip);
      },true)
      
    }

    this.isNotEmpty = function(strip){
      if(strip != ""){
        return true;
      }else{
        return false;
      }
    }
    this.isNotContainNumbers = function(strip){
      if(!(/\d/.test(strip))){
        return true;
      }else{
        return false;
      }
    }
    this.isNotContainSpaces = function(strip){
      if(!(/\s/.test(strip))){
        return true;
      }else{
        return false;
      }
    }
    this.isNotMoreThenHundred = function(strip){
      if(strip <= 100){
        return true;
      }else{
        return false;
      }
    }
    this.isNotLessThenZero = function(strip){
      if(strip >= 0){
        return true;
      }else{
        return false;
      }
    }
  }

  addChara(event){
    if(event.key == 'Enter') { 

      let name_is_valid = this.validation(this.charaInputName.value, 
                                          this.isNotEmpty, 
                                          this.isNotContainNumbers, 
                                          this.isNotContainSpaces);
      let value_is_valid = this.validation(this.charaInputValue.value, 
                                          this.isNotMoreThenHundred, 
                                          this.isNotLessThenZero, 
                                          this.isNotEmpty);

      if(name_is_valid){
        this.charaInputName.className = '';
      }else{
        this.charaInputName.className = 'invalid';
      }

      if(value_is_valid){
        this.charaInputValue.className = '';
      }else{
        this.charaInputValue.className = 'invalid';
      }

      if((name_is_valid)&&(value_is_valid)){
        this.props.onAddChara(this.charaInputName.value, this.charaInputValue.value);
        this.charaInputName.value = '';
        this.charaInputValue.value = '';
      }
    }
  }

  addCharaB(){
    let name_is_valid = this.validation(this.charaInputName.value, 
                                        this.isNotEmpty, 
                                        this.isNotContainNumbers, 
                                        this.isNotContainSpaces);
    let value_is_valid = this.validation(this.charaInputValue.value, 
                                        this.isNotMoreThenHundred, 
                                        this.isNotLessThenZero, 
                                        this.isNotEmpty);

    if(name_is_valid){
      this.charaInputName.className = '';
    }else{
      this.charaInputName.className = 'invalid';
    }

    if(value_is_valid){
      this.charaInputValue.className = '';
    }else{
      this.charaInputValue.className = 'invalid';
    }

    if((name_is_valid)&&(value_is_valid)){
      this.props.onAddChara(this.charaInputName.value, this.charaInputValue.value);
      this.charaInputName.value = '';
      this.charaInputValue.value = '';
    }
  }

  blurChara(index, event){

    let name_is_valid = this.validation(this.charaInputName.value, 
                                        this.isNotContainNumbers, 
                                        this.isNotContainSpaces);
    let value_is_valid = this.validation(this.charaInputValue.value, 
                                        this.isNotMoreThenHundred, 
                                        this.isNotLessThenZero);

    if(name_is_valid){
      this.charaInputName.className = '';
    }else{
      this.charaInputName.className = 'invalid';
    }

    if(value_is_valid){
      this.charaInputValue.className = '';
    }else{
      this.charaInputValue.className = 'invalid';
    }

  }

  changeInput(){
    let name_is_valid = this.validation(this.charaInputName.value,  
                                        this.isNotContainNumbers, 
                                        this.isNotContainSpaces);
    let value_is_valid = this.validation(this.charaInputValue.value, 
                                        this.isNotMoreThenHundred, 
                                        this.isNotLessThenZero);

    if(name_is_valid){
      this.charaInputName.className = '';
    }else{
      this.charaInputName.className = 'invalid';
    }

    if(value_is_valid){
      this.charaInputValue.className = '';
    }else{
      this.charaInputValue.className = 'invalid';
    }

  }

  editChara(index, event){
    if(event.key == 'Enter') {

      let name_is_valid = this.validation(this.charaItemName[index].value, 
                                          this.isNotEmpty, 
                                          this.isNotContainNumbers, 
                                          this.isNotContainSpaces);
      let value_is_valid = this.validation(this.charaItemValue[index].value, 
                                          this.isNotMoreThenHundred, 
                                          this.isNotLessThenZero, 
                                          this.isNotEmpty);

      if(name_is_valid){
        this.charaItemName[index].className = '';
      }else{
        this.charaItemName[index].className = 'invalid';
      }

      if(value_is_valid){
        this.charaItemValue[index].className = '';
      }else{
        this.charaItemValue[index].className = 'invalid';
      }

      if((name_is_valid)&&(value_is_valid)){
        this.props.onEditChara(this.charaItemName[index].value, this.charaItemValue[index].value, index);
      }

    }
  }

  changeChara(index, event){

      let name_is_valid = this.validation(this.charaItemName[index].value, 
                                          this.isNotEmpty, 
                                          this.isNotContainNumbers, 
                                          this.isNotContainSpaces);
      let value_is_valid = this.validation(this.charaItemValue[index].value, 
                                          this.isNotMoreThenHundred, 
                                          this.isNotLessThenZero, 
                                          this.isNotEmpty);

      // if(name_is_valid){
      //   this.charaItemName[index].className = '';
      // }else{
      //   this.charaItemName[index].className = 'invalid';
      // }

      // if(value_is_valid){
      //   this.charaItemValue[index].className = '';
      // }else{
      //   this.charaItemValue[index].className = 'invalid';
      // }

      if((name_is_valid)&&(value_is_valid)){
        this.props.onEditChara(this.charaItemName[index].value, this.charaItemValue[index].value, index);
      }

  }

  deleteChara(index){

    this.props.onDeleteChara(index);

  }


  render(){
    //console.log(this.props)
    return (
      <div>
        <ul>
          {this.props.characters.map((chara, index)=>
            <li key={index}>
              <input type="text" 
                        value={chara.name}
                        placeholder="Feature"
                        data-index={index} 
                        ref={(name)=>{this.charaItemName[index] = name;}} 
                        onKeyPress={this.editChara.bind(this, index)}
                        onChange={this.changeChara.bind(this, index)}/>
              <input type="number"
                        value={chara.value}
                        data-index={index} 
                        ref={(value)=>{this.charaItemValue[index] = value;}} 
                        onKeyPress={this.editChara.bind(this, index)}
                        onChange={this.changeChara.bind(this, index)}/>
              <button onClick={this.deleteChara.bind(this, index)}>x</button>
            </li>
          )}
          <li>
            <input type="text" 
              ref={(input)=>{this.charaInputName = input}} 
              onKeyPress={this.addChara.bind(this)} 
              onBlur={this.blurChara.bind(this)}
              onChange={this.changeInput.bind(this)}/>
            <input type="number" max="100" 
              ref={(input)=>{this.charaInputValue = input}} 
              onKeyPress={this.addChara.bind(this)} 
              onBlur={this.blurChara.bind(this)}
              onChange={this.changeInput.bind(this)}/>
            <button onClick={this.addCharaB.bind(this)}>+</button>
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
    }
  })
)(App);