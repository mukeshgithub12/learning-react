import React, { Component } from 'react'

export default class Demo extends Component {
    constructor(){
        super()
        this.state = {
            name : 'Mukesh Kumar Verma',
            age :25,
            address: 'Balrampur'
        }
    }
  render() {
    return (
      <>
       <h2>{this.state.name}</h2> 
       <h2>{this.state.age}</h2> 
       <h2>{this.state.address}</h2> 
      </>
    )
  }
}
