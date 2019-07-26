import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, handleClear, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group">
        <h3 className="text-capitalize text-center">todo list</h3>
        {items.map(item => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}
        <button
          className="btn btn-danger btn-block text-capitalize"
          onClick={handleClear}
        >
          clear list
        </button>
      </ul>
    );
  }
}
