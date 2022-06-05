import "./call-for-papers.css";

const CallForPapers = (data) => {
    return (
        <div className="callOfPapers">
            <h1>Call for papers</h1>
            <div className="mail">
                Information mail
                <a href={data.data.downloadLink[1]}>{" "+data.data.downloadLink[0]}</a>
            </div>
            <div className="dates">
                <h1>Important Dates</h1>
                <h5>Paper submission due :</h5>
                    <ul>
                        <li>{data.data.importantDates[0]}</li>
                    </ul>
                <h5>Final Paper Submission :</h5>
                <ul>
                    <li>{data.data.importantDates[1]}</li>
                </ul>
                <h5>Registration and full payment due :</h5>
                <ul>
                    <li>{data.data.importantDates[2]}</li>
                </ul>
                <h5>Conference Program Announcement :</h5>
                <ul>
                    <li>{data.data.importantDates[3]}</li>
                </ul>
                <h5>HPC-UA 2020:</h5>
                <ul>
                    <li>{data.data.importantDates[4]}</li>
                </ul>
            </div>
            <div className="callPapers">
                <h1 className="title">Call for Research Papers and Posters</h1>
                <div className="pad-20">
                    <p className="callforpapers__text">
                        <span className="callforpapers__span bold">Research paper submission is open!</span> 
                        Prospective authors are invited to submit conference papers or poster presentations within the range of conference topics. 
                    </p>
                    <p className="callforpapers__text"> Original papers not being submitted to journals or other conferences will be considered. All submitted papers will be reviewed by the program committee to ensure their originality, significance, fundamental insights, potential long-term contribution, correctness, presentation and relevance. We encourage authors to present their work on practical studies and experiments, critique of existing works, emerging issues, and novel ideas under development. Conference papers and poster presentations must be submitted electronically after registration as a conference participant. </p>
                    <p className="callforpapers__text"> All of the authors of each presented paper must be registered as participants of the conference via conference Web site registration form for the paper to be included in the proceedings. 
                    </p>
                    <ul className="callforpapers__papers-list">
                        <span>Your submission must satisfy the following requirements:</span>
                        <li>conference paper at least 4-6 pages,</li>
                        <li> poster presentations up to A0 size, poster must be supplemented with an abstract, including all figures, tables, and references. </li>
                    </ul>
                    <p className="callforpapers__text">Accepted papers will be published in the conference proceedings.</p>
                    <p className="callforpapers__text"> You can also submit your extended article at least 8-15 pages. Extended articles will be published in special issues of the scientific journals. The cost of publication is not included in the organizational fee. For publication of extended articles, you should contact the organizing committee via e-mail: <a href="mailto:hpc.ua.conf@gmail.com?cc=hpc.ua.conf@gmail.com" className="callforpapers__mail">hpc.ua.conf@gmail.com</a>
                    </p>
                </div>
            </div>
            <div className="callWorkshop">
                <h1 className="title">Call for Workshops / Exhibitions Section</h1>
                <div className="pad-20">
                    <p className="callforpapers__text"> Innovative products will be presented on the workshops as part of the proposed format of HPC-UA conference. The industrial exhibition will be held presenting software and hardware products ready for industrial and commercial use. Everyone, including students and young scientists with their innovative projects can take part in the workshops. Moreover, exhibitions with the participation of GlobalLogic will take place at the conference. </p>
                    <p className="callforpapers__text"> Each exhibition place will be equipped with one table, 1-2 chairs and 220V electric power supply with standard Euro-socket. Also it would be possible to stick a poster and/or make multimedia presentation. Exhibitors must bring their own computer and office equipment needed for the demonstration. </p>
                    <p className="callforpapers__text"> For authors of accepted papers an exhibition place is available free of charge. For private companies and vendors we have special exhibition package. Please contact us via e-mail: <a href="mailto:hpc.ua.conf@gmail.com?cc=hpc.ua.conf@gmail.com" className="callforpapers__mail">hpc.ua.conf@gmail.com</a> for more details. 
                    </p>
                    <ul className="callforpapers__papers-list">
                        <span>In order to participate in the exhibition please send exibition request as follows:</span>
                        <li>Name of the contact person (one of the authors);</li>
                        <li>Report title;</li>
                        <li>Name of the product or appliance;</li>
                        <li>Abstract (up to one page);</li>
                        <li>Equipment specifications (name, size, weight, power consumption);</li>
                        <li>The presence of a poster (yes, no);</li>
                        <li>The presence of a multimedia presentation (yes, no);</li>
                        <li>Availability of brochures and flyers (yes, no).</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CallForPapers;