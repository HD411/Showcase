import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function Skills() {
  return (
    <>
      <h2 className="medium-header">Other Skills</h2>
      <Accordion defaultActiveKey="0" className="area">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h3 className="small-header">Git</h3>
          </Accordion.Header>
          <Accordion.Body>
            Git (Global Information Tracker) is a way for developers to keep
            track of changes to a set of files, this can be useful for
            coordinating work within a team to see who made what changes and
            when, or even to rollback to previous changes. GitHub is the primary
            way developers use to manage their repositorys.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h3 className="small-header">API</h3>
          </Accordion.Header>
          <Accordion.Body>
            API's (application program interface) are ways for the frontend of
            an application to access the backend. I am most familiar with
            RESTful API's which is an architectural style for an API that uses
            HTTP requests to access and use data. That data can be used to GET,
            PUT, POST and DELETE data types, is used to perform CRUD (Create,
            Read, Update, Delete) data in the back end and then present the
            changes to the frontend.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h3 className="small-header">Backend</h3>
          </Accordion.Header>
          <Accordion.Body>
            The backend is the non-client facing side of web design, primarily
            databases which store information and permissions that the user of
            an application cannot access without using an API. The backend
            itself can be written in SQL or non-SQL, This can be done yourself
            or hosted by cloud service providers or use Serverless technology.
            In my case I mostly used a system called MongoDB which is a non SQL
            database.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h3 className="small-header">Node.Js</h3>
          </Accordion.Header>
          <Accordion.Body>
            Node allows developers to write JavaScript code that runs directly
            in a computer process itself instead of in a browser. Node can,
            therefore, be used to write server-side applications with access to
            the operating system, file system, and everything else required to
            build fully-functional applications.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h3 className="small-header">Dev-Ops</h3>
          </Accordion.Header>
          <Accordion.Body>
            DevOps is a set of practices and tools that are used to improve and
            streamline software development. DevOps can include strategies from
            Agile, Waterfall, Scrum etc and can use tools such as KanBans, ERD's
            and many others that attempt to improve development production.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default Skills;
