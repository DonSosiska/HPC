import "./speakers.css";
import { Component } from "react";
import {Card} from "react-bootstrap"

class Speakers extends Component {
    constructor() {
      super()
      this.state = { list: [] }
    }
    
    renderList(){
        if (this.state.list.success === true){
            return(
                Object.entries(this.state.list.data).map((item)=>{
                    return(
                        <Card className="speakersListItem" id={item[1].id}>
                          <div className="speakerPhoto"><Card.Img variant="left" src={(item[1].photo === null) ? require("../../../sources/img/_D72Bty5_400x400.jpg") :item[1].photo} style={{ width: '300px', height: '300px'}}/></div>
                          <Card.Body>
                            <Card.Title><strong>{item[1].name}</strong></Card.Title>
                            <Card.Text>
                              <div className="speakerOrganization">
                                <small>{item[1].organization}</small>
                              </div>
                              <div className="speakerArea">
                                {item[1].areaOfScientificInterest}
                              </div>
                              <div className="speakerInfo">
                                {item[1].informationAboutYourself}
                              </div>
                              <div className="speakerCountry">
                                <strong>{item[1].country}</strong>
                              </div>
                              <div className="speakerTheme">
                                {item[1].theme}
                              </div>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                    )
                })
            )
        }
    }

    componentDidMount() {
      var myRequest = new Request("https://conference.kpi-connect.cf/api/participants");
  
      fetch(myRequest)
        .then(response => response.json())
        .then(data => {
          this.setState({ list: data })
        })
    }
  
    render() {
      return (
        <div className="speakers">
          <h1>Participants</h1>
          {this.renderList()}
        </div>
      )
    }
  }


export default Speakers;