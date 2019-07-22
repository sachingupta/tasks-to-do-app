import * as React from "react";
import { ITodo } from "./IApp";
import "./App.css"; 

interface ITodoProps {
    index: number;
    todo: ITodo;
    onComplete: (id: string) => void;
    onRemove: (id: string) => void;
}

export const Todo = (props: ITodoProps) => {
    const { todo } = props;
    return  (
        <div
          className="todo"
          style={{ textDecoration: todo.status == 'Complete' ? "line-through" : "" }}
          >
          {todo.title}
    
          <div>
            <button onClick={() => { props.onComplete(todo._id) }}>Complete</button>
            <button onClick={() => { props.onRemove(todo._id) }}>x</button>
          </div>
        </div>
      );
}