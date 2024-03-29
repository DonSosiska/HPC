import "./contacts.css";

const Contacts = (data) => {
    return (
        <section className="contacts">
            <div className="container">
                <div className="contacts__content">
                    <div className="title--gray">
                        <h1>CONTACTS</h1>
                    </div>
                    <div className="contacts__inner">
                        <p className="contacts__text">
                            <span className="display-block">
                                Оrganizing committee
                            </span> E-mail: 
                            <a href={data.data.mail}>{data.data.mail}</a>
                        </p>
                        <p className="contacts__text">
                            <span className="bold">
                                Vadim Tulchinsky
                            </span>
                            , Glushkov Institute of Cybernetics 
                            <ul className="display-block">
                                {data.data.glushkovPhones.map((item)=>{return(<li>{item}</li>)})}
                            </ul>
                        </p>
                        <p className="contacts__text">
                            <span className="bold">
                                Valentyna Tkachenko
                            </span>
                            , Igor Sikorsky Kyiv Polytechnic Institute 
                            <ul className="display-block">
                                {data.data.kpiPhones.map((item)=>{return(<li>{item}</li>)})}
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts;