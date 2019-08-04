import * as React from "react";
import { ITodo } from "./IApp";

import { Todo } from "./Todo";

interface ITodoListRendererProps {
    todos: ITodo[];
    onComplete: (id: string) => void;
    onRemove: (id: string) => void;
}

export const TodoListRenderer = (props: ITodoListRendererProps) => {
    const { todos } = props;
    const todosRender: any[] = [];
    for (let index = 0; index < todos.length; index++) {
        todosRender.push(<Todo
            key={index}
            index={index}
            todo={todos[index]}
            onComplete={props.onComplete}
            onRemove={props.onRemove}
        />);
    }
    return (
        <div className="todo-list">
            {todosRender}
        </div>
    );
}