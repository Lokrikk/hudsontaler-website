import React, { Component } from 'react'
import { Slide } from 'react-slideshow-image';
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

let images = ['images/slideshow/image1.jpg', 'images/slideshow/image2.jpg']

export default class Photos extends Component {
  constructor(props) {
    super(props)
    this.generateSlides = this.generateSlides.bind(this)
  }

  generateSlides() {
    console.log(process.env.PUBLIC_URL)
    return images.map((image, index) => {
      return(
        <div className="each-slide" key={index}>
          <div style={{'backgroundImage': `url(http://localhost:3000/${image})`}}>
            <span>Slide {index}</span>
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
