var land = [
	[
		{
			"type":"grass"
		},
		{
			"type":"grass"
		}
	],
	[
		{
			"type":"grass"
		},
		{
			"type":"grass"
		}
	]
]
var land_constr = new Worker("view/land_constr.js");
land_constr.postBuild(land);