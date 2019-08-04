import * as React from "react";
import { useState, useEffect } from "react";
import { ITodo } from "./IApp";
import { TodoListRenderer } from "./TodoList";
import "./App.css";
import { TodoFormContainer } from "./TodoFormContainer";
import { ThemeContext, themes } from "./ThemeContext";
import { API_URL } from '../constants';

export const HooksTodoApp = () => {
  const [todos, setTodos] = useState([] as any);
  const [theme, setTheme] = useState(themes.light);
  const [toggleThemeCount, setToggleThemeCount] = useState(0);

  const addTodo = (todoText: string) => {
    const todo = { title: todoText, status: 'Active' };
    const newTodos = [...todos, todo];
    let requestBody = todo;
    fetch(API_URL + '/tasks', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
          'Content-Type': 'application/json'
      }
     })
      .then((res) => {
          if (res.status !== 200 && res.status !== 201) {
              throw new Error('Failed');
          }
          return res.json();
      })
      .then(resData => {
          console.log(JSON.stringify(resData));
          setTodos(resData);
      })
      .catch(err => {
          console.log(err);
      })
  }

  const completeTodo = (id: string) => {
    let requestBody = {
      status: 'Complete'
    };
    fetch(API_URL + '/tasks/' + id, {
      method: 'PUT',
      body: JSON.stringify(requestBody),
      headers: {
          'Content-Type': 'application/json'
      }
     })
      .then((res) => {
          if (res.status !== 200 && res.status !== 201) {
              throw new Error('Failed');
          }
          return res.json();
      })
      .then(resData => {
          console.log(JSON.stringify(resData));
          setTodos(resData);
      })
      .catch(err => {
          console.log(err);
      })
  }

  const removeTodo = (id: string) => {
    fetch(API_URL + '/tasks/' + id, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json'
      }
     })
      .then((res) => {
          if (res.status !== 200 && res.status !== 201) {
              throw new Error('Failed');
          }
          return res.json();
      })
      .then(resData => {
          console.log(JSON.stringify(resData));
          setTodos(resData);
      })
      .catch(err => {
          console.log(err);
      })
  }

  const fetchTasks = () => {
    fetch(API_URL + '/tasks', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
     })
      .then((res) => {
          if (res.status !== 200 && res.status !== 201) {
              throw new Error('Failed');
          }
          return res.json();
      })
      .then(resData => {
          console.log(JSON.stringify(resData));
          setTodos(resData);
      })
      .catch(err => {
          console.log(err);
      })
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
  /*
    - By using this Hook, you tell React that your component needs to do something after render
    - by default useEffect run after every render
    - Unlike componentDidMount or componentDidUpdate,
     effects scheduled with useEffect don’t block the browser from updating the screen. This makes your app feel more responsive.
      The majority of effects don’t need to happen synchronously.
       In the uncommon cases where they do (such as measuring the layout), 
       there is a separate useLayoutEffect Hook with an API identical to useEffect. 
    */
   /*React to skip applying an effect if certain values haven’t changed between re-renders. 
     To do so, pass an array as an optional second argument to useEffect: */
    document.title = `You clicked hooks-app themChange button ${toggleThemeCount} times`;
    /*
     If your effect returns a function, React will run it when it is time to clean up:
    */
  }, [toggleThemeCount]);

  return (
    <div className="app">
      <TodoListRenderer todos={todos} onComplete={completeTodo} onRemove={removeTodo} />
      <TodoFormContainer addTodo={addTodo} />
    </div>
  );
}