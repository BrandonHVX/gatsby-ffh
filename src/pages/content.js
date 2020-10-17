import ReactDOM from "react-dom"
import React, { useEffect } from "react"
import { Route, Redirect, useRouteMatch } from "react-router-dom"

import Content from "../components/Content"
import Layout from "../components/layout"

import styled, { keyframes } from "styled-components"
import { fadeInRight, zoomIn } from "react-animations"

const FadeInRightAnimation = keyframes`${zoomIn}`

const FadeInRightDiv = styled.div`
  animation: 1s ${FadeInRightAnimation};
`

function Home() {
  return (
    <Layout>
      <FadeInRightDiv>
        <Content />
      </FadeInRightDiv>
    </Layout>
  )
}

export default Home
