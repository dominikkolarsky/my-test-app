import './App.css';

import React, { Component } from 'react'
import DogGreet from './components/DogGreet';
import Cat from './components/Cat';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.input = React.createRef()

    this.state = {
      myDog: "Azor",
      newBreed: "Village mix",
      dogs: [
        {
          id: 1,
          name: "Alik",
          breed: "mix",
          says: "Haf!"
        },
        {
          id: 2,
          name: "Zeus",
          breed: "German Shepherd",
          says: "Wau!"
        },
        {
          id: 3,
          name: "Fifinka",
          breed: "Mountain Purebreed",
          says: "Woof!"
        }
      ],
      cats: [{
        id: 1,
        name: "Micka",
        says: "Meow"
      }, {
        id: 2,
        name: "Hannibal",
        says: "Mňau"
      },
      {
        id: 3,
        name: "Simba",
        says: "Miii"
      }]
    }
  }

  handleNewName = event => {
    this.setState({
      myDog: event.target.value,
    })
  }

  handleNewBreed = event => {
    this.setState({
      newBreed: event.target.value,
    })
  }

  handleSubmit = event => {
    // event.preventDefault();
    if (event.key === 'Enter' && this.state.myDog && this.state.newBreed) {
      this.setState((state) => {
        const newDog = {
          id: Math.max(...state.dogs.map(dog => dog.id)) + 1,
          name: this.state.myDog,
          breed: this.state.newBreed,
          says: "Hau hau!"
        }
        console.log(newDog)
        return {
          dogs: [...state.dogs, newDog]
        }
      })
      this.resetForm()
    }
  }
  hlandleRemove = dogToRemove => {
    this.setState(state => {
      return {
        dogs: state.dogs.filter(dog => dog !== dogToRemove)
      }
    })
  }

  resetForm = () => {
    this.setState({
      myDog: "",
      newBreed: ""
    })
    this.input.current.focus()
  }

  handleDeleteCat = catToDelete => {
    this.setState(state => {
      return {
        cats: state.cats.filter(cat => cat !== catToDelete)
      }
    })
  }

  render() {
    const dogs = this.state.dogs.map(dog =>
      <li key={dog.id}>
        <fieldset style={{ width: "20%" }}>
          {dog.name} <button onClick={() => this.hlandleRemove(dog)}> X </button><br />
          {dog.breed} <br />
          {dog.says}
          {/* {dog.name.length <= 4 &&
          <small>
            <strong> short name
            </strong>
          </small>} */}
        </fieldset>
      </li>)



    return (
      <div className='App'>
        My dog <strong>{this.state.myDog}</strong>
        <p>I like {this.state.myDog}</p>
        <form onKeyPress={this.handleSubmit} >
          <input type="text" onChange={this.handleNewName} value={this.state.myDog} ref={this.input} autoFocus />
          <br /> <input type="text" onChange={this.handleNewBreed} value={this.state.newBreed} />
        </form>
        <ul style={{ listStyleType: "none" }}>
          {dogs}
        </ul>
        <DogGreet dogName={this.state.myDog} />
        
        <div>
          <ul style={{ listStyleType: "none" }}>
            {this.state.cats.map(cat =>
              <Cat id={cat.id} name={cat.name} sound={cat.says} cat={cat} onDelete={this.handleDeleteCat}/>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

