import { Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { Nav, NavItem, Navbar, NavbarBrand } from "reactstrap";

// import { NavbarBrand } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
export const Home = () => <div align='center'>Home Component</div>;
export const About = () => <div align='center'>About Component</div>;
export const Contact = () => <div align='center'>Contact Component</div>;
export const Profile = () => <div align='center'>Profile Component</div>;
const CustomNavbar = () => {

    return (
        <>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand tag={Link} to="/">Logo</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/" exact>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/contact">Contact</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
            {/* 
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <NavbarBrand href="#home">Navbar</NavbarBrand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar> */}
        </>



    );
};
export default CustomNavbar;
