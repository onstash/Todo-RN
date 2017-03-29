import actionConstants from '../action-constants';

module.exports = {
  addTodo: todo => ({
    type: actionConstants.todo.ADD,
    data: todo
  }),
  toggleTodo: todo => ({
    type: actionConstants.todo.TOGGLE,
    data: todo
  }),
  deleteTodo: todo => ({
    type: actionConstants.todo.DELETE,
    data: todo
  })
};
