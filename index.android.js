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
  View,
  TextInput,
  Button
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

  addToDo() {
    const { text, todos } = this.state;
    if (!text) {
      return;
    }
    const todo = {
      task: text,
      id: this.state.todos.length + 1,
      createdAt: new Date()
    };
    const updatedTodos = [].concat(todos, [todo]);
    this.setState({ todos: updatedTodos, text: '' });
  }

  constructor() {
    super();
    this.state = {
      text: '',
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
        <TextInput
          placeholder="Type here to add todo"
          onChangeText={ text => this.setState({ text })}>
          { this.state.text }
        </TextInput>
        <Button
          onPress={ () => this.addToDo() }
          title="Add"
        />
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
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center'
  },
  button: {
    padding: 10
  },
  todo: {
    fontSize: 20,
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('Todo', () => Todo);
