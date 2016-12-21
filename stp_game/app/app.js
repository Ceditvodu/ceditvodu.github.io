window.onload = () => {
	let name_of_container = 'main';
	container = document.getElementById(name_of_container);
	console.dir(container);
	({
		1:()=>{	programStart(name_of_container);}
	}[+(container!=null)])();
}

function programStart (container) {
	let program_cont = document.getElementById(container);

	var land = [
		[
			{
				"id": 1,
				"type":"grass",
			},
			{
				"id": 2,
				"type":"grass1"
			}
		],	
		[
			{
				"id": 3,
				"type":"grass"
			},
			{
				"id": 4,
				"type":"grass1"
			}
		],
		[
			{
				"id": 5,
				"type":"grass2"
			},
			{
				"id": 6,
				"type":"grass3"
			}
		]
	]

	let collector = new Worker("app/assets/collector.js");
	collector.onmessage = (e) => {
		console.dir(e.data);
	}

	let section_gen = new Worker("app/view/section_gen.js");
	section_gen.postMessage('make');
	section_gen.onmessage = (e) => {
		program_cont.innerHTML = e.data;

		collector.postMessage({
			'module':'section_gen',
			'action':'add'
		});
	}

	let land_constr = new Worker("app/view/land_constr.js");
	land_constr.postMessage(land);
	land_constr.onmessage = (e) => {
		let ground = document.getElementById('ground');
		ground.innerHTML = e.data;

		collector.postMessage({
			'module':'lond_constr',
			'action':'add'
		});
	}
}

