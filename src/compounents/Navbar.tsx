import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { Link, NavLink} from "react-router-dom"
import {FaShoppingCart} from "react-icons/fa"
import { CustomHook } from "../context/ContextProvider";

    const Navbar = () => {

        const {card, openCard} = CustomHook();

    return (

    <NavbarBs sticky="top" style={{height:"90px"}} className="bg-white shadow-sm mb-3 fs-5">
        <Container> 
            <Nav className="me-auto">
                <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                <Nav.Link to="/about" as={NavLink}>
                    About
                </Nav.Link>
                <Nav.Link to="/store" as={NavLink}>
                    Store
                </Nav.Link>
            </Nav>
            {card.length > 0 && <Button onClick={() => {
                openCard();
            }} style={{width:"50px", height:"50px", position:"relative"}} variant="outline-primary" className=" rounded-circle fs-5"><FaShoppingCart/>
                <div style={{width:"25px", height:"25px", position:"absolute",right:"0", fontSize:"16px", color:"white"}} className="rounded-circle bg-danger"> {card.length}</div>
            </Button>}
        </Container>
    </NavbarBs>
        
        
    )
    }

    export default Navbar