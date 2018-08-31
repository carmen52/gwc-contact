import React, { Component, ReactComponent } from 'react';
import coverphoto from './common/cover_photo.jpg';
import facebook from './common/fb.png';
import email from './common/email.png';
import hackpad from './common/hackpad.png';
import git from './common/git.svg';
import twitter from './common/twitter.png';
import instagram from './common/instagram.png';
import logo from './common/gwc.png';
import neu from './common/neu.png';
import calendar from './common/calendar.png';
import clock from './common/clock.png';
import location from './common/location.png';
import ccis from './common/ccis.png';
import bullet from './common/bulletpoint.png'

import emailcontact from './email.png';
import facebookcontact from './facebook.png';
import instagramcontact from './instagram.png';

import './App.css';
import './common/header.css';
import {Header, Footer} from './common/header.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { hidePhoto:true}
    this.hoverOn= this.hoverOn.bind(this)
    this.hoverOff= this.hoverOff.bind(this)
  }
  
  hoverOn() {
    this.setState({hidePhoto:true});
  }

  hoverOff() {
    this.setState({hidePhoto:true});
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="Team-Header_">      
          <div className="team-cover-text" >
          You can reach us here!
          </div>
        </div>
        <div className="contact-div" >
          <div className="contact-info">
            <div className="contact-column">
              <ContactItem title="Send us an email" image={emailcontact} link="mailto:nugradwomencoders@gmail.com" sendtext="Email us" />
            </div><div className="contact-column">
              <ContactItem title="Join us on Facebook" image={facebookcontact} link="https://www.facebook.com/groups/GradWomenCoders/about/" sendtext="Join us" />
            </div><div className="contact-column">
              <ContactItem title="Follow us on Instagram" image={instagramcontact} link="https://www.instagram.com/gwc_nu/" sendtext="Follow us" />
            </div>
          </div>
        </div>
        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5898.304414487892!2d-71.0950657451163!3d42.33927816720446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a21f1bc9735%3A0x655e0c46cdbdf694!2sWest+Village+G!5e0!3m2!1sen!2sus!4v1535663511720" width="822px" height="350" frameborder="0"  allowfullscreen></iframe>
        <Form/>
        <Footer/>
      </div>
    );
  }
}

class ContactItem extends React.Component {
  constructor(props) {
    super(props);
  }

  goToLink(a) {
    window.open(a,"_blank");
  }

  render() {
    return(
      <div className="contact-item">
        <div className="contact-image">
         <img className="contact-image-img" src={this.props.image} alt="contact image" />
        </div>
        {/* <div className="contact-title">
         {this.props.title}
        </div> */}
        <div className="contact-sendtext">
         <button className="contact-button" onClick={() =>{this.goToLink(this.props.link)}}> {this.props.sendtext} </button>
        </div>
      </div>
    ); 
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="contact-form-div">
      <div className="contact-form-header" > Subscribe to our email list </div>
        <form id="contact-form" className="contact-form" >
          <div className="form-group">
            <label className="form-item" for="exampleInputEmail1">Email address: </label>
            <input type="email" className="form-item form-email" id="email" aria-describedby="emailHelp" />
            <button type="submit" className="form-item form-button">Submit</button>
          </div>
        </form>
      </div>
    ); 
  }
}

export default App;
