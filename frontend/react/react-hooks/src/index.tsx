import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { ITodo } from "./components/IApp";
import { HooksTodoApp } from "./components/App";


const todos: ITodo[] = [
    { text: "Learn1204 about React" },
    { text: "Meet friend for lunch" },
    { text: "Build really cool todo app" }
]

interface ITodoAppProps {
    todos: ITodo[];
}

const TodoApp = (props: ITodoAppProps) => {
    const { todos } = props;
    return (
        <HooksTodoApp todos={todos} />
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
