import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from './header';
import Footer from './footer';
import Todoinput from './toDoInput';
import Todolist from './toDoList';
import Todoitems from './toDoItems';

class App extends Component {
  /**
  constructor(props){
    super(props)
    this.state ={
      currentTime :0
    }
    this.footerClick = this.footerClick.bind(this)
  }

  footerClick(time){
    this.setState({currentTime: time})
  }

  render() {
    let {currentTime} = this.state
    return (
      <div>
        <Header currentUser="My name" isLogging={true} userData={{age: 30,sex:1}}/>
        <div> This Click = {currentTime}</div>
        <Footer onTimerClick={this.footerClick}/>
          <toDoInput />
      
      </div>
    );
  }
*/

constructor(props){
  super(props)
  this.state ={
    Todoitems : []
  }
  this.addTodo = this.addTodo.bind(this)
}

addTodo(newTodo){
  this.setState({
    Todoitems: this.state.Todoitems.concat([newTodo])
  })
}

  render() {
    let {Todoitems} = this.state
    return (
      <div>
        <Header /><br />
        <Todoinput  onAddtodo={this.addTodo} />
        <Todolist items={Todoitems}/>
      </div>
    );
  }
}

export default App;
