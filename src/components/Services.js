import React, { useState } from "react"
import { Container, Hidden, Visible, Row, Col } from "react-grid-system"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

// Components
import Headline from "../components/common/Headline"

const portfolio = [
  {
    name: "Film Studio",
    src:
      "https://secureservercdn.net/198.71.233.214/489.7bf.myftpupload.com/wp-content/uploads/2017/07/SONStudiosInteriors2020-0092-scaled.jpg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim enim veniam,quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.",

    items: [
      {
        id: 0,
        title: "Location",
        link: "/portfolio-details",
        subtitle: "Film Studio",
        src: "/assets/images/portfolio/4-1.jpg",
        thumbnail: "/assets/images/portfolio/4-1.jpg",
        image: "/assets/images/demo/feature-4.png"
      },
      {
        id: 1,
        title: "Equipment",
        link: "/portfolio-details",
        subtitle: "Film Studio",
        src: "/assets/images/portfolio/4-2.jpg",
        thumbnail: "/assets/images/portfolio/4-2.jpg",
        image: "/assets/images/demo/feature-4.png"
      },
      {
        id: 2,
        title: "Services",
        link: "/portfolio-details",
        subtitle: "Film Studio",
        src: "/assets/images/portfolio/4-3.jpg",
        thumbnail: "/assets/images/portfolio/4-3.jpg",
        image: "/assets/images/demo/feature-4.png"
      }
    ]
  },
  {
    name: "Production Crew",
    src:
      "https://images.unsplash.com/photo-1553165345-b273d826eb5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim enim veniam,quis nostrud exercitation ulslamco laboris nisi utaliquip ex ea commodo consequat.",
    items: [
      {
        id: 4,
        title: "Camera Department",
        subtitle: "Mobile Apps",
        link: "/portfolio-details",
        src: "/assets/images/portfolio/4-5.jpg",
        thumbnail: "/assets/images/portfolio/4-5.jpg"
      },
      {
        id: 5,
        title: "Lighting & Grip",
        subtitle: "Mobile Apps",
        link: "/portfolio-details",
        src: "/assets/images/portfolio/4-6.jpg",
        thumbnail: "/assets/images/portfolio/4-6.jpg"
      },
      {
        id: 6,
        title: "Production Staff",
        subtitle: "Mobile Apps",
        link: "/portfolio-details",
        src: "/assets/images/portfolio/4-7.jpg",
        thumbnail: "/assets/images/portfolio/4-7.jpg"
      }
    ]
  },
  {
    name: "Post-Production",
    src:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2846&q=80",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim enim veniam,quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.",
    items: [
      {
        id: 4,
        title: "Editing",
        subtitle: "Mobile Apps",
        link: "/portfolio-details",
        src: "/assets/images/portfolio/4-5.jpg",
        thumbnail: "/assets/images/portfolio/4-5.jpg"
      },
      {
        id: 5,
        title: "Sound & Audio",
        subtitle: "Mobile Apps",
        link: "/portfolio-details",
        src: "/assets/images/portfolio/4-6.jpg",
        thumbnail: "/assets/images/portfolio/4-6.jpg"
      },
      {
        id: 6,
        title: "Color Correction",
        subtitle: "Mobile Apps",
        link: "/portfolio-details",
        src: "/assets/images/portfolio/4-7.jpg",
        thumbnail: "/assets/images/portfolio/4-7.jpg"
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
const features = [
  {
    icon: "",
    title: "Fully Responsive Layout",
    subtitle:
      "Responsive web design is an approach to web design that makes web pages render well on a variety of  screen sizes.",
    image: "/assets/images/demo/feature-1.png"
  },
  {
    icon: "",
    title: "SEO Friendly",
    subtitle:
      "Our theme is SEO friendly that aligns with your digital marketing strategies to bring more organic traffic to your website.",
    image: "/assets/images/demo/feature-2.png"
  },

  {
    icon: "",
    title: "Google Font",
    subtitle:
      "A vast collection of Google fonts are integrated with the theme. You can use any of them that goes with your branding.",
    image: "/assets/images/demo/feature-4.png"
  }
]
function Portfolio() {
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
            label="Services"
            title="What We Offer"
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
                          <img src={category.src} />
                        </Col>

                        <Col md={6} lg={7}>
                          <div className="about-content">
                            <header className="el-heading ">
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
                <div className="theme-preview-features">
                  <div>
                    <Container className="container">
                      <div className="theme-preview-heading">
                        <h2>Why Choose Us?</h2>
                        <h3>Our Awesome key features.</h3>
                      </div>
                      <Row>
                        {category.items.map((item, index) => (
                          <Col key={index} xs={12} md={12} lg={6} xl={4}>
                            <div className="item">
                              <div
                                className="image overlay-image"
                                style={{
                                  backgroundImage: `url(${item.image})`
                                }}
                              ></div>
                              <h4>{item.title}</h4>
                              <p>{item.subtitle}</p>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </Container>
                  </div>
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </Container>
      </div>
    </section>
  )
}

export default Portfolio
