import "./committees.css";

const isNextList = (item) => {
    console.log("+")
    if (typeof (item[1]) !== "string") {
        return item[0]
    }
}

const body = (item) => {
    if (typeof (item[1]) === "string")
        return (<li>{item[1]}</li>); else return (
            isNextList(item),
            <ul className="committee-list">
                {item[0]}
                {
                    Object.entries(item[1]).map((item) => {
                        return (
                            <li>
                                {item[1]}
                            </li>
                        )
                    })
                }
            </ul>)
}


const Committees = (data) => {
    console.log(data.data)
    return (
        <div className="committees">
            {
                Object.entries(data.data).map((item) => {
                    console.log(item)
                    return (
                        <div className="committee-block">{
                            item[0]}{
                                Object.entries(item[1]).map((item) => {
                                    return (
                                        body(item)
                                    )
                                })
                            }
                        </div>)
                })
            }
        </div>
    )
}

export default Committees;

