this.module_collection = {
	'status':false,
	'collection': []
};

let collector_action = {
	'add': (collection, data) => {
		collection.push(data);
	}
} 
this.addEventListener('message', (e)=>{
	let new_module = e.data;
	collector_action[e.data.action](this.module_collection.collection, e.data.module);

	setTimeout(function () {
    this.postMessage(this.module_collection);
  }, 3000);
});