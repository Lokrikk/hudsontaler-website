import React, { Component } from 'react'

export default class Calendar extends Component {
  render() {
    return(
      <div>
        <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=aWNzb2MyMkBnbWFpbC5jb20&amp;color=%237986CB" style={{"borderWidth":0}} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
      </div>
    )
  }
}
