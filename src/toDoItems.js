import React, { Component } from 'react';
import styled from 'styled-components';

const Text = styled.span `
    font-size: 18px;
    color: ${props => (props.done ? 'lightgrey' : 'black')};
    `
class Todoitems extends Component {

    
    constructor(props){
        super(props)
        this.state ={
          done: false
        }
        this.toggle = this.toggle.bind(this)
      }

    toggle(){
        this.setState({
            done: !this.state.done
        })
    }//กลับค่า

  render() {
      let {text} = this.props
      /*
      if(this.state.done){

      }
      */
    return (
        <div> 
            <input  type="checkbox" 
                    value={this.state.done}
                    onClick={this.toggle} />
            Add Items : <Text>{this.state.done ? "Done: "+text:text}</Text>
        </div>
    );
  }
}

export default Todoitems;

