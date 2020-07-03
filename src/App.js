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
  render() {
    return (
      <div className="App">
        <h2>TODO LIST</h2>
        <TodoItems listPropsItems={this.state.items}/>
        <AddItems />
      </div>
    );
  }
}

export default App;
