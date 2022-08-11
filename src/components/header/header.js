import "./header.css";

const Header = (data) => {
    return (
        <div className="header">
            <button className="registration" onClick={()=>{
                window.location.replace('/#/registration');
            }}> Registration </button>
            <div className="text">
                <h1>{data.data[0]}</h1>
                <h2>{data.data[1]}</h2>
                <h2>{data.data[2]}</h2>
            </div>
        </div>
    )
}

export default Header;