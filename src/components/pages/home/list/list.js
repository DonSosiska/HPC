




const List = (data) => {
    return (
            Object.entries(data.data).map((value) => {
                return(
                    <li>
                        <strong>{value[0]}</strong>
                        <div>{value[1]}</div>
                    </li>)}
            ))
        }

export default List;