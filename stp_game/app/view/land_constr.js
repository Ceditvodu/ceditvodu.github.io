this.addEventListener('message', (e)=>{
	let map = e.data;

	console.log(e.data.length);

	let canvas_info = {
		'tiles_count':{
			'rows':0,
			'cols':0
		},
		'width':'320',
		'height':'320'
	}
	canvas_info.tiles_count = getCanvasInfo(e.data);

	let rows = [];

	let wait_for_a_tiles = new Promise((resolve, reject)=>{

		resolve(tilesRunner(0, 0, e.data, rows, canvas_info));

		reject('bad');

	});
	wait_for_a_tiles.then((data)=>{
		//console.log(data);
		//console.log(rows);
		render = data;
		setTimeout(function () {
	    this.postMessage(render);
	  }, 3000);
		
	})


});

function tilesRunner(i=0, j=0,tiles, rows, canvas_info){
	let factor = 10;
	let current = 0;

	array_check(tiles, 
		()=>{

			array_counter(0, i, tiles[i], rows, canvas_info);

			({
				0:()=>{},
				1:()=>{
					tilesRunner(++i, 0,tiles, rows, canvas_info);
				}
			}[+(tiles[i] != undefined)])()

		},
		()=>{
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
	}[+(Array.isArray(array))])();
}

function array_counter(i=0, j, array, rows, canvas_info){
	({
		1:()=>{
			rows.push(tileStyle(array[i], i, j, canvas_info));
			array_counter(++i, j, array, rows, canvas_info)
		},
		0:()=>{
		}
	}[+((array != undefined)&&(i<array.length))])();

	//return rows;

}

function getCanvasInfo(map){
	const rows = map.length;
	let newMap = map.slice(0);
	newMap = newMap.sort((a,b)=>{
		return (a.length > b.length) ? -1 : (a.length < b.length) ? 1 : 0;
	})
	const columns = newMap[0].length;

	return {
		'rows':rows,
		'cols':columns
	}
}

function tileStyle(tile, x, y, canvas_info){
	const factor = 10;
	const offsets = tileCenter(canvas_info, factor)
	const offset_x = offsets.offset_x;
	const offset_y = offsets.offset_y;

	x = (x*factor);
	y = y*factor;
	return '<path d="M'+(x+x-y-y+offset_x)+' '+(factor+x+y+offset_y)+
								' L'+((factor*2)+x+x-y-y+offset_x)+' '+((factor*2)+x+y+offset_y)+
								' L'+((factor*4)+x+x-y-y+offset_x)+' '+(factor+x+y+offset_y)+
								' L'+((factor*2)+x+x-y-y+offset_x)+' '+(x+y+offset_y)+
								' Z" id="tile_'+tile.id+'" fill="'+tileColor(tile.type)+'" stroke="black"></path>';
}

function tileColor(type){
	return {
		'grass':'green',
		'water':'blue'
	}[type];
}

// need some program informater
function tileCenter(canvas_info, tiles_factor){
	let rows = canvas_info.tiles_count.rows;
	let cols = canvas_info.tiles_count.cols;
	let width = canvas_info.width;
	let height = canvas_info.height;

	let tile_box_width = ((rows*tiles_factor*2) + (cols*tiles_factor*2));
	let tile_box_offset_x = (width - tile_box_width)/2;
	let offset_x = ((rows*tiles_factor*2) + tile_box_offset_x) - (tiles_factor*2);

	let tile_box_height = ((rows*tiles_factor) + (cols*tiles_factor));
	let offset_y = (height - tile_box_height)/2;

	console.log({
		offset_x,
		offset_y
	})

	return {
		offset_x,
		offset_y
	}
}