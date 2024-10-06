import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import navImage from "../../assets/navbarLogo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { AiOutlineProduct } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";

const Header = () => {
  return (
    <Navbar expand="md" className="bg-white mb-3 shadow-sm nav__wrapper">
      <Container className="align-items-center">
        <Navbar.Brand href="/">
          <div className="nav_logo_wrapper">
            <img src={navImage} alt="nav logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
              <div className="nav_logo_wrapper">
                <img src={navImage} alt="nav logo" />
              </div>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="align-items-center justify-content-between gap-5">
            <Form className="nav-form">
              <IoIosSearch size={20} className="searchIcon" />
              <Form.Control
                type="search"
                placeholder="Search for brands or products"
                className="me-2 p-2 ps-5"
                aria-label="Search"
              />
            </Form>
            <Nav className="">
              <Nav.Link
                href="/"
                className="nav_link d-flex align-items-center gap-2 font-medium"
              >
                <AiOutlineHome size={25} /> Home
              </Nav.Link>
              <Nav.Link
                href="#login"
                className="nav_link d-flex align-items-center gap-2 font-medium"
              >
                <FaRegUserCircle size={25} /> Login
              </Nav.Link>
              <Nav.Link
                href="#cart"
                className="nav_link d-flex text-3xl align-items-center gap-2 font-medium"
              >
                <LuShoppingCart size={25} /> Cart
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
