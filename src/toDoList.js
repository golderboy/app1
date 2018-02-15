import React, { Component } from 'react';
import Todoitems from './toDoItems';


class Todolist extends Component {
  render() {
      let {items} = this.props
    return (
        <div> 
            Add List <br />
            <ul>
                {
                    items.map((todo,i) => 
                    <li key={i} ><Todoitems  text={todo}/></li>)
                }
            </ul>
        </div>
    );
  }
}

export default Todolist;

