
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

function Header() {
    return (
          <Navbar bg="dark" className="head" variant="dark">
            <Container>
              <h1><Navbar.Brand href="#home" >高本電業株式会社</Navbar.Brand></h1>
              <Nav className="float right">
                <Nav.Link href="#top">トップ</Nav.Link>
                <Nav.Link href="#business">事業内容</Nav.Link>
                <Nav.Link href="#company">会社概要</Nav.Link>
                <Nav.Link href="#access">お問い合わせ</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
      );
}

export default Header;