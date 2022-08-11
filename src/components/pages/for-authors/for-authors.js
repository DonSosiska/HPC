import "./for-authors.css";

const ForAuthors = (data) => {
    return (
        <div className="forAuthors">
            <div id="submission"><h1 >Submission</h1><p> Prospective authors are invited to submit conference papers or poster presentations on conference topics. </p><p> Original papers not being submitted to journals or other conferences will be considered. All submitted papers will be reviewed by the program committee to ensure their originality, significance, fundamental insights, potential long-term contribution, correctness, presentation and relevance. We encourage authors to present their work on practical studies and experiments, critique of existing works, emerging issues, and novel ideas under development. Abstracts, full papers and poster presentations must be submitted electronically after registration as a conference participant. All of the authors of each presented paper must be registered as participants of the conference for the paper to be included in the proceedings. </p><ul class="conditions__list"><span>Your submission must satisfy the following requirements:</span><li> conference papers <span class="bold">from 4 to 6 full A4 pages</span></li><li>or extended articles up to 8-15 pages.</li></ul><p> Camera-ready papers should be prepared according IEEE Conference Proceedings format. IEEE Conference Paper Template is here: <a href={data.data.templateLink[1]}>{data.data.templateLink[0]}</a></p><p> Paper submission via <a href={data.data.formLink[1]}>{data.data.formLink[0]}</a></p></div>
            
            <div id="conferenceFee"><h1 >Conference FEE</h1><p> At least one author per paper should pay a Regular Registration fee in order to publish the paper. Otherwise, the paper will not be published in the Proceedings of HPC-UA 2020. Payment should be performed after receiving the acceptance notification. All details regarding the payment process here. </p><p> {data.data.price} </p><p> Attendance of conference sessions without presentations is free of charge. Only registration is required. <a href="#">The conference participants registration form.</a></p></div>
            
            <div id="refunds" ><h1 >Refunds</h1><p> If you've registered and cannot attend please contact us via e-mail: <a href={data.data.mail}>{data.data.mail}</a> before {data.data.refundDeadline} in order to receive a full refund. We cannot issue full refunds after that date. </p></div>
            
            <div id="languages" ><h1 >Languages</h1><p>English</p></div>
            
            <div id="proceedings" ><h1 >Conference Proceedings</h1><p>Accepted papers will be published in the conference proceedings.</p></div>
            
            <div id="deadlines" ><h1 >Deadlines</h1><p> We encourage our participants to complete all the activities within time limits listed on this site. Submission and Payment deadlines are understood to be as strict as possible. It means we can allow you to violate one of these deadlines by one-two days on your special request. Please do not abuse our kindness because your punctuality is a guarantee of convenience for all the participants. </p><p> We sincerely ask you to complete your payment by {data.data.paymentDeadline}, and confirm your payment by sending a copy of the payment receipt via e-mail: <a href={data.data.mail}>{data.data.mail}</a></p></div>
            
            <div id="transfers" ><h1 >Transfers Of Registration</h1><p> If you cannot present your topic yourself but wish it to be made by someone else, please let us know via e-mail: <a href={data.data.mail}>{data.data.mail}</a> before {data.data.transferDeadline} </p></div>
            
            <div id="photography" ><h1 >Photography, Video And Quoted Text</h1><p> Your registration serves as your permission for us to use you in any event photography or video during the event for future promotional or educational ventures related to the conference. We will also want to use any tweets or quotes you make publicly. We will fully credit you if we do. </p></div>
            
            <div id="accessibility" ><h1 >Accessibility</h1><p> If you have any special needs you must inform us before the date of the conference. Please <a href="#/contacts">contact us</a> to let us know what you need. </p></div>
            
            <div id="personalData" ><h1 >Personal Data</h1><p> Your personal data (E-mail, Name, Affiliation, etc.) is used only for purposes of Organizing Committee. </p><p> We neither show E-mail or Phone fields on public site pages nor transfer them to anyone unless you explicitly allow us to do that. </p><p> Your E-mail address is used by Organizing Committee only to send short information letters regarding your participation in the conference. We do not use your E-mail to advertise any goods or services unrelated to the conference activity. </p><p> If you don't want to receive information letters from Organizing Committee please contact us in order to use an alternative way of informing or completely remove your registration profile from conference system. This will mean complete termination of any conference activities you may have at the moment. </p></div>

        </div>
    )
}

export default ForAuthors;