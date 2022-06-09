import "./header.css";

const Header = (data) => {
    return (
        <div className="header">
            <button className="registration" onClick={()=>{
                window.location.replace('/#/registration');
            }}/>
            <div className="text">
                <h1>{data.data[0]}</h1>
                <h2>{data.data[1]}</h2>
            </div>
        </div>
    )
}

export default Header;