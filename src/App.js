import React from "react";
import TodoItems from "./component/todoItems/TodoList";
import AddItems from "./component/addItems/AddItems";

class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "hamdi", age: 32 },
      { id: 2, name: "asma", age: 30 },
      { id: 3, name: "sandra", age: 1 },
    ],
  };

  deleteItem = (id) => {
    /*
    let items = this.state.items;
    let i = items.findIndex((item) => item.id === id);
    items.splice(i, 1);
    this.setState({
      items:items
    })
     */

    let itemsdel = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      items: itemsdel,
    });
  };

  addItems = (item) => {
    item.id = Math.random()
    let items = this.state.items;
    items.push(item);
    this.setState({
      items:items
    });
  };

  render() {
    return (
      <div className="App container">
        <h2 className="text-center">TODO LIST</h2>
        <TodoItems
          listPropsItems={this.state.items}
          deleteItem={this.deleteItem}
        />
        <AddItems addItems={this.addItems} />
      </div>
    );
  }
}

export default App;
