import React from 'react';
import Nav from 'react-bootstrap/Nav';

function Navs() {
  let urlElements = window.location.href.split('/');
  let length = urlElements.length;
  let urlElelement = urlElements[length - 1];
  console.log(urlElelement);
  return (
    <>
      <Nav variant="tabs" defaultActiveKey={'/' + urlElelement}>
        <Nav.Item>
          <Nav.Link href="/Home">
            <h3 className="small-header">Home</h3>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Frontend">
            <h3 className="small-header">Front End</h3>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/JavaScript">
            <h3 className="small-header">JavaScript</h3>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Reactpage">
            <h3 className="small-header">React</h3>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
export default Navs;
