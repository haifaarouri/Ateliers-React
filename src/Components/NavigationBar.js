import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { Container } from 'react-bootstrap';

export default function NavigationBar() {
    return(
        // <Navbar bg="light" expand="lg">
        //     <Container>
        //         <Nav className="me-auto">
        //             <Nav.Link>
        //                 My Store
        //             </Nav.Link>
        //             <Nav.Link>
        //                 <NavLink 
        //                 to="/products"
        //                 style={({ isActive }) => ({textDecoration: isActive ? "underline" : "none"})}>Products</NavLink>
        //             </Nav.Link>
        //         </Nav>
        //     </Container>
        // </Navbar>);
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand to="/products">MyStore</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/products" style={({isActive})=>({textDecoration:isActive&&'underline'})}>Products</Nav.Link>
                </Nav>
            </Container>
        </Navbar>);
   }