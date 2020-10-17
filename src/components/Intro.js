import React from "react"
import Slider from "react-slick"
import Particles from "react-particles-js"
import { Container } from "react-grid-system"

const color1 = "#343336"
const color2 = "#B408A4"

function Intro() {
  const sliderSettings = {
    dots: true,
    fade: true,
    arrows: false,
    autoplay: true
  }
  return (
    <section className="section section-hero section-hero-4 display-fit-screen">
      <Particles
        params={{
          particles: {
            number: {
              value: 120
            },
            size: {
              value: 3
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              }
            }
          }
        }}
        className="el-particles"
      />
      <Slider className="el-slider" {...sliderSettings}>
        <div className="slide">
          <div
            className="image overlay-image "
            style={{
              backgroundImage: `url("https://secureservercdn.net/198.71.233.214/489.7bf.myftpupload.com/wp-content/uploads/2017/07/SONStudiosInteriors2020-0092-scaled.jpg")`
            }}
          ></div>
        </div>
        <div className="slide">
          <div
            className="image overlay-image"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1574167455363-acc39a6c1d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80")`
            }}
          ></div>
        </div>
      </Slider>
      <div className="display-center">
        <Container>
          <div className="el-heading">
            <p className="el-icon">
              <span className="el-icon-title">We are Florida Film House.</span>
            </p>
            <h1>
              Our Passion.
              <br />
              Our Films. Our Life.
            </h1>
            <button className="button button-lg button-primary">
              <span className="text">My Portfolio</span>
            </button>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default Intro
