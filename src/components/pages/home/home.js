import "./home.css";
import { Toast, ToastHeader } from "react-bootstrap"
import Image from 'react-bootstrap/Image'
import Intro from './intro/intro'

const renderLink = (linkData) => {
    return (linkData.map((el) => {
        return (
            <li><a href={el}>{el + " "}</a></li>
        )
    })
    )
}

const renderDiffLink = (linkData) => {
    return (
        linkData.map((link) => {
            return(<li><a href={link.split('/href')[1].slice(1, -1)}> { link.split('/href')[0].slice(6, -1) }</a></li>)
        })
    )
}


const Home = (data) => {

    return (
        <div className="home">
            <Image className="banner" src={require("../../../sources/img/baner1.91f1427e.jpeg")}></Image>
            <Intro data={[data.data.title, data.data.propose, data.data.text]}> </Intro>
            <div className="ads">{
                Object.entries(data.data.ads).map((value) => {
                    return (
                        <Toast>
                            <ToastHeader closeButton="">
                                <strong className="me-auto">{value[0]}</strong>
                            </ToastHeader>
                            <Toast.Body>
                                {value[1].map((el) => { if (typeof (el) === "string") return <div>{el}</div>; else return renderLink(el) })}
                            </Toast.Body>
                        </Toast>
                    )
                }
                )

            }
            </div>
            <div className="significant-dates">
                <h1>Significant Dates</h1>
                <h>{data.data.significant[0]}</h>
                <ul>{renderDiffLink(data.data.significant[1])}</ul>
            </div>
            <div className="topics-home">
                <h1>Topics</h1>
                <ul>
                    {data.data.topics.map((el) => {
                        return (
                            <li>
                                {el}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="parthners">
                <h1>Parthenrs</h1>
                {data.data.parthners.map((el) => {
                    return (
                        <div>
                            {el[0]}
                            <ul>
                                {renderLink(el[1])}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;




