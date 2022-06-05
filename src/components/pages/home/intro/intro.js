import Image from 'react-bootstrap/Image'
import './intro.css';

const Intro = (data)=>{
    return(
        <div className="intro">
            <h1 className="title">{data.data[0]}</h1>
            <h className="propose">{data.data[1]}</h>
            <div className="organizers">
                <div  className="glushkov organizer">
                    <h5 className="text" >V.M. Glushkov Institute of Cybernetics of NAS of Ukraine</h5>
                    <Image fluid="true" className="title-img" src={require("../../../../sources/img/NAS-logo.643a7612.jpg")}></Image>
                </div>
                <div  className="kpi organizer">
                    <h5 className="text">NTUU "Igor Sikorsky Kyiv Polytechnic Institute"</h5>
                    <Image fluid="true" className="title-img" src={require("../../../../sources/img/kpi-logo.7e0ca165.png")}></Image>
                </div>
                <div  className="gl organizer">
                    <h5 className="text">GlobalLogic Ukraine</h5>
                    <Image fluid="true" className="title-img" src={require("../../../../sources/img/globallogic-logo.de712dd4.jpg")}></Image>
                </div>
            </div>
            <h className="text">{data.data[2]}</h>
        </div>
    )
}

export default Intro