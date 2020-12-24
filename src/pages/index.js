import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from '../components/intro'
import Section from '../components/section'
import Dual from '../components/dual'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <Section color='pri-dark'>
      <Dual section>
        <h1 first>test</h1>
        <h2 second>test</h2>
      </Dual>
    </Section>
    
  </Layout>
)

export default IndexPage
