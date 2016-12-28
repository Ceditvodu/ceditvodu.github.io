this.addEventListener('message', (e)=>{
	let map = e.data;
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
	tiles_e = [
		[{id:"1"},{id:"11"}],
		[{id:"2"},{id:"21"}],
		[{id:"3"},{id:"31"}],
	]
	tilesRunner(0, 0, tiles_e, rows);
	render = e.data;
	setTimeout(function () {
    this.postMessage(render);
  }, 3000);
	
});

function tilesRunner(i=0, j=0,tiles, rows){
	let factor = 16;
	let curent = 0;
	//console.log(1, i, j);

	array_check(tiles, 
		()=>{
			console.log(tiles);

			setTimeout(function () {
		    tilesRunner(i, j,tiles[i], rows);
		  }, 3000);
		},
		()=>{
			console.log(this);

			i++;

			// setTimeout(function () {
		 //    tilesRunner(++i, j,tiles, rows);
		 //  }, 3000);
			
		}
	);

	//console.log(rows);
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
	}[+(Array.isArray(array))])()
}

function array_counter(array, callback_true, callback_true){
	({
		1:()=>{
			callback_true();
		},
		0:()=>{
			callback_false();
		}
	}[+(Array.isArray(array))])()
}

			//rows.push('<path d="M'+curent+' '+(factor+curent)+'	L'+((factor*2)+curent)+' '+((factor*2)+curent)+' L'+((factor*4)+curent)+' '+(factor+curent)+' L'+((factor*2)+curent)+' L'+(curent)+' Z" id="tile_'+tiles[i].id+'" fill="'+tileColor(tiles[i].type)+'"></path>');

function tileStyle(tile){
	return `
		<path d="M0 16 L32 32 L64 16 L32 0 Z" id="tile_`+tile.id+`" fill="`+tileColor(tile.type)+`"></path>
	`;
}

function tileColor(type){
	return {
		'grass':'green',
		'water':'blue'
	}[type];
}

function tileCenter(){

}