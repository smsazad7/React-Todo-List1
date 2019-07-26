import React, { Component } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

export default class MianTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      item: "",
      id: uuid(),
      editItem: false
    };
  }
  handleChage = e => {
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };

    const updeteItems = [...this.state.items, newItem];
    this.setState({
      items: updeteItems,
      item: "",
      id: uuid(),
      editItem: false
    });
  };
  handleClear = () => {
    this.setState({
      items: []
    });
  };
  handleDelete = id => {
    const filter = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filter
    });
  };
  handleEdit = id => {
    const filter = this.state.items.filter(item => item.id !== id);
    const itemEdit = this.state.items.find(item => item.id === id);
    this.setState({
      items: filter,
      item: itemEdit.title,
      id:id,
      editItem:true
     
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h2 className="text-center text-capitalize">todo input</h2>
            <TodoInput
              item={this.state.item}
              handleChage={this.handleChage}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              handleClear={this.handleClear}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}
