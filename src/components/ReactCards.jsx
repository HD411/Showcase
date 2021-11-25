import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

function ReactCards() {
  return (
    <>
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Now_This_Logo_White.svg/1200px-Now_This_Logo_White.svg.png"
            className="react-images"
          />

          <Card.Body>
            <Card.Title>
              <h3 className="small-header">This Site!</h3>
            </Card.Title>
            <Card.Text>
              I made this site using React, by making components for these card
              sections and for the navigation bar etc and called them in on each
              page. This site is actually a one page app with me calling
              functions to change what is displayed on the screen when you press
              the nav buttons, the only time you are loading a new page is when
              you press one of the buttons to go to one of my external pages. I
              used the Bootstrap module of React to make it quicker/easier for
              me to style this app as I made it in only a few days.
            </Card.Text>
            <Button variant="primary" href="https://github.com/HD411/Showcase">
              GitHub
            </Button>
          </Card.Body>
        </Card>
        <span> </span>
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src="https://www.yankodesign.com/images/design_news/2020/12/auto-draft/bookshelves_ds_yanko_design-01.jpg"
            className="react-images"
          />
          <Card.Body>
            <Card.Title>
              <h3 className="small-header">My Current Project: Bookshelf</h3>
            </Card.Title>
            <Card.Text>
              In my spare time since I finished my course I have been practicing
              my skills by making a seperate React app. This app is designed to
              display a series of books in a database which I have made and will
              be filled using a custom API tiggered by an "add new" page on the
              app. This app still has some way to go but currently has a datbase
              in the background using MongoDB and has functions to fill data in
              but as of yet lacks the integration with the webpage to send data
              into the backend. I would like to add authentication to only allow
              certain users to push data through and the ability for each user
              to have their own bookshelf.
            </Card.Text>
            <Button variant="primary" href="/">
              Bookshelf
            </Button>
            <span> </span>
            <Button variant="primary" href="https://github.com/HD411/bookshelf">
              GitHub
            </Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
}

export default ReactCards;
