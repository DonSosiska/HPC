import './App.css';
import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Routes,
} from "react-router-dom"

import Home from "../pages/home/home"
import Topics from "../pages/topics/topics"
import Committees from "../pages/committees/committees"
import Program from "../pages/program/program"
import CallForPapers from "../pages/call-for-papers/call-for-papers"
import ForAuthors from "../pages/for-authors/for-authors"
import Speakers from "../pages/speakers/speakers"
import Locate from "../pages/location/location"
import Contacts from "../pages/contacts/contacts"
import Header from "../header/header"
import Footer from "../footer/footer"
import NavBar from "../nav-bar/nav-bar"

import data from "../../sources/text"
import home from "../../sources/home"
import topics from "../../sources/topics"
import committees from "../../sources/committees"
import program from "../../sources/program"
import callforpapers from "../../sources/call-for-papers.json"
import forauthors from "../../sources/for-authors"
import location from "../../sources/location"
import contacts from '../../sources/contacts';


class App extends Component {

  render() {
    return (
      <div className="bg content">
        <Header className="Header" data={data.title}/>
        <div className="App" >
          <NavBar className="nav-bar"/>

          <HashRouter basename={""} >
            <Routes>
              <Route path='/home/' element={<Home data={home}/>} />
              <Route path='/topics/' element={<Topics data={topics}/>} />
              <Route path='/committees/' element={<Committees data={committees}/>} />
              <Route path='/program/' element={<Program data={program}/>} />
              <Route path='/call-of-papers/' element={<CallForPapers data={callforpapers}/>} />
              <Route path='/for-authors/' element={<ForAuthors data={forauthors}/>} />
              <Route path='/speakers/' element={<Speakers/>} />
              <Route path='/location/' element={<Locate data={location}/>} />
              <Route path='/contacts/' element={<Contacts data={contacts}/>} />
            </Routes>
          </HashRouter>
        </div>
      <Footer className="footer" data={data.footer}/>
      </div>
    );
  }
}

export default App