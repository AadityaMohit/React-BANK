import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <Container className="about-page">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <Card className="text-center">
            <Card.Header as="h2">About SBI</Card.Header>
            <Card.Body>
              <Card.Text>
                <p>
                  <strong>State Bank of India (SBI)</strong> is the largest and oldest bank in India, with a rich history that dates back over two centuries. As a trusted financial institution, SBI has been at the forefront of banking innovation and customer service.
                </p>
                <p>
                  Our mission is to offer accessible and affordable banking solutions to individuals and businesses, helping them achieve their financial goals. We are committed to maintaining the highest standards of integrity and transparency in all our operations.
                </p>
                <p>
                  At SBI, we believe in the values of customer satisfaction, continuous improvement, and community development. Our dedicated team works tirelessly to provide personalized services and products that meet the evolving needs of our diverse clientele.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-4">
        <Col md={8}>
          <Card className="text-center">
            <Card.Header as="h3">Our History</Card.Header>
            <Card.Body>
              <Card.Text>
                <p>
                  SBI traces its roots to the early 19th century, beginning with the establishment of the Bank of Calcutta in 1806. Over the years, through mergers and acquisitions, it evolved into the State Bank of India in 1955.
                </p>
                <p>
                  With a presence in over 30 countries, SBI has grown to become a global banking giant, recognized for its robust financial services and community-oriented approach.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-4">
        <Col md={8}>
          <Card className="text-center">
            <Card.Header as="h3">Our Mission and Values</Card.Header>
            <Card.Body>
              <Card.Text>
                <p>
                  <strong>Mission:</strong> To be a preferred bank by delivering top-notch financial solutions and services.
                </p>
                <p>
                  <strong>Values:</strong> Customer-centricity, Integrity, Excellence, Innovation, and Community Service.
                </p>
                <p>
                  We strive to create a positive impact on society by supporting sustainable development and financial inclusion initiatives.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
