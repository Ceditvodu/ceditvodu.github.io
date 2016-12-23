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
	
	console.dir(e.data);
	tilesRunner(0, 0, e.data, rows);
	render = e.data;
	setTimeout(function () {
    this.postMessage(render);
  }, 3000);
	
});

function tilesRunner(i=0, j=0,tiles, rows){
	let factor = 16;
	let curent = 0;
	//console.log(1, i, j);

	({
		1:()=>{
			({
				1:()=>{
					tilesRunner(i++, j=0, tiles[i], rows);
					console.log(tiles[i], tiles.length, i);
					//console.log(2, i, j);
				},
				0:()=>{
					//console.log(3, i, j);
				}
			}[+((i) < tiles.length)])();
		},

		0:()=>{
			rows.push('<path d="M'+curent+' '+(factor+curent)+'	L'+((factor*2)+curent)+' '+((factor*2)+curent)+' L'+((factor*4)+curent)+' '+(factor+curent)+' L'+((factor*2)+curent)+' L'+(curent)+' Z" id="tile_'+tiles[i].id+'" fill="'+tileColor(tiles[i].type)+'"></path>');
			//console.log(4, i, j);

			({
				1:()=>{
					curent++;
					//console.log(tiles[j]);
					//console.log(5, i, j);
					tilesRunner(i,j++, tiles, rows);
				},
				0:()=>{
					//console.log(6, i, j);
				}
			}[+((j) < tiles.length)])();

		}
	}[+(tiles[i].id == null )])();

	console.log(rows);
	return rows;
}

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