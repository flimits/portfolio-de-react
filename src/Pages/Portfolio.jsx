import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import project1Image from '../images/gonuts_donuts.png'

export default function Portfolio() {
  const portfolios = [
    {
      title: 'Project 1',
      description: 'This project focused on making the best donut finder site in town, Complete with recipes and search',
      myImage: project1Image,
      link: 'https://github.com/flimits/gonutzfordonutz'
    }
  ]
  // What this below is doing is the xs helps small screens to display in columns.
  // The md is for medium size screens and will display 2 columns on the screen.
  // g-4 is a react spacing called gutter and sets spacing between items
  return (
    <Row xs={1} md={2} className="g-4">
      {portfolios.map((item, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={item.myImage} alt={`Image for ${item.title}`} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {item.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}