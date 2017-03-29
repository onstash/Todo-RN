import actionConstants from '../action-constants';
const initialTodosState = [
  {
    task: 'Learn React Native', createdAt: new Date(), id: 0
  },
  {
    task: 'Build Todo app', createdAt: new Date(), id: 1
  }
];

module.exports = (store = initialTodosState, action) => {
  switch (action.type) {
    case actionConstants.todo.ADD:
      const todoEntry = {
        task: action.data,
        id: store.count() + 1,
        createdAt: new Date()
      };
      return [].concat(store, [todoEntry]);
      break;
    case actionConstants.todo.TOGGLE:
      return store.map(entry => {
        if (entry.id === action.data.id && todoEntry.done) {
          entry.completedAt = new Date();
        };
        return entry;
      });
      break;
    case actionConstants.todo.DELETE:
      return store.filter(entry => {
        return entry.id !== action.data.id ? entry : null;
      });
      break;
    default:
      return store;
  }
};
