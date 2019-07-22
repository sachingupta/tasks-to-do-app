import * as React from "react";
import { ITodo } from "./IApp";
import "./App.css"; 

interface ITodoProps {
    index: number;
    todo: ITodo;
    onComplete: (index: number) => void;
    onRemove: (index: number) => void;
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
            <button onClick={() => { props.onComplete(props.index) }}>Complete</button>
            <button onClick={() => { props.onRemove(props.index) }}>x</button>
          </div>
        </div>
      );
}