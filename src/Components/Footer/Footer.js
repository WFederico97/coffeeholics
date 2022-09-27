import Container from "react-bootstrap/esm/Container";
import Navbar from 'react-bootstrap/Navbar';
import { RiUserHeartLine, RiLinkedinBoxFill, RiArrowUpLine } from "react-icons/ri";
import './Footer.scss'

const Footer = () => {
    return (
        <div className="fixed-bottom">
            <Navbar className="footer" >
                <Container className="justify-content-center d-flex py-3 col-12 ">
                    <Navbar.Brand className="text-white">
                    Coded with <RiUserHeartLine className="m-1" /> by  <RiLinkedinBoxFill className="m-1 " /><a href="https://www.linkedin.com/in/federico-wuthrich-668633164/" target={'_blank'} rel="noreferrer" className="text-light">Federico</a>
                    <a href="/" rel="noreferrer"><RiArrowUpLine className="backHome-icon m-1 text-light" /></a>
                    
                    </Navbar.Brand>
                    
                </Container>
            </Navbar>
        </div>
    )
}
export default Footer