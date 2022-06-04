import "./header.css";
import Registration from "./registration/registration"

const Header = (data) => {
    return (
        <div className="header">
            <div className="free"></div>
            <Registration className="registration"/>
            <div className="text">
                <h1>{data.data[0]}</h1>
                <h2>{data.data[1]}</h2>
            </div>
        </div>
    )
}

export default Header;