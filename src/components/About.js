import React from "react"
import { Container, Hidden, Row, Col } from "react-grid-system"

function About() {
  return (
    <section className="section section-about section-about-1">
      <div className="display-spacing">
        <Container>
          <Row>
            <Col md={6} lg={5} className="order-1 order-lg-2">
              <div className="about-content">
                <header className="el-heading">
                  <h2 className="el-icon">
                    <span className="el-icon-title">ABOUT US</span>
                  </h2>
                  <h3>
                    <span>Florida Film House</span>
                  </h3>
                  <div className="divider divider-1"></div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim enim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                  </p>
                </header>
              </div>
            </Col>
            <Col md={6} lg={5} className="order-1 order-lg-1 ">
              <div className="about-image mb-5">
                <img src="https://images.unsplash.com/photo-1552168324-d612d77725e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1576&q=80" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default About
