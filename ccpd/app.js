
var database = {
	id: "colors",
	description: "The database for the colors",
	migrations : [
		{
			version: "1.0",
			before: function(next) {
			    next();
			}
			migrate: function(transaction, next) {
				var store = transaction.db.createObjectStore("colors"); 
				next();
			}
		}, {
			version: "1.1",
			migrate: function(transaction, next) {
				var store = transaction.db.objectStore("colors")
				store.createIndex("codeIndex", "code", { unique: false});  
				store.createIndex("coordIndex", "coord", { unique: false}); 
				next();
			}
		}
	]
}

$(function(){

	var Color = Backbone.Model.extend({
    database: database,
    storeName: "colors"
	});

	var Colors = Backbone.Collection.extend({
		model: Color,
		url: "#"
	});


	var colors = new Colors([
		{code: [255, 255, 255], coord: [1,2,3,4,5,6,7]},
		{code: [255, 255, 0], coord: [1,2,3,4,5,6,7]},
		{code: [255, 0, 0], coord: [1,2,3,4,5,6,7]},
		{code: [0, 255, 255], coord: [1,2,3,4,5,6,7]},
	]);

	// colors.store.

	colors.each(function(model){
		model.save();
		
	});
	colors.each(function(model){
		// console.log(model);
	});
	function destroy(coll){

		try{
			colors.last().destroy({
				success: function(){
					destroy(coll);
				}
			})
		}catch(e){
			console.log(coll);
			colors.first().destroy();
		}
	}
	destroy(colors);
	
})

// db.executeSql('DROP TABLE colors'); 
