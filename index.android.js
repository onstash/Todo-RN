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
  onPress(data) {
    data.done = !data.done;
    const updatedTodos = [];
    this.state.todos.map(todo => {
      if (todo.id == data.id) {
        updatedTodos.push(data);
      } else {
        updatedTodos.push(todo);
      }
    });
    this.setState({ todos: updatedTodos });
  }
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Learn React Native', createdAt: new Date(), id: 0
        },
        {
          task: 'Build Todo app', createdAt: new Date(), id: 1
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
          this.state.todos.map((todo, index) => {
            return (
              <Text key={ index } style={ styles.todo } onPress={ () => this.onPress(todo) }>
                { todo.task } ({ todo.done ? 'Finished': 'Not finished' })
              </Text>
            );
          })
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
  todo: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('Todo', () => Todo);
