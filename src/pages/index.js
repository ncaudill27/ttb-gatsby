import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from '../components/intro'
import Lifestyle from '../components/lifestyle'
import DPC from '../components/dpc'
import Join from '../components/join'
import Quote from '../components/quote'
import Testimonials from '../components/testimonials'
import FAQ from '../components/faq'

import '../styles/calendly.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <Lifestyle />
    <DPC />
    <Testimonials />
    <FAQ />
    <Join />
    <Quote
      quote='The doctor or the future will give no medicine but will interest his patients in the care of the human frame, in diet and in the cause and prevention of disease.'
      by='Thomas A. Edison'
    />
  </Layout>
)

export default IndexPage
