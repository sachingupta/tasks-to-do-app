import * as React from "react";
import { ITodo } from "./IApp";
import "./Components.css"; 
import { useState } from "react";
import todoImage from './todo.png';

interface ITodoProps {
    todo: ITodo;
    onComplete: (id: string) => void;
    onRemove: (id: string) => void;
    onEdit: (id:string, title: string) => void;
}

export const Todo = (props: ITodoProps) => {
    const { todo } = props;

    const [status, setStatus] = useState(todo.status);
    const [title, setTitle] = useState(todo.title);
    const [state, setState] = useState('display');

    const onStatusChange = () => {
      status === "Complete" ? setStatus('not complete') : setStatus('Complete');
      props.onComplete(todo.id);
    }

    const onEdit = () => {
      setState('edit')
    }

    const onEdited = () =>{
      setState('display');
      props.onEdit(todo.id, title);
    }

    const onTitleChange = (e: any) => {
      setTitle(e.target.value);
    }

    return  (
        <div
          className="todo"
          contentEditable={ state === "edit" }
          style={{ textDecoration: status === "Complete" ? "line-through" : "" }}
          onChange={ onTitleChange }
          >
          { todo.title } 
          <div className="actions">
            {state === "edit" && 
              <button className="editedToDo" onClick={ onEdited }>
                <img className="editedToDoImage"
                  src={ todoImage }
                  alt="Todo check">
                </img>
              </button>
            }
            {/* {status === "Complete" && */}
            { state === "display" &&
              <div className="dropdown">
                <span className="editOrDelete">...</span>
                <div className="dropdown-content">
                {state === "display" && // status !== "Complete" &&
                  <button className="editToDo" onClick={ onEdit }>Edit</button>
                }
                <br></br>
                <button className="removeToDo" onClick={() => { props.onRemove(todo.id) }}>Delete</button>
                </div>
              </div>
            }
            { state === "display" &&
              <input className="completeCheck" 
                type="checkbox" 
                checked={ status === 'Complete' } 
                onClick={ onStatusChange }>
              </input>
            }
          </div>
        </div>
      );
}