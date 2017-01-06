export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        text: "cool"
      }
    case 'DELETE':
      return {
        text: "not cool"
      }
    default:
      return state
  }
}