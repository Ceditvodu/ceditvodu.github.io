this.addEventListener('message', (e)=>{
	let map = e.data;
	let render = map.reduce((rend, row)=>{
		return rend.concat(row);
	});
	render = render.reduce((rend, tile)=>{
		rend = ({
			1:()=>tileStyle(rend),
			0:()=>rend
		}[+(typeof(rend)==='object')])();
		return rend + tileStyle(tile);
	});
	setTimeout(function () {
    this.postMessage(render);
  }, 3000);
	
});

function tileStyle(tile){
	return `
		<path d="M32 48 L64 32 L32 16 L0 32 Z" id="tile_`+tile.id+`" fill="`+tileColor(tile.type)+`"></path>
	`;
}

function tileColor(type){
	return {
		'grass':'green',
		'water':'blue'
	}[type];
}