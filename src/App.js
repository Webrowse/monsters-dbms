
import { render } from '@testing-library/react';
import './App.css';
import { Component } from 'react';

class App extends Component {
  //Runs first, constructor exe used to initiate state
  constructor() {
    super();
    //Set empty monsters and searchString to access throughout the program
    this.state = {
      monsters: [],
      searchedString: ''

    };
  };

  componentDidMount() {
    //runs 3rd, fetch changes the array
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => {
          return { monsters: users }
        }, () => { console.log(this.state) }
      ))
  }

  render() {
//runs 2nd and 4th,
    const filterMonster =
      this.state.monsters.filter((monst) => {
        //searchedState taken from inside the onChange event, so Used this.state.
        //lowercased array to match lowercase userInput i.e. searchedString
        return monst.name.toLocaleLowerCase().includes(this.state.searchedString);
      });
    return (
      <div className='App'>
        <input className='search-box'
          placeholder='Search Monster'
          onChange={(event) => {
            const searchedString = event.target.value.toLocaleLowerCase();
            //every keystroke is changing the state i.e. searchedString
            this.setState(() => {
              return { searchedString };
            })
          }} />

        {
        // maping through new array instead this.state.monster why?
        filterMonster.map((monst) => (
          <h1 key={monst.id} >{monst.name}</h1>))}

      </div>
    )
  }
}
export default App;
