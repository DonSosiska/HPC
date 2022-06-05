import "./topics.css";
import { Card } from "react-bootstrap";

function* colors() {
    let colorList = ['Primary', 'Secondary', 'Success', 'Danger', 'Warning', 'Info']
    let i = 0
    while (i <= 5){
        yield colorList[i] 
        if ((i+1)!==6)i++; else i=0
    }        
}

let gen = colors()

const Topics = (data) => {        
    return (
    <div className="topics">
        {Object.entries(data.data).map((item)=>{
            let color = gen.next().value
            let block = Object.entries(item).map((item)=>{
                let card = new Map()
                if (item[0] === '1'){
                    for (let a in item[1]){
                        card.set(
                            <Card 
                                border={color.toLowerCase()}
                                className="mb-2"
                            >
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
                <div className="block">
                    <h className="block-name">{item[0]}</h>
                    {block}
                </div>
                )
        }
        )}
    </div>
    )}

export default Topics;