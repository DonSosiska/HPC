import "./nav-bar.css";
import { Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <div>
            <Nav
                fill
                defaultActiveKey="link-1"
                variant="tabs"
                className="justify-content-center"
            >
                <Nav.Item>
                    <Nav.Link eventKey="link-1" href="#/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" href="#/topics">Topics</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3" href="#/committees">Committees</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-4" href="#/program">Program</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-5" href="#/call-of-papers">Call of papers</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-6" href="#/for-authors">For authors</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-7" href="#/speakers">Speakers</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-8" href="#/location">Location</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-9" href="#/contacts">Contacts</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}



export default NavBar;