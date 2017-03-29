import actionConstants from '../action-constants';

module.exports = (store = '', action) => {
  switch (action.type) {
    case actionConstants.text.UPDATE:
      return action.data;
      break;
    case actionConstants.text.CLEAR:
      return '';
      break;
    default:
      return store;
  }
};
