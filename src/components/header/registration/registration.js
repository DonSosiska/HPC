import "./registration.css";
import { Modal, Button } from "react-bootstrap";
import React, { useState } from 'react';

function Registration() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Registration
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>PARTICIPATION REQUEST</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form method="post" name="form" className="form-signin">
              <div className="input-field">
                <label htmlFor="name_of_participant">First name: *</label>
                <input type="text" name="name_of_participant" className="form-styling"/>
              </div>
              <div className="input-field">
                <label htmlFor="name_of_participant">Second name: *</label>
                <input type="text" name="name_of_participant" className="form-styling"/>
              </div>
              <div className="input-field">
                <label htmlFor="name_of_participant">Middle name: *</label>
                <input type="text" name="name_of_participant" className="form-styling"/>
              </div>
              <div className="input-field">
                <label htmlFor="email">Email: *</label>
                <input type="email" name="email" className="form-styling"/>
              </div>
              <div className="input-field">
                <label htmlFor="phone">Phone: *</label>
                <input data-v-501af2f4="" type="tel" placeholder="start with your country code" className="form-styling"/>
                <span data-v-05fb4d45="" data-v-501af2f4="" className="flag flag-ua normal-flag flag-example"></span>
              </div>
              <div className="input-field">
                <label htmlFor="organization">Organization: *</label>
                <input type="text" name="organization" className="form-styling"/>
              </div>
              <div className="input-field">
                <label htmlFor="authors_of_conference_paper">TITLE OF CONFERENCE PAPER: *</label>
                <input type="text" name="authors_of_conference_paper" className="form-styling"/>
              </div>
              <div className="input-field">
                <label htmlFor="country">Country: *</label>
                <input type="text" name="country" autoComplete="off" className="form-styling"/>
              </div>
              <div className="input-field">
                <label htmlFor="info_about_yourself">Brief information about yourself:</label>
                <textarea name="info_about_yourself" id="" cols="30" rows="15"></textarea>
              </div>
              <div className="input-field">
                  <label htmlFor="scientific_interest">Area of scientific interest: *</label>
                <textarea name="scientific_interest" id="" cols="30" rows="15" className=""></textarea>
              </div>
              <div className="input-field checkbox-container">
                <input type="checkbox" id="isSpeaker"/>
                <label htmlFor="isSpeaker">Are you speaker ?</label>
              </div>
              <div className="input-field">
                <label htmlFor="photo">Photo:</label>
                <label htmlFor="photo" className="label_photo">Choose your photo</label>
                <input type="file" accept="image/*" id="photo" name="photo" multiple="multiple" className="photo"/>
              </div>
              <Button type="submit" variant="primary" className="btn-signup">Sign Up</Button> 
              </form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  

export default Registration;