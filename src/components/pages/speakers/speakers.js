import "./speakers.css";
import { Component } from "react";

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
                        <li id={item[1].id}>
                            <div>{item[1].name}</div>
                            <div>{item[1].organization}</div>
                            <div>{item[1].areaOfScientificInterest}</div>
                            <div>{item[1].informationAboutYourself}</div>
                            <div>{item[1].country}</div>
                            <div>{item[1].theme}</div>
                        </li>
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
        <ul className="speakers">
          {this.renderList()}
        </ul>
      )
    }
  }


export default Speakers;