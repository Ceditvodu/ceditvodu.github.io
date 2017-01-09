import React, {Component} from 'react';
import {connect} from 'react-redux'; 

class App extends Component{

  // addChara(event){
  //   console.log(event.target.eventPhase)
  //   this.props.onAddChara(this.charaInput.value);
  //   this.charaInput.value = '';
  // }
  addChara(event){
    if(event.key == 'Enter') { 
      this.props.onAddChara(this.charaInput.value);
      this.charaInput.value = '';
    } 
  }

  editChara(index,event){
    if(event.key == 'Enter') {
      this.props.onEditChara(event.target.value, index);
    }
  }

  changeChara(index,event){
    this.props.onChangeChara(event.target.value, index);
  }

  render(){
    console.log(this.props.testStore)
    return (
      <div>
        <ul>
          {this.props.testStore.map((chara, index)=>
            <li key={index}><input type="text" 
                        value={chara}
                        data-index={index} 
                        ref={(input)=>{ console.log(input); this.charaItem = input;}} 
                        onKeyPress={this.editChara.bind(this, index)}
                        onChange={this.changeChara.bind(this, index)}/>
            </li>
          )}
          <li><input type="text" ref={(input)=>{this.charaInput = input}} onKeyPress={this.addChara.bind(this)} /></li>
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    onAddChara: (charaName) => {
      dispatch({type: 'ADD_CHARA', character_name: charaName});
    },
    onEditChara: (charaName, charaIndex) => {
      dispatch({type: 'EDIT_CHARA', character_name: charaName, character_index: charaIndex});
    },
    onChangeChara: (charaName, charaIndex) => {
      dispatch({type: 'CHANGE_CHARA', character_name: charaName, character_index: charaIndex});
    }
  })
)(App);