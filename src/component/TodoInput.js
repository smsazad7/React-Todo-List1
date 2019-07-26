import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
          const {
            item,
            handleChage,
            handleSubmit,
            editItem
          } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              value={item}
              onChange={handleChage}
            />
          </div>
          <button
            className={
              editItem
                ? "btn btn-block btn-success text-capitalize mt-3"
                : "btn btn-block btn-primary text-capitalize mt-3"
            }
          >
            {editItem ? "edit item" : "add item"}
          </button>
        </form>
      </div>
    );
  }
}
