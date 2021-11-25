import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function LanguagesCards() {
  return (
    <>
      <h2 className="medium-header">Languages</h2>
      <br />
      <CardGroup>
        <Card border="danger" style={{ width: '18rem' }}>
          <div className="footnote centre">
            <Card.Img
              variant="top"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png"
            />
            <span class="transition overlay">
              <h3>Structure</h3>
            </span>
          </div>
          <Card.Body>
            <Card.Title>
              <h3 className="small-header">Html</h3>
            </Card.Title>
            <Card.Text>
              Html (HyperText Markup Language) is the basis of websites and
              forms the backbone of my coding knowledge. This language is fairly
              simple and easy to use but allows you to add various elements to a
              page from forms to tables to paragraphs.
            </Card.Text>
          </Card.Body>
        </Card>
        <span> </span>
        <Card border="primary" style={{ width: '18rem' }}>
          <div className="footnote centre">
            <Card.Img
              variant="top"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
            />
            <span class="transition overlay">
              <h3>Style</h3>
            </span>
          </div>
          <Card.Body>
            <Card.Title>
              <h3 className="small-header">CSS</h3>
            </Card.Title>
            <Card.Text>
              CSS (Cascading Style Sheets) is where the visual design of
              websites comes in. This language is fairly easy to use but is
              expansive, allowing you to control every fine detail surrounding
              the look and feel of a website from colour to shape to layout CSS
              controls it all.
            </Card.Text>
          </Card.Body>
        </Card>
        <span> </span>
        <Card border="warning" style={{ width: '18rem' }}>
          <div className="footnote centre">
            <Card.Img
              variant="top"
              src="https://www.ocpsoft.org/wp-content/uploads/2013/01/javascript_logo_unofficial.png"
            />
            <span class="transition overlay">
              <h3>Behaviour</h3>
            </span>
          </div>
          <Card.Body>
            <Card.Title>
              <h3 className="small-header">JavaScript</h3>
            </Card.Title>
            <Card.Text>
              JavaScript is the most complex of these coding languages and it
              controls the internal logic of applications that will take in
              data, process it and return the desired result to the console or
              to the front end. This is the language the controls what happens
              when you press a button or add some data.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
}

export default LanguagesCards;
