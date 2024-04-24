import './App.css';
import { Component } from 'react';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './components/search-box/search-box.styles.css'

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
        }
      ))
  }

  onChange = (event) => {
    const searchedString = event.target.value.toLocaleLowerCase();
    //every keystroke is changing the state i.e. searchedString
    this.setState(() => {
      return { searchedString };
    })
  }
  render() {

    const { monsters, searchedString } = this.state;
    const { onChange } = this;

    const filterMonster =
      monsters.filter((monst) => {
        //searchedState taken from inside the onChange event, so Used this.state.
        //lowercased array to match lowercase userInput i.e. searchedString
        return monst.name.toLocaleLowerCase().includes(searchedString);
      });
    return (

      <div className='App'>
<h1 className='title'> Monsters Land</h1>
        {
          <SearchBox
            className='search-box'
            onChangeHandler={onChange}
            placeholder='Search Monster' />
        }
        <CardList monsters={filterMonster} />
      </div>
    )
  }
}
export default App;



