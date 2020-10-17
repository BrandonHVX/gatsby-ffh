import React from "react"
import { Link } from "gatsby"
import About from "../components/About"
import Layout from "../components/layout"
import styled, { keyframes } from "styled-components"
import { fadeInRight, zoomIn } from "react-animations"

import { Container, Hidden, Row, Col } from "react-grid-system"
const FadeInRightAnimation = keyframes`${zoomIn}`

const FadeInRightDiv = styled.div`
  animation: 1s ${FadeInRightAnimation};
`
const Bio = () => (
  <Layout>
    <FadeInRightDiv>
      <About />
    </FadeInRightDiv>
  </Layout>
)

export default Bio
