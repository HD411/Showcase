import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

function FrontEndCards() {
  return (
    <>
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src="https://monophy.com/media/7lj9StQun6f8WjjNL1/monophy.gif"
            className="frontend-images"
          />

          <Card.Body>
            <Card.Title>
              <h3 className="small-header">First CSS tests</h3>
            </Card.Title>
            <Card.Text>
              This was a playground I used to try several different CSS
              features, predominantly animations and SVG's. This was one of my
              first attempts at designing a page with CSS and, whilst it is very
              rough around the edges I am still quite proud of some parts of it
              such as the waves at the top and the tenticles at the bottom and
              it is even responsive.
            </Card.Text>
            <Button
              variant="primary"
              href="https://60bd3a677dcd20a1de8e6042--objective-benz-0ee5cd.netlify.app/"
            >
              View Sea World
            </Button>
          </Card.Body>
        </Card>
        <span> </span>
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://opp-gen.com/wp-content/uploads/2021/05/Untitled-1.png"
            className="frontend-images"
          />
          <Card.Body>
            <Card.Title>
              <h3 className="small-header">Hommage Piece</h3>
            </Card.Title>
            <Card.Text>
              To cap off the CSS learning I recreated a website in Html and CSS
              with the intent to copy an existing website with interesting CSS.
              In this piece I took the time to make sure that I copied even the
              responsiveness of the site. Some features of the website I chose
              were done in JavaScript and so I was not able to copy the site
              exactly, however I think I got quite accurate to the original.
            </Card.Text>
            <Button
              variant="primary"
              href="https://60e23a9974fefbb0fe200475--homage-piece.netlify.app/"
            >
              My Hommage
            </Button>
            <span> </span>
            <Button
              variant="primary"
              href="https://www.niarratravel.com/europe/"
            >
              Original
            </Button>
          </Card.Body>
        </Card>
        <span> </span>
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://jamiemckaye.com/media/posts/7/dvd-logos-screensaver.png"
            className="frontend-images"
          />
          <Card.Body>
            <Card.Title>
              <h3 className="small-header">JavaScript Animation</h3>
            </Card.Title>
            <Card.Text>
              When testing some JavaScript funtionality I toyed with some
              animations from base JavaScript and the GSAP framework. From this
              testing I created a small randomised animation, taking inspitation
              from the old DVD screensaver. It took some working and there are
              ways to improve it, but I am pretty proud of this little
              animation.
            </Card.Text>
            <Button
              variant="primary"
              href="https://codepen.io/HD41/pen/OJgddXo"
            >
              DVD
            </Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
}

export default FrontEndCards;
