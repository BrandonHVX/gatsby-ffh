import ReactDOM from "react-dom"
import React, { useEffect } from "react"
import { Route, Redirect, useRouteMatch } from "react-router-dom"

// Sections
// import Blog from "./Blog"
import About from "../components/About"
import Layout from "../components/layout"
import Intro from "../components/Intro"
import Header from "../components/Header"
// import Resume from "./Resume"
// import Service from "./Service"
// import Contact from "./Contact"
// import Portfolio from "./Portfolio"
// import Testimonial from "./Testimonial"
// import BlogSinglePost from "./BlogSinglePost"
// Components
import { fadeIn } from "react-animations"
import Helmet from "../components/common/Helmet"

import RedirectAs404 from "../components/common/RedirectAs404"
import styled, { keyframes } from "styled-components"
import { fadeInRight } from "react-animations"

const FadeInRightAnimation = keyframes`${fadeInRight}`

const FadeInRightDiv = styled.div`
  animation: 1s ${FadeInRightAnimation};
`

function Home() {
  return (
    <Layout>
      <FadeInRightDiv>
        <Intro />
      </FadeInRightDiv>
    </Layout>
  )
}

export default Home
