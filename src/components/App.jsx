import React, {Component} from 'react';
import '../assets/site.css';
import Header from './header'
import Footer from './footer'
import Home from './home'
import Contact from './contact'
import Information from './information'
import Calendar from './calendar'
import Photos from './photos'
import autobind from 'react-autobind'

const buttonAttributes = [
  {
    name: 'home-button',
    value: 'Home'
  }, {
    name: 'information-button',
    value: 'Information'
  }, {
    name: 'calendar-button',
    value: 'Calendar'
  }, {
    name: 'photos-button',
    value: 'Photos'
  }, {
    name: 'contact-button',
    value: 'Contact Us'
  }
]

export default class App extends Component {
  constructor(props){
    super(props)
    autobind(this)
  }

  componentDidMount() {
    this.setState({step: 'home'})
  }

  updateLocation(event){
    let location = event.target.name.substr(0, event.target.name.indexOf('-'))
    this.setState({step: location})
  }

  body() {
    const { step } = this.state || ''
    switch (step) {
      case 'home':
        return <Home />
      case 'information':
        return <Information />
      case 'calendar':
        return <Calendar />
      case 'contact':
        return <Contact />
      case 'photos':
        return <Photos />
      default:
        return (<div>Invalid step</div>)
    }
  }

  render() {
    return (
      <div className="App">
        <Header
          updateLocation={this.updateLocation}
          buttonAttributes={buttonAttributes}
        />
        <div className='body'>
          {this.body()}
        </div>
        <Footer />
      </div>
    )
  }
}
