window.onload = () => {
	let name_of_container = 'main';
	container = document.getElementById(name_of_container);
	({
		1:()=>{	programStart(name_of_container);}
	}[+(container!=null)])();
}

// Place where progrmm innit 

function programStart (container) {
	let program_cont = document.getElementById(container);

	// collector it is entity that helps to keep records 
	// of loading resources
	let collector = new Worker("app/assets/collector.js");
	collector.onmessage = (e) => {
		//console.dir(e.data);
	}

	let section_runner = {
		sections:[
			{
				'callback': landConstrStart,
				'args':{
					'map':[
						[
							{
								"id": 1,
								"type":"grass",
							},
							{
								"id": 2,
								"type":"grass"
							},
							{
								"id": 2,
								"type":"grass"
							},
							{
								"id": 2,
								"type":"grass"
							},
							{
								"id": 3,
								"type":"grass"
							}
						],	
						[
							{
								"id": 4,
								"type":"grass"
							},
							{
								"id": 4,
								"type":"grass"
							},
							{
								"id": 4,
								"type":"grass"
							},
							{
								"id": 4,
								"type":"grass"
							},
							{
								"id": 5,
								"type":"grass"
							}
						],
						[
							{
								"id": 4,
								"type":"grass"
							},
							{
								"id": 4,
								"type":"grass"
							},
							{
								"id": 4,
								"type":"grass"
							},
							{
								"id": 4,
								"type":"grass"
							},
							{
								"id": 5,
								"type":"grass"
							}
						],
						[
							{
								"id": 4,
								"type":"grass"
							},
							{
								"id": 4,
								"type":"grass"
							},
							{
								"id": 5,
								"type":"grass"
							}
						],
						[
							{
								"id": 4,
								"type":"grass"
							},
							{
								"id": 4,
								"type":"grass"
							},
							{
								"id": 5,
								"type":"grass"
							}
						],
						[
							{
								"id": 4,
								"type":"grass"
							},
							{
								"id": 4,
								"type":"grass"
							},
							{
								"id": 5,
								"type":"grass"
							}
						],
						[
							{
								"id": 6,
								"type":"grass"
							},
							{
								"id": 6,
								"type":"grass"
							},
							{
								"id": 6,
								"type":"grass"
							},
							{
								"id": 6,
								"type":"grass"
							},
							{
								"id": 7,
								"type":"grass"
							}
						]
					]
				}
			},
			{
				'callback': sayHello,
				'args':{
					'map':['a']	
				}
			}
		],
		run: function(i = 0, callback){
			this.sections[i]['callback'](this.sections[i].args, callback);
			({
				1:()=>{this.run(++i)},
				0:()=>{}
			}[+(i<this.sections.length-1)])();
		},
		getInfo: ()=>{

		}
	}

	sectionGenStart(section_runner, program_cont, collector);

	
	function sectionGenStart (callbacks, container, collectors_entity) {
		let section_gen = new Worker("app/view/section_gen.js");
		section_gen.postMessage('make');
		section_gen.onmessage = (e) => {
			container.innerHTML = e.data;

			collectors_entity.postMessage({
				'module':'section_gen',
				'action':'add'
			});
			
			callbacks.run(0, collectors_entity);
		}

	}

	function landConstrStart(callback_args, collectors_entity){
		let land_constr = new Worker("app/view/land_constr.js");
		land_constr.postMessage(callback_args.map);
		land_constr.onmessage = (e) => {
			let ground = document.getElementById('ground');
			console.log(e.data.join(''));
			ground.innerHTML = e.data.join('');

			collectors_entity.postMessage({
				'module':'lond_constr',
				'action':'add'
			});
		}	
	}

	function sayHello(callback_args){
	}
}




