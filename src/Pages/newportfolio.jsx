import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import project1Image from '../images/project1-image.jpg';
import project2Image from '../images/project2-image.jpg';

export default function Portfolio() {
  const portfolioItems = [
    {
      title: 'Project 1',
      description: 'Description for Project 1.',
      image: project1Image,
      link: 'https://example.com/project1',
    },
    {
      title: 'Project 2',
      description: 'Description for Project 2.',
      image: project2Image,
      link: 'https://example.com/project2',
    },
    // Add more portfolio items as needed
  ];

  return (
    <Row xs={1} md={2} className="g-4">
      {portfolioItems.map((item, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={item.image} alt={`Image for ${item.title}`} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
