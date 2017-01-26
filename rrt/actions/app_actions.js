export const ADD_CHAR = 'ADD_CHAR';

export function addChar (char_name) {
	return {
		type: ADD_CHAR,
		char_name
	}
}