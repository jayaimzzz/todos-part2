import React, { Component } from "react";
import "./index.css";
import todosList from "./todos.json";

class App extends Component {
  state = {
    todos: todosList,
    search: "",
    nextID: todosList.length + 1
  };

  handleLoadSearchResults = event => {
    this.setState({
      search: event.target.value
    });
  };

  keyHandling = event => {
    if (event.keyCode === 13) {
      const newTodo = {
        userId: 1,
        id: this.state.nextID,
        title: this.state.search,
        completed: false
      };
      const newTodoList = this.state.todos.slice();
      console.log("keyHandling is ran")
      newTodoList.push(newTodo);
      this.setState(previousState => ({todos: newTodoList, search: "", nextID: previousState.nextID + 1}))
    }
  }

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            type="text"
            value={this.state.search}
            onChange={this.handleLoadSearchResults}
            onKeyDown={this.keyHandling}
          />
        </header>
        <TodoList todos={this.state.todos} />
        <footer className="footer">
          <span className="todo-count">
            <strong>0</strong> item(s) left
          </span>
          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>
    );
  }
}

class TodoItem extends Component {
  render() {
    return (
      <li className={this.props.completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            defaultChecked={this.props.completed}
          />
          <label>{this.props.title}</label>
          <button className="destroy" />
        </div>
      </li>
    );
  }
}

class TodoList extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.props.todos.map(todo => (
            <TodoItem title={todo.title} completed={todo.completed} key={todo.id}/>
          ))}
        </ul>
      </section>
    );
  }
}

export default App;
