import React from "react";

import TodoList from "../components/todos/TodoList";
import TodoStore from "../components/todos/TodoStore";

export default class Todos extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <TodoList store={TodoStore} />
      </div>
    );
  }
}
