import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from '../components/intro'
import Bio from '../components/bio'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <Bio />
  </Layout>
)

export default IndexPage
