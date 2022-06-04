import "./program.css";

const renderSection = (section)=>{
    return(
        <ul className="speeches">
            <a href={section.link}>{section.link}</a>
            {Object.entries(section.schedule).map((key)=>{
                return(
                    <li>
                        {
                            Object.entries(key[1]).map((key)=>{

                                return(
                                    <div className={key[0]}>{key[1]}</div>
                                )
                            })
                        }
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
                {key[0]}
                
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
                {data.data.title}
                {data.data.organizers.map((str)=> {
                    return(<strong>{str}</strong>)
                })}
                {data.data.date}
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