import React from "react";
import "./TodoList.css";

const TodoItems = (props) => {
  const { listPropsItems, deleteItem } = props;
  let lengthItems = listPropsItems.length;
  const listItems = lengthItems ? (
    listPropsItems.map((item) => {
      return (
        <div key={item.id}>
          <span>{item.name}</span> <span>{item.age}</span>{" "}
          <span onClick={() => deleteItem(item.id)}>&times;</span>
        </div>
      );
    })
  ) : (
    <p> There Is No Items To Show</p>
  );

  return (
    <div className="todo">
      <div className="listItems">
        <span>Name</span>
        <span> Age</span>
        <span>Action</span>
      </div>
      {listItems}
    </div>
  );
};

export default TodoItems;
