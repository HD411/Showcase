import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

function JSCards() {
  return (
    <>
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src="https://cdn.akamai.steamstatic.com/steam/apps/794800/capsule_616x353.jpg?t=1610536248"
            className="frontend-images"
          />

          <Card.Body>
            <Card.Title>
              <h3 className="small-header">CSS Functions Test: Cluedo</h3>
            </Card.Title>
            <Card.Text>
              I started out testing out functions and scope in JavsScript in
              this code pen environment and I created a basic way to play the
              board game 'Cluedo' using JavaScript. This little app uses scope
              so that JavaScript outside of the function cannot see the answers
              within so that you cannot cheat when guessing the answers. To
              improve this piece I would like to randomise the answers from an
              array of possible answers so that you could play it alone, also I
              could bring it out of the console and onto a page of itself.
            </Card.Text>
            <Button
              variant="primary"
              href="https://codepen.io/HD41/pen/dyWvyOp?editors=0011"
            >
              Cluedo
            </Button>
          </Card.Body>
        </Card>
        <span> </span>
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://i1.wp.com/timemanagementninja.com/wp-content/uploads/2013/09/Todo-List-board.jpg?fit=600%2C399&ssl=1"
            className="frontend-images"
          />
          <Card.Body>
            <Card.Title>
              <h3 className="small-header">To Do List Prompt</h3>
            </Card.Title>
            <Card.Text>
              (Open the console first for this one)
              <br />
              Here I began testing adding some JavaScript to a page while still
              working predominantly in the console, so to do this I used the
              prompt to send inputs into the console and allow you to call
              functions.This was an interesting little app I made but could be
              improved by bringing it out of the console and onto the page.
            </Card.Text>
            <Button
              variant="primary"
              href="https://619fbe93cff9300007e44e8d--xenodochial-hoover-17eca9.netlify.app/"
            >
              To Do List
            </Button>
          </Card.Body>
        </Card>
        <span> </span>
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://variety.com/wp-content/uploads/2021/06/Critical-Role-Legend-of-Vox-Machina-character-art.png"
            className="frontend-images"
          />
          <Card.Body>
            <Card.Title>
              <h3 className="small-header">Classes</h3>
            </Card.Title>
            <Card.Text>
              This is another console app I made, though with much more to it,
              in this I focused on working with classes which are ways to
              template objects so that they are easily remade and methods can be
              run on them. To test this I made a bunch of classes which equate
              to classes from games which helped me remember the term. Overall I
              am happy with this code pen and would like to bring it to become a
              full app with integration into the page, similarly to the other
              display pieces I have shown on this page.
            </Card.Text>
            <Button
              variant="primary"
              href="https://codepen.io/HD41/pen/bGWLjBQ?editors=0010"
            >
              Classes
            </Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
}

export default JSCards;
