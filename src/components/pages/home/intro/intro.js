import Image from 'react-bootstrap/Image'
import './intro.css';

const Intro = (data)=>{
    console.log(data.data)
    return(
        <div>
            <h1 className="title">{data.data[0]}</h1>
            <h className="propose">{data.data[1]}</h>
            <div className="organizers">
                <div  className="glushkov">
                    <div className="text" >V.M. Glushkov Institute of Cybernetics of NAS of Ukraine</div>
                    <Image fluid="true" src={require("../../../../sources/img/NAS-logo.643a7612.jpg")}></Image>
                </div>
                <div  className="kpi">
                    <div className="text">NTUU "Igor Sikorsky Kyiv Polytechnic Institute"</div>
                    <Image fluid="true" src={require("../../../../sources/img/kpi-logo.7e0ca165.png")}></Image>
                </div>
                <div  className="gl">
                    <div className="text">GlobalLogic Ukraine</div>
                    <Image fluid="true" src={require("../../../../sources/img/globallogic-logo.de712dd4.jpg")}></Image>
                </div>
            </div>
            <h className="text">{data.data[2]}</h>
        </div>
    )
}

export default Intro