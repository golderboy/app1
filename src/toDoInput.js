import React, { Component } from 'react';

class Todoinput extends Component {

  constructor(props){
    super(props)
    this.state ={
      newTodo : ""
    }
    this.addClicked = this.addClicked.bind(this)
  }

  addClicked(){
    let {onAddtodo} = this.props
    onAddtodo(this.state.newTodo)
    this.setState({
      newTodo: ""
    })
  }


  render() {

    let {newTodo} = this.state
    return (
        <div>   
          Add Text  := <input value={newTodo} onChange={(e)=>this.setState({newTodo:e.target.value})}/>  
          {/*<button onClick={()=>onAddtodo(this.state.newTodo)}> Add </button>*/}
          
          <button onClick={this.addClicked}> Add </button>
          <hr />
          {this.state.newTodo}
          <hr />
        </div>
    );
  }
}

export default Todoinput;

