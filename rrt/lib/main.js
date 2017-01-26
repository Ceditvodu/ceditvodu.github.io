export function getValuePosition(cx, value) {
  return ((cx-80)-(((cx-80) * value)/100));
}

export function getIndicators(count, cx, cy, index, value){
  let pos = 0;
  if(value != undefined){
    pos = getValuePosition(cx,value);
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

export function getPoints(count, cx, cy){
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

export function getAnchor(width, x){
  if(x<width){
    return "end";
  }else if(x>width){
    return "start";
  }else{
    return "middle";
  }
}

export function getBaseline(height, y){
  if(y<height){
    return "baseline";
  }else if(y>height){
    return "hanging";
  }else{
    return "middle";
  }
}