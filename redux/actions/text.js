import actionConstants from '../action-constants';

module.exports = {
  updateText: text => ({
    type: actionConstants.text.UPDATE,
    data: text
  }),
  clearText: () => ({
    type: actionConstants.text.CLEAR
  }),
};
