import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from '../components/intro'
import Bio from '../components/bio'
import Lifestyle from '../components/lifestyle'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <Bio />
    <Lifestyle />
  </Layout>
)

export default IndexPage
