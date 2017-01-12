const initialState = [
	{name:'Love', value: 100},
	{name:'Anger', value: 0}
]


export default function characters (state = initialState, action) {
	if(action.type === 'ADD_CHARA'){
		return [
			...state, 
			{name:action.character_name, value:action.character_value}
		]
	}
	else if(action.type === 'EDIT_CHARA'){
		state[action.character_index].name = action.character_name;
		state[action.character_index].value = action.character_value;
		return state.slice(0);
	}
	else if(action.type === 'CHANGE_CHARA'){
		state[action.character_index].name = action.character_name;
		state[action.character_index].value = action.character_value;
		return state.slice(0);
	}
	else if(action.type === 'DELETE_CHARA'){
		state.splice(action.character_index,1)
		let newstate = state.slice(0);
		return newstate;
	}
	return state;
}