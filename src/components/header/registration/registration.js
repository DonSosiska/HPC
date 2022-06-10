import "./registration.css";
import React, { useState } from 'react';


class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      secondName: "",
      middleName: "",
      email: "",
      phone: "",
      organization: "",
      papersTitle: "",
      brief: "",
      area: "",
      isSpeaker: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAreaChange = this.handleAreaChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleAreaChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  render() {
    return (
      <form action = 'http://localhost:3333/' method = 'POST' >
        <label className="first-name-label">
          First Name :
        </label>
        <input
          required
          className="first-name-input"
          name="firstName"
          type="text"
          value={this.state.numberOfGuests}
          onChange={this.handleInputChange} />
        <label className="second-name-label">
          Second Name :
        </label>
        <input
          required
          className="second-name-input"
          name="secondName"
          type="text"
          value={this.state.numberOfGuests}
          onChange={this.handleInputChange} />
        <label className="middle-name-label">
          Middle Name :
        </label>
        <input
          className="middle-name-input"
          name="middleName"
          type="text"
          value={this.state.numberOfGuests}
          onChange={this.handleInputChange} />
        <label className="email-label">
          Email :
        </label>
          <input
            required
            className="email-input"
            name="email"
            type="email"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        <label className="phone-label">
          Phone :
        </label>
        <input
          required
          className="phone-input"
          name="phone"
          type="tel"
          checked={this.state.isGoing}
          onChange={this.handleInputChange} />
        <label className="papers-title-label">
          Title of conference paper :
        </label>
        <input
          className="papers-title-input"
          name="papersTitle"
          type="text"
          checked={this.state.isGoing}
          onChange={this.handleInputChange} />
        <label className="country-label">
          Country :
        </label>
        <input
          required
          className="country-input"
          name="country"
          type="text"
          checked={this.state.isGoing}
          onChange={this.handleInputChange} />
        <label className="brief-label">
          Brief information about yorself:
        </label> 
        <textarea required className="brief-input" name="brief" value={this.state.value} onChange={this.handleAreaChange} />
        <label className="area-label">
          Area of scientific interest :
        </label>
        <textarea required className="area-input" name="area" value={this.state.value} onChange={this.handleAreaChange} />
        <label className="speaker-q">
          Are you speaker? :
          <input
            name="isSpeaker"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <input id="uploadInput" type="file" name="myFiles" accept="image/jpeg"></input>
        <button className="submit-button" type="submit">
              Submit
        </button>
      </form>
    );
  }
}
  

export default Registration;