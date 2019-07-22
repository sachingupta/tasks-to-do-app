import * as React from "react";

import  "./Components.css"; 

interface ITodoFormProps {
  value: string;
  onChange: (e: any) => void;
  onSubmit: (e: any) => void;
}

export function TodoForm(props: ITodoFormProps){
    return (
        <form onSubmit={props.onSubmit}>
          <input className="todo-input"
            type="text"
            value={props.value}
            onChange={props.onChange}
          />
        </form>
      );
}