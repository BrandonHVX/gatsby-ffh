import React, { useState } from "react"
import { Container, Hidden, Visible, Row, Col } from "react-grid-system"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { Modal, Button } from "react-bootstrap"
import ReactPlayer from "react-player"

// Components
import Headline from "../components/common/Headline"

const portfolio = [
  {
    name: "Feature Films",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim enim veniam,quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.",
    items: [
      {
        id: 0,
        title: "A Miami Love Story",
        link: "/portfolio-details",
        subtitle: "Web Design",
        video: "https://vimeo.com/155837247",
        src: "/assets/images/portfolio/amls.jpg",
        thumbnail: "/assets/images/portfolio/amls.jpg"
      },
      {
        id: 1,
        title: "Zoe 911",
        link: "/portfolio-details",
        video: "https://vimeo.com/user3349318",
        subtitle: "Web Design",
        src: "/assets/images/portfolio/4-2.jpg",
        thumbnail: "/assets/images/portfolio/4-2.jpg"
      },
      {
        id: 2,
        title: "Crearive Design",
        link: "/portfolio-details",
        subtitle: "Web Design",
        src: "/assets/images/portfolio/4-3.jpg",
        thumbnail: "/assets/images/portfolio/4-3.jpg"
      },
      {
        id: 3,
        title: "Crearive Design",
        subtitle: "Web Design",
        link: "/portfolio-details",
        src: "/assets/images/portfolio/4-4.jpg",
        thumbnail: "/assets/images/portfolio/4-4.jpg"
      }
    ]
  },
  {
    name: "Music Videos",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim enim veniam,quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.",
    items: [
      {
        id: 4,
        title: "Crearive Design",
        subtitle: "Mobile Apps",
        link: "/portfolio-details",
        src: "/assets/images/portfolio/4-5.jpg",
        thumbnail: "/assets/images/portfolio/4-5.jpg"
      },
      {
        id: 5,
        title: "Crearive Design",
        subtitle: "Mobile Apps",
        link: "/portfolio-details",
        src: "/assets/images/portfolio/4-6.jpg",
        thumbnail: "/assets/images/portfolio/4-6.jpg"
      },
      {
        id: 6,
        title: "Crearive Design",
        subtitle: "Mobile Apps",
        link: "/portfolio-details",
        src: "/assets/images/portfolio/4-7.jpg",
        thumbnail: "/assets/images/portfolio/4-7.jpg"
      }
    ]
  },
  {
    name: "Multi-Cam Filming",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim enim veniam,quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.",
    items: [
      {
        id: 4,
        title: "Crearive Design",
        subtitle: "Mobile Apps",
        link: "/portfolio-details",
        src: "/assets/images/portfolio/4-5.jpg",
        thumbnail: "/assets/images/portfolio/4-5.jpg"
      },
      {
        id: 5,
        title: "Crearive Design",
        subtitle: "Mobile Apps",
        link: "/portfolio-details",
        src: "/assets/images/portfolio/4-6.jpg",
        thumbnail: "/assets/images/portfolio/4-6.jpg"
      },
      {
        id: 6,
        title: "Crearive Design",
        subtitle: "Mobile Apps",
        link: "/portfolio-details",
        src: "/assets/images/portfolio/4-7.jpg",
        thumbnail: "/assets/images/portfolio/4-7.jpg"
      }
    ]
  },
  {
    name: "Branded Content",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim enim veniam,quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.",
    items: [
      {
        id: 7,
        title: "Crearive Design",
        subtitle: "Branding",
        link: "/portfolio-details",
        src: "/assets/images/portfolio/4-8.jpg",
        thumbnail: "/assets/images/portfolio/4-8.jpg"
      },
      {
        id: 8,
        title: "Crearive Design",
        subtitle: "Branding",
        link: "/portfolio-details",
        src: "/assets/images/portfolio/4-9.jpg",
        thumbnail: "/assets/images/portfolio/4-9.jpg"
      },
      {
        id: 9,
        title: "Crearive Design",
        subtitle: "Branding",
        link: "/portfolio-details",
        src: "/assets/images/portfolio/4-10.jpg",
        thumbnail: "/assets/images/portfolio/4-10.jpg"
      }
    ]
  }
]

const images = [
  {
    src: "/assets/images/portfolio/4-1.jpg"
  },
  {
    src: "/assets/images/portfolio/4-2.jpg"
  },
  {
    src: "/assets/images/portfolio/4-3.jpg"
  },
  {
    src: "/assets/images/portfolio/4-4.jpg"
  },
  {
    src: "/assets/images/portfolio/4-5.jpg"
  },
  {
    src: "/assets/images/portfolio/4-6.jpg"
  },
  {
    src: "/assets/images/portfolio/4-7.jpg"
  },
  {
    src: "/assets/images/portfolio/4-8.jpg"
  },
  {
    src: "/assets/images/portfolio/4-9.jpg"
  },
  {
    src: "/assets/images/portfolio/4-10.jpg"
  }
]
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          A Miami Love Story
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ReactPlayer url="https://vimeo.com/267535357" />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

function Portfolio() {
  const [modalShow, setModalShow] = React.useState(false)
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const toggleLightbox = index => {
    setSelectedIndex(index)
    setLightboxIsOpen(!lightboxIsOpen)
  }

  return (
    <section className="section section-portfolio section-portfolio-1">
      <div className="display-spacing">
        <Container className="container">
          <Headline
            label="Content"
            title="View our Work"
            divider_1={true}
            position="center"
          />
          <Tabs className="el-tabs el-tabs-1" selectedTabClassName="active">
            <TabList className="el-tabs-links">
              {portfolio.map((category, categoryIndex) => (
                <Tab key={categoryIndex}>{category.name}</Tab>
              ))}
            </TabList>
            {portfolio.map((category, categoryIndex) => (
              <TabPanel key={categoryIndex}>
                <section className=" section-about-1">
                  <div className="display-spacing">
                    <Container>
                      <Row>
                        <Col md={6} lg={5}>
                          <div className="about-image mb-5">
                            <img src="https://images.unsplash.com/photo-1552168324-d612d77725e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1576&q=80" />
                          </div>
                        </Col>

                        <Col md={6} lg={7}>
                          <div className="about-content">
                            <header className="el-heading mt-5">
                              <h2 className="el-icon">
                                <span className="el-icon-title">
                                  {category.name}
                                </span>
                              </h2>
                              <h3>
                                <span> {category.name}</span>
                              </h3>
                              <div className="divider divider-1"></div>
                              <p>{category.text}</p>
                            </header>
                            <Row className="pt-30"></Row>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </section>
                <Row className="row-center mb--30">
                  {category.items.map((item, index) => (
                    <Col
                      key={index}
                      xs={6}
                      sm={6}
                      md={6}
                      lg={3}
                      xl={3}
                      onClick={() => toggleLightbox(item.id)}
                    >
                      <div className="portfolio-item">
                        <div className="portfolio-card">
                          <div
                            className="image overlay-image"
                            style={{ backgroundImage: `url(${item.src})` }}
                          />
                          <div className="content">
                            <span>{item.title}</span>

                            <Button
                              variant="primary"
                              onClick={() => setModalShow(true)}
                            >
                              View Trailer
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </TabPanel>
            ))}
          </Tabs>
        </Container>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </section>
  )
}

export default Portfolio
