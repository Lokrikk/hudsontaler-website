import React, { Component } from 'react'
import autobind from 'react-autobind'

export default class Header extends Component {
  constructor(props){
    super(props)
    autobind(this)
  }

  generateButtons() {
    return this.props.buttonAttributes.map(button => {
      return(<input type='button' name={button.name} onClick={this.props.updateLocation} value={button.value} key={button.name}></input>)
    })
  }

  render() {
    return(
      <div className='header'>
        {this.generateButtons()}
      </div>
    )
  }
}
