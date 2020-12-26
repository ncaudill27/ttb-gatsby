import React from "react"

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
        <div first>
          <h1>For those who don’t know me, I’m Dr. Yolanda Rivera-Caudill</h1>
          <p>Double board certified in American Academy of Pediatrics and Lifestyle Medicine. I’ve been practicing medicine for 32 years, having started in Miami then landing in Savannah—my home for the last 12 years.</p>
          <p>I love making conversation with kids and seeing what comes out of their inquisitive minds. With the opening of my own practice, The Tiny Beet, I’ll be able to provide a more personalized approach to each patient and their families. Scroll on to read more on how we’ll make that possible / we’re structuring The Tiny Beet to make that happen.</p>
        </div>
        <h2 second>test</h2>
      </Dual>
    </Section>
    
  </Layout>
)

export default IndexPage
