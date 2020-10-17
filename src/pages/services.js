import React from "react"
import { Link } from "gatsby"
import Services from "../components/Services"
import Layout from "../components/layout"
import styled, { keyframes } from "styled-components"
import { fadeInRight } from "react-animations"

import { Container, Hidden, Row, Col } from "react-grid-system"
const FadeInRightAnimation = keyframes`${fadeInRight}`

const FadeInRightDiv = styled.div`
  animation: 1s ${FadeInRightAnimation};
`
const ServicePage = () => (
  <Layout>
    <FadeInRightDiv>
      <Services />
    </FadeInRightDiv>
  </Layout>
)

export default ServicePage
