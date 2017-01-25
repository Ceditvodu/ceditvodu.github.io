import React, {Component} from 'react';
import {connect} from 'react-redux'; 
import ReactDOM from 'react-dom';


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

    this.getValuePosition = (cx, value) => {
      return ((cx-80)-(((cx-80) * value)/100));

    }

    this.getIndicators = (count, cx, cy, index, value)=>{
      let pos = 0;
      if(value != undefined){
        pos = this.getValuePosition(cx,value);
        console.log(pos);
      }

      if(count==1){
        return [
          {
            x: (0+cx),
            y: 20+pos
          }
        ]
      }else if(count==2){
        return [
          {
            x: (0+cx),
            y: 20+pos
          },
          {
            x: (0+cx),
            y: (cy*2-20-pos)
          }
        ]
      }else{
        let points = [];
        var current_x = cx;
        var current_y = 20+pos;
        let as_sum = 180*(count-2);
        let a = as_sum/count;
        let cg_a = a/2;
        let cc_a = (180 - (cg_a*2))*index;
        cc_a = cc_a*Math.PI/180;
        let cos_a = ((Math.cos(cc_a)));
        let sin_a = ((Math.sin(cc_a)));

        points.push({
          x: current_x,
          y: current_y
        });

        var c_x = current_x;
        var c_y = current_y;

        current_x = ((c_x-cx)*cos_a)-((c_y-cy)*sin_a)+cx;
        current_y = ((c_x-cx)*sin_a)+((c_y-cy)*cos_a)+cy; 

        // console.log(points);


        return {
          x: current_x,
          y: current_y
        };

      }
    }

    this.getPoints = (count, cx, cy)=>{

      if(count==1){
        return [
          {
            x: (0+cx),
            y: 20
          }
        ]
      }else if(count==2){
        return [
          {
            x: (0+cx),
            y: 20
          },
          {
            x: (0+cx),
            y: (cy*2-20)
          }
        ]
      }else{
        let points = [];
        var current_x = cx;
        var current_y = 20;
        let as_sum = 180*(count-2);
        let a = as_sum/count;
        let cg_a = a/2;
        let cc_a = 180 - (cg_a*2);
        cc_a = cc_a*Math.PI/180;
        let cos_a = (Math.cos(cc_a));
        let sin_a = (Math.sin(cc_a));

        for(var i=0; i<count; i++){
          points.push({
            x: current_x,
            y: current_y
          });

          // current_x = cx + vec_x * cos_a - vec_y * sin_a;
          // current_y = cy + vec_x * sin_a - vec_y * cos_a;

          var c_x = current_x;
          var c_y = current_y;

// X = x0 + (x - x0) * cos(a) - (y - y0) * sin(a);
// Y = y0 + (y - y0) * cos(a) + (x - x0) * sin(a);

          current_x = ((c_x-cx)*cos_a)-((c_y-cy)*sin_a)+cx;
          current_y = ((c_x-cx)*sin_a)+((c_y-cy)*cos_a)+cy; 

        }


        return points;

      }

    }

    this.getAnchor = (width, x)=>{
      if(x<width){
        return "end";
      }else if(x>width){
        return "start";
      }else{
        return "middle";
      }
    }

    this.getBaseline = (height, y)=>{
      if(y<height){
        return "baseline";
      }else if(y>height){
        return "hanging";
      }else{
        return "middle";
      }
    }




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
            this.getIndicators = (count, cx, cy, index, value)
            <path d={
              this.props.characters.reduce((prev, chara, index)=>{
                  let polygon = "M8 48 L56 48 L32 12 Z";
                  // console.log(this.props.characters.length, index);
                  if(index == 0){
                    return prev+"M "+this.getIndicators(this.props.characters.length, this.width/2, this.height/2, index, chara.value).x
                              +" "+this.getIndicators(this.props.characters.length, this.width/2, this.height/2, index, chara.value).y
                              +" ";
                  }else if(index == (this.props.characters.length-1)){
                    return prev+"L "+this.getIndicators(this.props.characters.length, this.width/2, this.height/2, index, chara.value).x
                              +" "+this.getIndicators(this.props.characters.length, this.width/2, this.height/2, index, chara.value).y
                              +" Z";
                  }else{
                    return prev+"L "+this.getIndicators(this.props.characters.length, this.width/2, this.height/2, index, chara.value).x
                              +" "+this.getIndicators(this.props.characters.length, this.width/2, this.height/2, index, chara.value).y
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
                    return prev+"M "+this.getPoints(this.props.characters.length, this.width/2, this.height/2)[index].x
                              +" "+this.getPoints(this.props.characters.length, this.width/2, this.height/2)[index].y
                              +" ";
                  }else if(index == (this.props.characters.length-1)){
                    return prev+"L "+this.getPoints(this.props.characters.length, this.width/2, this.height/2)[index].x
                              +" "+this.getPoints(this.props.characters.length, this.width/2, this.height/2)[index].y
                              +" Z";
                  }else{
                    return prev+"L "+this.getPoints(this.props.characters.length, this.width/2, this.height/2)[index].x
                              +" "+this.getPoints(this.props.characters.length, this.width/2, this.height/2)[index].y
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
                    x2={this.getPoints(this.props.characters.length, this.width/2, this.height/2)[index].x}
                    y2={this.getPoints(this.props.characters.length, this.width/2, this.height/2)[index].y} 
                    style={{stroke:"rgba(100,0,100,1)"}}></line>
            )}
          </g>
          {this.props.characters.map((chara, index)=>
            <g key={index}>
              <circle cx={this.getIndicators(this.props.characters.length, this.width/2, this.height/2, index, chara.value).x} 
                      cy={this.getIndicators(this.props.characters.length, this.width/2, this.height/2, index, chara.value).y} 
                      r="2" stroke="green" strokeWidth="1" fill="blue" />
            </g>
            )
          }
          {this.props.characters.map((chara, index)=>{
              let x = this.getIndicators(this.props.characters.length, this.width/2, this.height/2, index, "100").x;
              let y = this.getIndicators(this.props.characters.length, this.width/2, this.height/2, index, "100").y;
                return <g key={index} >
                    <text 
                      x={x} 
                      y={y} 
                      fontFamily="Verdana" 
                      fontSize="16px" 
                      fontWeight="bold" 
                      stroke="#fff" 
                      strokeWidth="0.5" 
                      textAnchor={this.getAnchor(this.width/2,x)} 
                      alignmentBaseline={this.getBaseline(this.height/2,y)} 
                      > 
                      {chara.name}
                    </text>
                  </g>
              }
            
            )
          }
          {this.props.characters.map((chara, index)=>
            <g key={index}>
              <circle cx={this.getPoints(this.props.characters.length, this.width/2, this.height/2)[index].x} 
                      cy={this.getPoints(this.props.characters.length, this.width/2, this.height/2)[index].y} 
                      r="2" stroke="green" strokeWidth="1" fill="yellow" />
            </g>
            )
          }
          <g>
            <circle cx={this.width/2} cy={this.height/2}  r="5" stroke="green" strokeWidth="1" fill="black" />
          </g>
        </svg>
        <ul>
          {this.props.characters.map((chara, index)=>
            <li key={index}>
              <button onClick={this.onMoveUpChara.bind(this, index)} disabled={(index==0)? true : false}>^</button>
              <button onClick={this.onMoveDownChara.bind(this, index)} disabled={(index==(this.props.characters.length-1))? true : false}>v</button>
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
    },
    onMoveUpChara: (charaIndex) =>{
      dispatch({type: 'MOVE_UP_CHARA', character_index: charaIndex});
    },
    onMoveDownChara: (charaIndex) =>{
      dispatch({type: 'MOVE_DOWN_CHARA', character_index: charaIndex});
    }
  })
)(App);