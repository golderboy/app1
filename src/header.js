import React, { Component } from 'react';

class Header extends Component {

    constructor(props){
        super(props)
        this.testClick = this.testClick.bind(this)
    }
    testClick(){
        //alert(" Test onClick ") //tt1
        alert(this.props.currentUser)
    }

  render() {

    let {currentUser,isLogging }=this.props;
   // let currentUser = this.props.currentUser;
   currentUser = "Login as "+currentUser;
    return (
        /*
        <div onClick={()=>{alert(currentUser)}}>
            Header { isLogging && currentUser } 
        </div> */
        //<div onClick={()=>this.testClick()}> //tt2
        <div onClick={this.testClick}> 
            Header { isLogging && currentUser } 
        </div>
        //<div>Header {this.props.currentUser} </div>
    );
  }
}

export default Header;