const reducer = (state = {}, action) => {
  const { name, price, weight, origin, roast, id } = action;
  switch (action.type) {
    case 'ADD_COFFEE':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          price: price,
          weight: weight,
          origin: origin,
          roast: roast,
          id: id
        }
      });
    case 'DELETE_COFFEE':
      let newState = { ...state };
      delete newState[id];
      return newState;

    case 'BUY_COFFEE':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          price: price,
          weight: weight,
          origin: origin,
          roast: roast,
          id: id
        }
      });

  default:
    return state;
      }
};

  export default reducer;