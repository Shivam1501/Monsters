import React, { Component } from "react";
import { CardList } from "./component/card-list/card-list.component";
import { SeachBox } from "./component/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

handleChange = (e) => {
  this.setState({ searchField: e.target.value })
}

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredState = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SeachBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredState}></CardList>
      </div>
    );
  }
}

export default App;
