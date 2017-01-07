//import { add_char } from './actions'

export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD':
      return Object.assign ({}, state, {
                text: action.text
            });
    case 'DELETE':
      return Object.assign ({}, state, {
                text: action.text
            });
    default:
      return state
  }
}