import ReactDOM from "react-dom"
import React, { useEffect } from "react"
import { Route, Redirect, useRouteMatch } from "react-router-dom"

import Contact from "../components/Contact"
import Layout from "../components/layout"

import styled, { keyframes } from "styled-components"
import { fadeInRight } from "react-animations"

const FadeInRightAnimation = keyframes`${fadeInRight}`

const FadeInRightDiv = styled.div`
  animation: 1s ${FadeInRightAnimation};
`

function ContactPage() {
  return (
    <Layout>
      <FadeInRightDiv>
        <Contact />
      </FadeInRightDiv>
    </Layout>
  )
}

export default ContactPage
