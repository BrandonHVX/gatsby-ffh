import React, { useEffect } from "react"

// Sections
// import Blog from "./Blog"

import Layout from "../components/layout"
import Intro from "../components/Intro"

// import Resume from "./Resume"
// import Service from "./Service"
// import Contact from "./Contact"
// import Portfolio from "./Portfolio"
// import Testimonial from "./Testimonial"
// import BlogSinglePost from "./BlogSinglePost"

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
