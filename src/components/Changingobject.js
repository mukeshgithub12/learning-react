import React, { Component } from 'react'

export default class Changingobject extends Component {
    constructor(){
        super()
        this.state ={
            name:'Rajesh Kumar ',
            mark: 50,
        }
    }
  
    markUpdate = () =>{
      this.setState({mark:85})
    }
    changebnt = () =>{
      this.setState({name: 'Mukesh Kumar'})
    }
    componentDidMount(){
        setTimeout(() => {
          this.setState({mark:80})
        }, 5000);
    }
    

  render() {
    return (
      <>
       <h1>My Name is {this.state.name}</h1> 
       <h1>Your Mark Is {this.state.mark}</h1> 
       <button type="button" onClick={this.changebnt}>Change Name</button>
       <button type="button" onClick={this.markUpdate}>Update Mark</button>
      </>
    )
  }
}
