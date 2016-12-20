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
var land_constr = new Worker("land_constr.js");
land_constr.build(land);