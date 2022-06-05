import "./committees.css";

const isNextList = (item) => {
    if (typeof (item[1]) !== "string") {
        return item[0]
    }
}

const body = (item) => {
    if (typeof (item[1]) === "string")
        return (<li>{item[1]}</li>); else return (
            isNextList(item),
            <ul className="committee-list">
                <h4>{item[0]}</h4>
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
    return (
        <div className="committees">
            {
                Object.entries(data.data).map((item) => {
                    return (
                        <div className="committee-block">
                            <h1>{item[0]}</h1>
                            {Object.entries(item[1]).map((item) => {
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

