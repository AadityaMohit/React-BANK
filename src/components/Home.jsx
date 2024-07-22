import React from 'react';
import { Carousel, Container, Row, Col, Button, Form } from 'react-bootstrap';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBuilding, faMoneyBillWave, faCreditCard, faNewspaper, faSignInAlt, faGift } from '@fortawesome/free-solid-svg-icons';
import B1 from '../assets/asset/b1.jpeg'
import B2 from '../assets/asset/sbi.jpeg'
import B3 from '../assets/asset/sbi3.jpeg'

const Home = () => {
  return (
    <>

    <main className="home">
      <section className="welcome-section">
        <h2>Welcome to SBI</h2>
        <p>Your trusted banking partner.</p>
      </section>

      <section className="carousel-section">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={B3}
              alt="First slide"
            />
            <Carousel.Caption>
            
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={B2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>New Branch Opening</h3>
              <p>Visit our new branch in New Delhi for all your banking needs.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={B1}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Interest Rate Updates</h3>
              <p>Stay informed about the latest interest rate changes.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      <section className="services-section">
        <h3>Our Services</h3>
        <div className="services">
          <div className="service">
            <FontAwesomeIcon icon={faUser} size="2x" />
            <h4>Personal Banking</h4>
            <p>Manage your personal finances with ease.</p>
          </div>
          <div className="service">
            <FontAwesomeIcon icon={faBuilding} size="2x" />
            <h4>Corporate Banking</h4>
            <p>Solutions tailored for businesses of all sizes.</p>
          </div>
          <div className="service">
            <FontAwesomeIcon icon={faMoneyBillWave} size="2x" />
            <h4>Loans</h4>
            <p>Find the right loan to meet your needs.</p>
          </div>
          <div className="service">
            <FontAwesomeIcon icon={faCreditCard} size="2x" />
            <h4>Credit Cards</h4>
            <p>Choose from a variety of credit card options.</p>
          </div>
        </div>
      </section>

      <section className="news-section">
        <h3>Latest News</h3>
        <div className="news">
          <article>
            <FontAwesomeIcon icon={faNewspaper} size="2x" />
            <h4>New Branch Opening</h4>
            <p>We are excited to announce the opening of our new branch in New Delhi.</p>
          </article>
          <article>
            <FontAwesomeIcon icon={faNewspaper} size="2x" />
            <h4>Interest Rate Update</h4>
            <p>Check out the latest updates on our interest rates for savings accounts.</p>
          </article>
        </div>
      </section>

      <section className="login-signup-section">
        <h3>Access Your Account</h3>
        <Container>
          <Row>
            <Col>
              <h4>Login</h4>
              <Form>
                <Form.Group controlId="loginEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="loginPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  <FontAwesomeIcon icon={faSignInAlt} /> Login
                </Button>
              </Form>
            </Col>
            <Col>
              <h4>Sign Up</h4>
              <Form>
                <Form.Group controlId="signupName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter full name" />
                </Form.Group>
                <Form.Group controlId="signupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="signupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="success" type="submit">
                  <FontAwesomeIcon icon={faSignInAlt} /> Sign Up
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="promo-section">
        <h3>Promotions</h3>
        <div className="promo">
          <FontAwesomeIcon icon={faGift} size="2x" />
          <p>Special offer: Get a 5% cashback on all online purchases with our SBI credit card.</p>
        </div>
      </section>
    </main>
    </>
  );
}

export default Home;
