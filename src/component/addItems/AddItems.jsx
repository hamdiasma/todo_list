import React from "react";
import "./AddItems.css";
class AddItems extends React.Component {
  state = {
    name: "",
    age: "",
  };

  handelChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handelSabmit = (e) => {
    e.preventDefault();
    if(e.target.name.value===""){
      return false
    }else{
      this.props.addItems(this.state);
    this.setState({
      name: "",
      age: "",
    });
    }
  };


  render() {
    return (
      <div className="add">
        <form onSubmit={this.handelSabmit}>
          <input
            onChange={this.handelChange}
            type="text"
            placeholder="enter Name"
            id="name"
            value={this.state.name}
            
          />
          <input
            onChange={this.handelChange}
            type="number"
            placeholder="enter age"
            id="age"
            value={this.state.age}
            
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default AddItems;
