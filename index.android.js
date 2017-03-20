/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Learn React Native', createdAt: new Date()
        },
        {
          task: 'Build Todo app', createdAt: new Date()
        }
      ]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to my Todo app!
        </Text>
        {
          this.state.todos.map((todo, index) => <Text key={ index } style={ styles.welcome }>{ todo.task }</Text>) 
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('Todo', () => Todo);
