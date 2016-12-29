this.addEventListener('message', (e)=>{
	let map = e.data;

	console.log(e.data.length);
	let rows = [];
	// let render = map.reduce((rend, row)=>{
	// 	return rend.concat(row);
	// });
	// render = render.reduce((rend, tile)=>{
	// 	rend = ({
	// 		1:()=>tileStyle(rend),
	// 		0:()=>rend
	// 	}[+(typeof(rend)==='object')])();
	// 	return rend + tileStyle(tile);
	// });
	
	//console.dir(e.data);

	let wait_for_a_tiles = new Promise((resolve, reject)=>{

		resolve(tilesRunner(0, 0, e.data, rows));

		reject('bad');

	});
	wait_for_a_tiles.then((data)=>{
		console.log(data);
		console.log(rows);
		render = data;
		setTimeout(function () {
	    this.postMessage(render);
	  }, 3000);
		
	})


});

function tilesRunner(i=0, j=0,tiles, rows){
	let factor = 10;
	let current = 0;
	//console.log(1, i, j);

	array_check(tiles, 
		()=>{

			array_counter(0, i, tiles[i], rows);

			({
				0:()=>{},
				1:()=>{
					tilesRunner(++i, 0,tiles, rows);
				}
			}[+(tiles[i] != undefined)])()

		},
		()=>{
		}
	);

	console.log(rows);

	return rows;
  

}

function array_check(array, callback_true, callback_false){
	({
		1:()=>{
			callback_true();
		},
		0:()=>{
			callback_false();
		}
	}[+(Array.isArray(array))])();
}

function array_counter(i=0, j, array, rows){
	({
		1:()=>{
			rows.push(tileStyle(array[i], i, j));
			array_counter(++i, j, array, rows)
		},
		0:()=>{
		}
	}[+((array != undefined)&&(i<array.length))])();


	//return rows;

}

			//rows.push('<path d="M'+curent+' '+(factor+curent)+'	L'+((factor*2)+curent)+' '+((factor*2)+curent)+' L'+((factor*4)+curent)+' '+(factor+curent)+' L'+((factor*2)+curent)+' L'+(curent)+' Z" id="tile_'+tiles[i].id+'" fill="'+tileColor(tiles[i].type)+'"></path>');

function tileStyle(tile, x, y){
	const center = (320/2);
	const factor = 10;
	x = (x*factor);
	y = y*factor;
	return '<path d="M'+(x+x-y-y+center)+' '+(factor+x+y)+
								' L'+((factor*2)+x+x-y-y+center)+' '+((factor*2)+x+y)+
								' L'+((factor*4)+x+x-y-y+center)+' '+(factor+x+y)+
								' L'+((factor*2)+x+x-y-y+center)+' '+(x+y)+
								' Z" id="tile_'+tile.id+'" fill="'+tileColor(tile.type)+'" stroke="black"></path>';
}

function tileColor(type){
	return {
		'grass':'green',
		'water':'blue'
	}[type];
}

// need some program informater
function tileCenter(){

}