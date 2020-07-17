import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React from kudvenkat.
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component{

  state = {
    Person:[
      { name: 'Ahad' , age: 4 },
      { name: 'Tauseef', age:8 },
      { name: 'Azhar', age:20 }
    ]
      //otherstate: 'Some other value'
  }

  switchNameHandler = () => {
    // console.log('Button clicked');

    this.setState({
      Person:[
        { name: 'Arsalan Ahad' , age: 4 },
        { name: 'Tauseef Hussain', age:8 },
        { name: 'Azhar Hussain', age:20 }
      ]

    })
  }

  render(){
     return(
       <div className="App">
         <h1>Hi, I am a React App </h1>
         <button onClick={this.switchNameHandler}>CLICK ME TO SWITCH NAME</button>
         <Person name= { this.state.Person[0].name } age={ this.state.Person[0].age } />
         <Person name= { this.state.Person[1].name } age={ this.state.Person[1].age } />
         <Person name= { this.state.Person[2].name } age={ this.state.Person[2].age } />




         {/* <Person name="Ahad" age="4" />
         <Person name="Tauseef" age="8" />
         <Person name="Hena" age="24" > My Hobbies: Racing </Person> */}
       </div>

     );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now'))
  }
}

export default App;
