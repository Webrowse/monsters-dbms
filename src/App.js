import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { fName: "Adarsh", lName: "Singh" },
      company: "Impulse",
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>The name is {this.state.name.fName} {this.state.name.lName}, works at {this.state.company}</p>
          <button
            onClick={() => {
              this.setState(
                () => {
                  return {
                    name: { fName: "Romy", lName: "Yomi" }
                  }
                },
                () => {

                  console.log(this.state)
                })

            }}>Change Name</button>
        </header>
      </div>
    );

  }

}

export default App;
