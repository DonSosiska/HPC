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
      <form action = 'http://localhost:3333/' method = 'POST' enctype="multipart/form-data">
        <label>
          First Name :
          <input
            name="firstName"
            type="text"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          Second Name :
          <input
            name="secondName"
            type="text"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Middle Name :
          <input
            name="middleName"
            type="text"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Email :
          <input
            name="email"
            type="email"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Phone :
          <input
            name="phone"
            type="tel"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Title of conference paper :
          <input
            name="papersTitle"
            type="text"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Country :
          <input
            name="country"
            type="text"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Brief information about yorself: 
          <textarea name="brief" value={this.state.value} onChange={this.handleAreaChange} />
        </label>
        <br />
        <label>
          Area of scientific interest :
          <textarea name="area" value={this.state.value} onChange={this.handleAreaChange} />
        </label>
        <br />
        <label>
          Are you speaker? :
          <input
            name="isSpeaker"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <input id="uploadInput" type="file" name="myFiles" accept="image/jpeg"></input>
        <button type="submit">
              Submit
        </button>
      </form>
    );
  }
}
  

export default Registration;