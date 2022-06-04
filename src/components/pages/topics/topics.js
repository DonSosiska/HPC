import "./topics.css";
import { Card } from "react-bootstrap";



const Topics = (data) => {        
    return (
    <div className="topics">
        {Object.entries(data.data).map((item)=>{
            let block = Object.entries(item).map((item)=>{
                let card = new Map()
                if (item[0] === '1'){
                    for (let a in item[1]){
                        card.set(
                            <Card style={{backgroundColor: ""}}>
                            <Card.Body>
                                <Card.Title>{a}</Card.Title>
                                <Card.Text>
                                {item[1][a].valueOf()}
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        )
                }}
                return(card)
            }
            )
            return(
            <div className="block">{block}</div>
                )
        }
        )}
    </div>
    )}

export default Topics;