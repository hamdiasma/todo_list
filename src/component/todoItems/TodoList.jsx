import React from "react";
import "./TodoList.css";

const TodoItems = (props) => {
  const { listPropsItems } = props;
  const listItems = listPropsItems.map((item) => {
    return (
      <div key={item.id}>
        <span>{item.name}</span> <span>{item.age}</span> <span>&times;</span>
      </div>
    );
  });
  return (
    <div className="todo">
      <div className = "listItems">
        <span>Name</span>
        <span> Age</span>
        <span>Action</span>
      </div>
      {listItems}
    </div>
  );
};

export default TodoItems;
