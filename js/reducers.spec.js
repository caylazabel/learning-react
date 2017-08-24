import reducers from './reducers';

test('reducers', () => {
  let state
  state = reducers({searchTerm:'house',omdbData:{}}, {type:'SET_SEARCH_TERM',searchTerm: 'house'})
  expect(state).toEqual({searchTerm: 'house',omdbData:{}})
})
