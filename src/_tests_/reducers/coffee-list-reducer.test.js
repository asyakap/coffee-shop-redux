import coffeeListReducer from '../../reducers/coffee-list-reducer';

describe('coffeeListReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(coffeeListReducer({}, { type: null })).toEqual({});
  });
});