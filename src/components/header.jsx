import React, { Component } from 'react'
import autobind from 'react-autobind'

export default class Header extends Component {
  constructor(props){
    super(props)
    autobind(this)
  }

  generateButtons() {
    return this.props.buttonAttributes.map(button => {
      let className = 'header-button'
      if(button.name.match(this.props.step)) {
        className = className + ' active'
      }

      return(<input type='button' className={className} name={button.name} onClick={this.props.updateLocation} value={button.value} key={button.name}></input>)
    })
  }

  render() {
    return(
      <div className='header'>
        <div className='banner'>
          <h2> GTEV Hudsontaler </h2>
        </div>
        <div className='nav'>
          {this.generateButtons()}
        </div>
      </div>
    )
  }
}
