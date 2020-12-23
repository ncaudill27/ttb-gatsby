import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from '../components/section'
import Dual from '../components/dual'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section color='pri-light'>
      <div>
        <h1>Welcome<br />to<br />The Tiny Beet</h1>
        <p>After being in Savannah for 12 years, many of you already know me as Dr. Yolanda Rivera-Caudill. I’m ecstatic to announce that I will be opening my own practice: The Tiny Beet Lifestyle Medicine Pediatrics.</p>
        <p>At The Tiny Beet we strive to provide a comprehensive medical approach to our patients—doing more than just treating illnesses.</p>
        <p>Keep scrolling to read more on how my team and I are making this possible.</p>
      </div>
    </Section>
    <Section color='pri-dark'>
      <Dual section>
        <h1 first>test</h1>
        <h2 second>test</h2>
      </Dual>
    </Section>
    
  </Layout>
)

export default IndexPage
