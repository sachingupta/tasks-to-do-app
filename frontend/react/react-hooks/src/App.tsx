import * as React from "react";
import { useState } from "react";
import { ITodo } from "./components/IApp";
import { TodoListRenderer } from "./components/TodoList";
import "./App.css";
import { TodoFormContainer } from "./components/TodoFormContainer";

interface IHooksAppProps {
  todos: ITodo[];
}

export const App = (props: IHooksAppProps) => {
  const [todos, setTodos] = useState(props.todos);

  const addTodo = (todoText: string) => {
    const todo: ITodo = { id: todos.length.toString(), title: todoText, status: "Active" };
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  }

  const completeTodo = (id: string) => {
    const newTodos = [...todos];
    newTodos[Number(id)].status = "Complete";
    setTodos(newTodos);
  }

  const editToDo = (id: string, title: string) => {
    const newTodos = [...todos];
    newTodos[Number(id)].title = title;
    setTodos(newTodos);
  }

  const removeTodo = (id: string) => {
    const newTodos = [...todos];
    newTodos.splice(Number(id), 1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <TodoListRenderer todos={todos} onComplete={completeTodo} onRemove={removeTodo} onEdit={editToDo}/>
      <TodoFormContainer addTodo={addTodo} />
    </div>
  );
}