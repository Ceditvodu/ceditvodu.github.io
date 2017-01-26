export function validation (strip, ...validators) {

  return validators.reduce((a, b)=>{
    return a && b(strip);
  },true)
  
}

export function isNotEmpty(strip){
  if(strip != ""){
    return true;
  }else{
    return false;
  }
}
export function isNotContainNumbers(strip){
  if(!(/\d/.test(strip))){
    return true;
  }else{
    return false;
  }
}
export function isNotContainSpaces(strip){
  if(!(/\s/.test(strip))){
    return true;
  }else{
    return false;
  }
}
export function isNotMoreThenHundred(strip){
  if(strip <= 100){
    return true;
  }else{
    return false;
  }
}
export function isNotLessThenZero(strip){
  if(strip >= 0){
    return true;
  }else{
    return false;
  }
}