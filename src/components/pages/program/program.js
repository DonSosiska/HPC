import "./program.css";

const renderSection = (section)=>{
    return(
        <ul className="speeches">
            <a href={section.link}>{section.link}</a>
            {Object.entries(section.schedule).map((key)=>{
                return(
                    <li className="topicInfo">
                        <h4>{key[1].time}</h4>
                        <strong>{key[1].topicName}</strong>
                        <small>{key[1].organization}</small>
                        <strong>{key[1].speaker}</strong>
                    </li>
                )
        })}
        </ul>
       
    )
}

const renderSchedule = (sections)=>{
    return(
        Object.entries(sections).map((key)=>{
            return(
            <div className="section">
                <h4>{key[0]}</h4>
                {renderSection(key[1])}
            </div>)
        })
    )
}

const Program = (data) => {
    return (
        <div className="program">
            <h1>Program</h1>
            <div className="title">
                <h4>{data.data.title}</h4>
                {data.data.organizers.map((str)=> {
                    return(<strong>{str}</strong>)
                })}
                <h2>{data.data.date}</h2>
            </div>
            <div className="schedule">
                {
                   renderSchedule(data.data.sections)
                }
            </div>
        </div>
    )
}

export default Program;