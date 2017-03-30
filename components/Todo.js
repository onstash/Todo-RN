import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
import { saveDataInStorage, loadDataFromStorage } from '../utils/storage';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, clearText, updateText } from '../redux/actions';


class TodoContainer extends Component {
  // toggleTodo(data) {
  //   data.done = !data.done;
  //   if (data.done) {
  //     data.completedAt = new Date();
  //   }
  //   const updatedTodos = [];
  //   this.state.todos.map(todo => {
  //     if (todo.id == data.id) {
  //       updatedTodos.push(data);
  //     } else {
  //       updatedTodos.push(todo);
  //     }
  //   });
  //   saveDataInStorage('todos', updatedTodos).then(() => {
  //     this.setState({ todos: updatedTodos });
  //   });
  // }
  //
  // deleteTodo(data) {
  //   const updatedTodos = [];
  //   this.state.todos.map(todo => {
  //     if (todo.id !== data.id) {
  //       updatedTodos.push(todo);
  //     }
  //   });
  //   saveDataInStorage('todos', updatedTodos).then(() => {
  //     this.setState({ todos: updatedTodos });
  //   });
  // }
  //
  // addToDo() {
  //   const { text, todos } = this.state;
  //   if (!text) {
  //     return;
  //   }
  //   const todo = {
  //     task: text,
  //     id: this.state.todos.length + 1,
  //     createdAt: new Date()
  //   };
  //   const updatedTodos = [].concat(todos, [todo]);
  //   saveDataInStorage('todos', updatedTodos).then(() => {
  //     this.setState({ todos: updatedTodos, text: '' });
  //   });
  // }
  //
  // constructor() {
  //   super();
  //
  //   this.state = { text: '', todos: initialTodosState };
  //   loadDataFromStorage('todos').then(data => {
  //     const { messages } = this.state;
  //     if (data !== null) {
  //       this.setState({ todos: JSON.parse(data) });
  //     }
  //   });
  // }
  render() {
    const {
      text,
      todos,
      onChangeTextHandler,
      onClickToggle,
      onPressToggle,
      onLongPressToggle
    } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to my Todo app!
        </Text>
        <TextInput
          placeholder="Type here to add todo"
          onChangeText={ () => onChangeTextHandler(text) }>
          { text }
        </TextInput>
        <Button
          onPress={ () => onClickToggle(text) }
          title="Add"
        />
        {
          todos.map((todo, index) => {
            return (
              <Text
                key={ index }
                style={ styles.todo }
                onPress={ () => onPressToggle(todo) }
                onLongPress={ () => onLongPressToggle(todo) }>
                { todo.task } ({ todo.done ? 'Finished': 'Not finished' })
              </Text>
            );
          })
        }
      </View>
    );

    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.welcome}>
    //       Welcome to my Todo app!
    //     </Text>
    //     <TextInput
    //       placeholder="Type here to add todo">
    //       { text }
    //     </TextInput>
    //     <Button
    //       title="Add"
    //     />
    //     {
    //       todos.map((todo, index) => {
    //         return (
    //           <Text
    //             key={ index }
    //             style={ styles.todo }>
    //             { todo.task } ({ todo.done ? 'Finished': 'Not finished' })
    //           </Text>
    //         );
    //       })
    //     }
    //   </View>
    // );

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

const mapStateToProps = state => {
  let { text, todos } = state;
  return { text, todos };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeTextHandler: text => {
      dispatch(updateText(text));
    },
    onClickToggle: text => {
      dispatch(addTodo(text));
      dispatch(clearText());
    },
    onPressToggle: todo => {
      dispatch(toggleTodo(todo));
    },
    onLongPressToggle: todo => {
      dispatch(deleteTodo(todo));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
