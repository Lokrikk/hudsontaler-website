import React, { Component } from 'react'
import { Slide } from 'react-slideshow-image';
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

let images = ['../assets/images/slideshow/image1.jpg', '../assets/images/slideshow/image2.jpg']

export default class Photos extends Component {
  constructor(props) {
    super(props)
    this.generateSlides = this.generateSlides.bind(this)
  }

  generateSlides() {
    return images.map(image => {
      return(
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${image})`}}>
            <span>Slide</span>
          </div>
        </div>
      )
    })
  }
  render() {
    return(
      <div>
        <Slide {...properties}>
          {this.generateSlides()}
        </Slide>
      </div>
    )
  }
}
