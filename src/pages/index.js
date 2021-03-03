import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ComingSoon from '../components/comingSoon'
import Intro from '../components/intro'
import Mom from '../components/mom'
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
    <ComingSoon />
    <Intro />
    <Lifestyle />
    <Quote
      quote="I alone cannot change the world, but I can cast a stone across the water to create many ripples."
      by='Mother Teresa'
    />
    <Mom />
    <DPC />
    <FAQ />
    <Join />
    <Testimonials />
  </Layout>
)

export default IndexPage
