import "./home.css";
import { Toast, ToastHeader } from "react-bootstrap"
import List from "./list/list"



const Home = (data) => {

    return (
        <div className="home">
            <div className="banner">{ }</div>
            <div className="intro">{data.data.title + "\n" + data.data.propose + "\n" + data.data.text}</div>
            <div className="ads">{
                Object.entries(data.data.ads).map((value) => {
                    let body = () => { if (typeof (value[1]) === "string") return value[1]; else return <ul><List data={value[1]}/></ul>
                    }
                    return (
                        <Toast>
                            <ToastHeader closeButton="">
                                <strong className="me-auto">{value[0]}</strong>
                            </ToastHeader>
                            <Toast.Body> {body()} </Toast.Body>
                        </Toast>
                    )
                }
                )

            }
            </div>
            <div className="significant-dates">{data.data.significant}</div>
            <div className="topics">{data.data.topics}</div>
            <div className="parthners">{data.data.parthners}</div>
        </div>
    )
}

export default Home;




