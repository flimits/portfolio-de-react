import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../App.css';

// Place all information about my projects here in individual arrays
import project1Image from '../images/gonuts_donuts.png';
import project2Image from '../images/horiseon_homework_front_page.jpg';
import project3Image from '../images/deer.jpeg';

export default function Portfolio() {
  const portfolios = [
    {
      title: 'Project 1',
      description: 'This project focused on making the best donut finder site in town, Complete with recipes and search.',
      myImage: project1Image,
      link: 'https://github.com/flimits/gonutzfordonutz'
    },
    {
      title: 'Challenge Horiseon',
      description: 'The challenge for this task was to take given css and html and updated it to have accessibility and fix some mistakes in it.',
      myImage: project2Image,
      link: 'https://github.com/flimits/project-horiseon'
    },
    {
      title: 'Border Project',
      description: 'This was a simple web page in the beginning to learn how to build borders around an image and add some text.',
      myImage: project3Image,
      link: 'https://github.com/flimits/project26'
    }
  ]
  // What this below is doing is the xs helps small screens to display in columns.
  // The md is for medium size screens and will display 2 columns on the screen.
  // g-4 is a react spacing called gutter and sets spacing between items
  return (
    <Row xs={1} md={2} className="g-4">
      {portfolios.map((item, idx) => (
        <Col key={idx}>
          <Card className="portfolio-card">
            <Card.Img className="portfolio-image" variant="top" src={item.myImage} alt={`Image for ${item.title}`} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <a href={item.link} target="_blank" rel="noopener noreferrer">Find Out More Here</a>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}