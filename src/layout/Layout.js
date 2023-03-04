import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

function Layout(props){
    return <div>
                <Navbar display="flex" bg="dark" variant="light" expand="sm" className="pb-3">
                    <Container>
                        <Navbar.Brand style={{color: "#17a2b8"}}>Malin Eriksson</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ms-auto">
                                        <ul className="nav nav-tabs">
                                            <li className="nav-item"><Link to='/' className="nav-link active" data-toggle="tab" href="#home">Home</Link></li>
                                            <li className="nav-item"><Link to='/Portfolio' className="nav-link active" data-toggle="tab" href="#portfolio">Portfolio</Link></li>
                                            <li className="nav-item"><Link to='/Work' className="nav-link active" data-toggle="tab" href="#work">Work</Link></li>
                                            <li className="nav-item"><Link to='/Education' className="nav-link active" data-toggle="tab" href="#education">Education</Link></li>
                                            <li className="nav-item"><Link to='/Contact' className="nav-link active" data-toggle="tab" href="#contact">Contact</Link></li>
                                        </ul>
                                    </Nav>
                                </Navbar.Collapse>
                    </Container>
                </Navbar>
                {props.children}
            </div>
}

export default Layout;
