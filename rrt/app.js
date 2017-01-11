import React, {Component} from 'react';
import {connect} from 'react-redux'; 
import ReactDOM from 'react-dom';


class App extends Component{

  constructor(props){
    super(props);
    this.charaItemName = new Array();
    this.charaItemValue = new Array();

    this.validation = function (strip, ...validators) {
      validators.map(function (element) {

        return element(strip);
      });
      
    }

    this.isNotEmpty = function(strip){
      if(strip != ""){
        return true;
      }else{
        return false;
      }
    }
    this.isNotEmpty = function(strip){
      if(strip != ""){
        return true;
      }else{
        return false;
      }
    }
  }

  addChara(event){
    if(event.key == 'Enter') { 
      this.props.onAddChara(this.charaInputName.value, this.charaInputValue.value);
      this.charaInputName.value = '';
      this.charaInputValue.value = '';
    }
  }
  addCharaB(){
    this.props.onAddChara(this.charaInputName.value,this.charaInputValue.value);
    this.charaInputName.value = '';
    this.charaInputValue.value = '';
  }

  editChara(index, event){
    if(event.key == 'Enter') {
      this.props.onEditChara(this.charaItemName[index].value, this.charaItemValue[index].value, index);
    }
  }

  changeChara(index, event){
    this.props.onChangeChara(this.charaItemName[index].value, this.charaItemValue[index].value, index);
  }

  deleteChara(index){
    this.props.onDeleteChara(index);
  }

  render(){
    console.log(this.props)
    return (
      <div>
        <ul>
          {this.props.characters.map((chara, index)=>
            <li key={index}>
              <input type="text" 
                        value={chara.name}
                        data-index={index} 
                        ref={(name)=>{console.log(name);this.charaItemName[index] = name;}} 
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
            <input type="text" ref={(input)=>{this.charaInputName = input}} onKeyPress={this.addChara.bind(this)} />
            <input type="number" max="100" ref={(input)=>{this.charaInputValue = input}} onKeyPress={this.addChara.bind(this)} />
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