import "./footer.css";

const Footer = (data) => {
    return (
        <div className="footer">
            <h1>{data.data[0]}</h1>
            <h2>{data.data[1]}</h2>
            <h2>{data.data[2]}</h2>
        </div>
    )
}

export default Footer;