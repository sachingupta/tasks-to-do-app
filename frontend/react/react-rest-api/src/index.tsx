import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { ITodo } from "./components/IApp";
import { HooksTodoApp } from "./components/App";


interface ITodoAppProps {
    todos: ITodo[];
}

const TodoApp = () => {
    return (
        <HooksTodoApp />
    );
}

ReactDOM.render(
    <TodoApp />,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
