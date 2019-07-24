import * as React from "react";
import { ITodo } from "./IApp";

import { Todo } from "./Todo";
import  "./Components.css"; 

import todoImage from './todo.png';

interface ITodoListRendererProps {
    todos: ITodo[];
    onComplete: (id: string) => void;
    onRemove: (id: string) => void;
    onEdit: (id: string, title: string) => void;
}

export const TodoListRenderer = (props: ITodoListRendererProps) => {
    const { todos } = props;
    const todosRender: any[] = [];
    for (let index = 0; index < todos.length; index++) {
        todosRender.push(<Todo
            key={index}
            todo={todos[index]}
            onComplete={props.onComplete}
            onRemove={props.onRemove}
            onEdit={props.onEdit}
        />);
    }
    return (
        <div className="toDoHeader">
            <div className="toDoTitle">
                <img className="todoImage"
                    src={todoImage}
                    alt="Todo check"></img>
                ToDo
            </div>
            <div className="todo-list">
                {todosRender}
            </div>
        </div>
    );
}