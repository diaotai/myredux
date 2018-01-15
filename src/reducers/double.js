export default (state = 1, action) => {
  switch (action.type) {
    case 'DOUBLE':
      return state * 2
    case "HALF":
      return state/2;
    default:
      return state
  }
}
