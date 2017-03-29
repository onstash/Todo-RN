import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
import { saveDataInStorage, loadDataFromStorage } from '../utils/storage';


export default class Todo extends Component {
  toggleTodo(data) {
    data.done = !data.done;
    if (data.done) {
      data.completedAt = new Date();
    }
    const updatedTodos = [];
    this.state.todos.map(todo => {
      if (todo.id == data.id) {
        updatedTodos.push(data);
      } else {
        updatedTodos.push(todo);
      }
    });
    saveDataInStorage('todos', updatedTodos).then(() => {
      this.setState({ todos: updatedTodos });
    });
  }

  deleteTodo(data) {
    const updatedTodos = [];
    this.state.todos.map(todo => {
      if (todo.id !== data.id) {
        updatedTodos.push(todo);
      }
    });
    saveDataInStorage('todos', updatedTodos).then(() => {
      this.setState({ todos: updatedTodos });
    });
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
    saveDataInStorage('todos', updatedTodos).then(() => {
      this.setState({ todos: updatedTodos, text: '' });
    });
  }

  constructor() {
    super();
    const initialTodosState = [
      {
        task: 'Learn React Native', createdAt: new Date(), id: 0
      },
      {
        task: 'Build Todo app', createdAt: new Date(), id: 1
      }
    ];
    this.state = { text: '', todos: initialTodosState };
    loadDataFromStorage('todos').then(data => {
      const { messages } = this.state;
      if (data !== null) {
        this.setState({ todos: JSON.parse(data) });
      }
    });
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
              <Text
                key={ index }
                style={ styles.todo }
                onPress={ () => this.toggleTodo(todo) }
                onLongPress={ () => this.deleteTodo(todo) }>
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
    fontSize: 25,
    textAlign: 'center'
  },
  todo: {
    fontSize: 15,
    textAlign: 'center'
  }
});
