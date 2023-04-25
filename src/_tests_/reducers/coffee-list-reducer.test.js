import coffeeListReducer from '../../reducers/coffee-list-reducer';

describe('coffeeListReducer', () => {

  let action;
  const coffeeData = {
    name: 'Coffee1',
    price: 5,
    weight: 130,
    origin: 'Brazil',
    roast: 'light',
    id: 1
  };

  const currentState = {
    1: {
      name: 'Coffee1',
      price: 5,
      weight: 130,
      origin: 'Brazil',
      roast: 'light',
      id: 1
    }, 2: {
      name: 'Coffee2',
      price: 3,
      weight: 130,
      origin: 'Maui',
      roast: 'dark',
      id: 2
    }
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(coffeeListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new coffee data to mainCoffeeList', () => {
    const { name, price, weight, origin, roast, id } = coffeeData;
    action = {
      type: 'ADD_COFFEE',
      name: name,
      price: price,
      weight: weight,
      origin: origin,
      roast: roast,
      id: id
    };

    expect(coffeeListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        price: price,
        weight: weight,
        origin: origin,
        roast: roast,
        id: id
      }
    });
  });

  test('Should successfully delete a coffee', () => {
    action = {
      type: 'DELETE_COFFEE',
      id: 1
    };
    expect(coffeeListReducer(currentState, action)).toEqual({
      2: {
        name: 'Coffee2',
        price: 3,
        weight: 130,
        origin: 'Maui',
        roast: 'dark',
        id: 2
      }
    });
  });

});