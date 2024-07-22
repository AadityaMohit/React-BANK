import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Services.css';
import personalBankingImg from '../assets/asset/psbi.jpeg';
import corporateBankingImg from '../assets/asset/psbi2.jpeg';
import loansImg from '../assets/asset/psbi4.jpeg';
import creditCardsImg from '../assets/asset/psbi3.jpeg'

const services = [
  {
    title: "Personal Banking",
    description: "Manage your personal finances with ease.",
    img: personalBankingImg
  },
  {
    title: "Corporate Banking",
    description: "Solutions tailored for businesses of all sizes.",
    img: corporateBankingImg
  },
  {
    title: "Loans",
    description: "Find the right loan to meet your needs.",
    img: loansImg
  },
  {
    title: "Internet Serice",
    description: "Choose from a variety of credit card options.",
    img: creditCardsImg
  }
];

const Service = () => {
  return (
    <>
    <Container className="services-page">
      <h2 className="text-center my-4">Our Services</h2>
      <Row>
        {services.map((service, index) => (
          <Col md={6} lg={4} className="mb-4" key={index}>
            <Card className="service-card">
              <Card.Img variant="top" src={service.img} />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
         <div className="cta-section">
         <h2>Ready to Get Started?</h2>
         <p>Contact us today to learn more about our services and how we can help you achieve your financial goals.</p>
         <button className="cta-button">Contact Us</button>
       </div>
     
     </>
  );
}

export default Service;
