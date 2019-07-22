import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { ITodo } from "./components/IApp";
import { App } from "./App";


const todos: ITodo[] = [
    { id: "0", title: "Learn1204 about React", status: "Active" },
    { id: "1", title: "Meet friend for lunch", status: "Active"},
    { id: "2", title: "Build really cool todo app", status: "Active" }
]

interface ITodoAppProps {
    todos: ITodo[];
}

const TodoApp = (props: ITodoAppProps) => {
    const { todos } = props;
    return (
        <App todos={todos} />
    );
}

ReactDOM.render(
    <TodoApp todos={todos} />,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
