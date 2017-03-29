/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 import React from 'react';
import { AppRegistry } from 'react-native';
import TodoContainer from './components/Todo';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducers from './redux';


const TodoApp = () => {
  return (
    <Provider store={ createStore(appReducers, {}) }>
      <TodoContainer />
    </Provider>
  );
};

AppRegistry.registerComponent('Todo', () => TodoApp);
