import React from 'react';
import './List.css';

export const ListItem = (props: any) => {
    const value = props.value;
    return (
      // Wrong! There is no need to specify the key here:
      <li className="item" key={value.id}>
        {value.title}
      </li>
    );
  }
  
  export const List = (props: any) => {
    const items = props.items;
    const listItems = items.map((item: any) =>
      // Wrong! The key should have been specified here:
      <ListItem value={item} />
    );
    return (
      <ul className="item-list">
        {listItems}
      </ul>
    );
  }