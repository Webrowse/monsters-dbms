
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters : [{
        name: "Andy",
        id: 1,
      },
      {
        name: "becky",
        id: 2,
      },
      {
        name: "candy",
        id: 3,
      },
      {
        name: "dorky",
        id: 4,
      },
      ]
    };
  };

  render() {
    return (
      <div className='App'>
        {this.state.monsters.map((monst) => {
          return <h1 key={monst.id}>{monst.name}</h1>
        })
        }

      </div>

    )
  };
}

export default App;
