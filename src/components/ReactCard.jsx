import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function ReactCard() {
  return (
    <>
      <CardGroup className="area">
        <Card border="success" style={{ width: '18rem' }}>
          <div className="footnote centre">
            <Card.Img
              className="small-image"
              variant="bottom"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
            />
            <span class="transition overlay">
              <h3>Used in this app!</h3>
            </span>
          </div>

          <Card.Body>
            <Card.Title>
              <h3 className="small-header">React</h3>
            </Card.Title>
            <Card.Text>
              <p>
                React is a libary of components that allows developers to create
                large web apps which only use a single page that data is added
                or removed from, this means that the page does not need to be
                reloaded from scratch, nor does it need to call a whole new
                page.
              </p>
              <p>
                React.js is one of the most demanded frameworks on the market;
                it is now used by 31.3 percent of all professionals globally.
                Netflix, PayPal, eBay, Airbnb, and other leading IT companies
                utilise the tool to develop scalable, easy-to-maintain systems.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
}

export default ReactCard;
